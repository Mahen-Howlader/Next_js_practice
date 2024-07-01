import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookie = request.cookies.get("token") 
  const co = "mahin"
  if(!cookie || cookie.value !== co){
      return NextResponse.redirect(new URL("/login", request.url))
  }
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.redirect(new URL('/services', request.url))
  // }
  // }

  return NextResponse.next()

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard',"/services"],
}