"use client";

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from '@/contexts/CartContext';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
   const { cart, removeFromCart, updateQuantity } = useCart();
    const subtotal = cart.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0
    );
 // const amount = 49.99;

  return (
    <main className="max-w-6xl mx-auto p-10 text-black text-center border m-10 rounded-md bg-white">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2"> NIKE</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ₹  {subtotal}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(subtotal),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={subtotal} />
      </Elements>
    </main>
  );
}

