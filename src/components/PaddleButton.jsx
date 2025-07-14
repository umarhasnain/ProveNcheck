"use client";

import React, { useEffect } from "react";
import { loadPaddle } from "@paddle/paddle-js";

const PaddleButton = ({ planTitle }) => {
  useEffect(() => {
    const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (!clientToken) return;
    loadPaddle({ environment: "production", clientToken });
  }, []);

  const getPriceId = () => {
    const prices = {
      Basic: process.env.NEXT_PUBLIC_PADDLE_PRICE_BASIC,
      Standard: process.env.NEXT_PUBLIC_PADDLE_PRICE_STANDARD,
      Premium: process.env.NEXT_PUBLIC_PADDLE_PRICE_PREMIUM,
    };
    return prices[planTitle];
  };

  const handleCheckout = async () => {
    const priceId = getPriceId();
    const paddle = await loadPaddle({ environment: "production", clientToken: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN });

    paddle.Checkout.open({
      items: [{ priceId }],
      customer: {
        email: "user@example.com", // Replace with dynamic user email if available
      },
    });
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mt-4"
    >
      Buy {planTitle} Plan
    </button>
  );
};

export default PaddleButton;
