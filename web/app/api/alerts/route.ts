import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("[POST /api/alerts] Triggered alert:", body);

  return NextResponse.json({
    ok: true,
    message: "Alert logged (demo — no persistence)",
    received: body,
  });
}
