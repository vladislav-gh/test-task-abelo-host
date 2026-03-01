import { NextRequest, NextResponse } from "next/server";

import { authCookiesGet } from "@/components/auth";
import { PAGES } from "@/config";

export default async function proxy(req: NextRequest) {
    const authCookies = await authCookiesGet();

    if (authCookies.accessToken && req.nextUrl.pathname.includes(PAGES.login)) {
        return NextResponse.redirect(new URL(PAGES.home, req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
