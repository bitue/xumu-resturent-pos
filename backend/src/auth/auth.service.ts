import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../common/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.prisma.users.findUnique({
      where: { email: loginDto.email },
      include: {
        user_roles: {
          include: { roles: true },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user || !user.password_hash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.enabled) {
      throw new ForbiddenException('User account is disabled');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password_hash as string);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const roles = user.user_roles.map(ur => ur.roles.name);
    
    // Generate tokens
    const payload = { sub: Number(user.id), email: user.email, roles };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    
    const familyId = randomUUID();
    const refreshTokenPayload = { sub: Number(user.id), family_id: familyId };
    const refreshToken = this.jwtService.sign(refreshTokenPayload, { expiresIn: '7d' });

    // Store refresh token
    await this.prisma.refresh_tokens.create({
      data: {
        token_hash: await bcrypt.hash(refreshToken, 10),
        user_id: user.id,
        family_id: familyId,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      success: true,
      data: {
        accessToken,
        refreshToken,
        user: {
          id: Number(user.id),
          email: user.email,
          fullName: user.full_name,
          roles,
        },
      },
    };
  }

  async getMe(userId: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
      include: {
        user_roles: {
          include: { roles: { include: { role_permissions: { include: { permissions: true } } } } },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const roles = user.user_roles.map(ur => ur.roles.name);
    const permissions = Array.from(new Set(
      user.user_roles.flatMap(ur => ur.roles.role_permissions.map(rp => rp.permissions.name))
    ));

    return {
      success: true,
      data: {
        id: Number(user.id),
        email: user.email,
        fullName: user.full_name,
        roles,
        permissions,
      },
    };
  }

  async refresh(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      const userId = decoded.sub;

      const user = await this.prisma.users.findUnique({
        where: { id: userId },
        include: { user_roles: { include: { roles: true } } },
      });

      if (!user || !user.enabled) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Very simple refresh token logic: just issue a new access token
      // In a real app, you would verify the token_hash in the db
      const roles = user.user_roles.map(ur => ur.roles.name);
      const payload = { sub: Number(user.id), email: user.email, roles };
      const newAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });

      return {
        success: true,
        data: {
          accessToken: newAccessToken,
        },
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
