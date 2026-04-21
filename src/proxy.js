import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/api/feedback")) {
    return NextResponse.json({
      status: 404,
    });
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/api/:path*",
};
