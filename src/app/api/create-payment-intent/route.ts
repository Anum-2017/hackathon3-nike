import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

interface PaymentParams {
  amount: string;
}

export async function POST(request: NextRequest) {
  try {
    // Assuming you're passing a JSON payload with `amount`
    const { amount }: PaymentParams = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(amount, 10), // Ensure `amount` is a number
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
