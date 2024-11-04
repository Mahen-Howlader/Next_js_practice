import { NextResponse } from "next/server"
const user = true;
export const middleware = (request) => {
    let cookie = request.cookies.get('name');
    console.log(cookie)
    if (!cookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/dashboard', "/about"],
}