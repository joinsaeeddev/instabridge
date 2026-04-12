import { NextRequest, NextResponse } from "next/server";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY ?? "";

export async function POST(request: NextRequest) {
  if (!PAYSTACK_SECRET_KEY) {
    return NextResponse.json(
      { error: "Payment is not configured on the server." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { email, amount, currency, metadata } = body;

  if (!email || !amount) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // Build the callback URL so Paystack redirects back to our success page
  const origin = request.nextUrl.origin;
  const callbackUrl = `${origin}/payment-success`;

  const res = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      // Paystack expects amount in the smallest currency unit (kobo/cents)
      amount: Math.round(amount * 100),
      currency: currency || "ZAR",
      callback_url: callbackUrl,
      metadata,
    }),
  });

  const data = await res.json();

  if (!data.status) {
    console.error("[Paystack] Initialize failed:", data);
    return NextResponse.json(
      { error: data.message || "Failed to initialize payment." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    authorization_url: data.data.authorization_url,
    reference: data.data.reference,
  });
}
