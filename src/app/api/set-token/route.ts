import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  try {
    const { token } = await req.json();
    cookieStore.set("token", token);
    return NextResponse.json({
      error: false,
      statusCode: 200,
      message: "Token set",
    });
  } catch {
    return NextResponse.json({
      error: true,
      statusCode: 400,
      message: "Invalid token",
    });
  }
}
