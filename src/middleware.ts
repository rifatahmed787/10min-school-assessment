import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  interface DecodedToken {
    role: string; 
  }
  const token = request?.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/en/login", request.url));
  }
  
  let user: DecodedToken;
  try {
    user = jwtDecode<DecodedToken>(token);  
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL("/en/login", request.url));
  }
  
  if (user?.role === "ADMIN"|| user?.role ==="SUPERADMIN") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/en/login", request.url));
  }
}

export const config = {
  matcher: ["/en/dashboard/:path*"],
};