import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-dev';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    let roles: string[] = [];
    let permissions: string[] = [];

    // Mock Authentication Logic
    if (password !== 'admin' && password !== 'pos' && password !== 'kds') {
      return NextResponse.json({ success: false, message: 'Invalid credentials. Try password: admin, pos, or kds' }, { status: 401 });
    }

    if (email.includes('admin')) {
      roles = ['ROLE_ADMIN'];
      permissions = ['SYSTEM_CONFIG'];
    } else if (email.includes('pos')) {
      roles = ['ROLE_CASHIER'];
      permissions = ['ORDER_CREATE'];
    } else if (email.includes('kds')) {
      roles = ['ROLE_KITCHEN_STAFF'];
      permissions = ['ORDER_UPDATE_STATUS'];
    } else {
      roles = ['ROLE_ADMIN'];
      permissions = ['SYSTEM_CONFIG', 'ORDER_CREATE', 'ORDER_UPDATE_STATUS'];
    }

    const mockUser = {
      id: 1,
      email: email,
      firstName: 'Mock',
      lastName: 'User',
      roles: roles
    };

    // Sign a real JWT using jose so the middleware.ts accepts it
    const token = await new SignJWT({ sub: mockUser.email, permissions })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(new TextEncoder().encode(JWT_SECRET));

    // Create the response and inject the HttpOnly cookie
    const response = NextResponse.json({
      success: true,
      data: {
        accessToken: token,
        user: mockUser
      }
    });

    response.cookies.set({
      name: 'xuma_at',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
