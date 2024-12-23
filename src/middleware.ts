import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const publicPaths = [
  "/",
  "/_not-found",
  "/about",
  "/bespoke",
  "/collections",
  "/contact",
  "/products",
  "/terms-condition",
];

export const authorizedPaths = ["/cart"];

const matchDynamicRoute = ({
  pathname,
  ifTokenNotExist,
}: {
  pathname: string;
  ifTokenNotExist: boolean;
}): boolean => {
  if (pathname.startsWith("/product-details/")) {
    return true;
  }
  if (pathname.startsWith("/products/")) {
    return true;
  }
  if (pathname.startsWith("/my")) {
    if (ifTokenNotExist) {
      return false;
    }
    return true;
  }
  return false;
};

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const ifTokenNotExist = token === "" || token === undefined || token === null;

  const url = new URL(request.nextUrl.href);
  const pathname = url.pathname;

  if (
    publicPaths.includes(pathname) ||
    matchDynamicRoute({ pathname, ifTokenNotExist })
  ) {
    return NextResponse.next();
  }

  if (pathname === authorizedPaths.find((path) => path === pathname)) {
    if (ifTokenNotExist) {
      // TODO: While redirecting to login page open the login modal.
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
