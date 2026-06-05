import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC = ['/', '/menu', '/reserve', '/login', '/register', '/oauth'];
const ROLE_GATES: Array<{ prefix: string; perm: string }> = [
  { prefix: '/admin', perm: 'system:config' },
  { prefix: '/pos',   perm: 'order:create' },
  { prefix: '/kds',   perm: 'order:update_status' },
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC.some(p => pathname === p || pathname.startsWith(p + '/'))) return NextResponse.next();

  // Try to read token from cookies
  const token = req.cookies.get('xuma_at')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const secret = process.env.JWT_SECRET || 'super-secret-key-that-must-be-at-least-32-chars-long-for-hs256-signature';
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    
    // Using string[] for permissions for simplicity, but adjust based on your payload format
    const permissions = (payload.permissions as string[]) ?? [];
    
    const gate = ROLE_GATES.find(g => pathname.startsWith(g.prefix));
    if (gate && !permissions.includes(gate.perm)) {
      return NextResponse.redirect(new URL('/forbidden', req.url));
    }
    
    return NextResponse.next();
  } catch (error) {
    console.error('JWT Verification failed:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
