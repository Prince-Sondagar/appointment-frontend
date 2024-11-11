import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
  const publicRoutes = ["/login", "/signup"];
  const token = request.cookies.get("token")?.value;

  const url = request.nextUrl.clone();

  if (!token && !publicRoutes.includes(request.nextUrl.pathname)) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname === "/" && token) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (token && publicRoutes.includes(request.nextUrl.pathname)) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup", "/main", "/dashboard"],
};
