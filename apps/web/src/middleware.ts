import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC = ['/', '/menu', '/reserve', '/login', '/register', '/oauth'];
const ROLE_GATES: Array<{ prefix: string; roles: string[] }> = [
  { prefix: '/admin', roles: ['ADMIN', 'SUPER_ADMIN'] },
  { prefix: '/pos',   roles: ['MANAGER', 'CASHIER', 'WAITER', 'ADMIN', 'SUPER_ADMIN'] },
  { prefix: '/kds',   roles: ['KITCHEN_STAFF', 'MANAGER', 'ADMIN', 'SUPER_ADMIN'] },
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC.some(p => pathname === p || pathname.startsWith(p + '/'))) return NextResponse.next();

  // Try to read token from cookies — backend sets it as 'accessToken'
  const token = req.cookies.get('accessToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const secret = process.env.JWT_SECRET || 'super-secret-key-that-must-be-at-least-32-chars-long-for-hs256-signature';
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    
    // JWT payload contains `roles` array (set in auth.service.ts)
    const roles = (payload.roles as string[]) ?? [];
    
    const gate = ROLE_GATES.find(g => pathname.startsWith(g.prefix));
    if (gate && !gate.roles.some(r => roles.includes(r))) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    return NextResponse.next();
  } catch (error) {
    // Token expired or invalid — redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
