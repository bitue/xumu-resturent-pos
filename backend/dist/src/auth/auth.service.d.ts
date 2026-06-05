import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../common/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        success: boolean;
        data: {
            accessToken: string;
            refreshToken: string;
            user: {
                id: number;
                email: string;
                fullName: string;
                roles: string[];
            };
        };
    }>;
    getMe(userId: number): Promise<{
        success: boolean;
        data: {
            id: number;
            email: string;
            fullName: string;
            roles: string[];
            permissions: string[];
        };
    }>;
    refresh(token: string): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
}
