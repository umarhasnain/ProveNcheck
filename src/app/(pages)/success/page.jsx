'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Optionally redirect to home after 10 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black px-4 text-center">
      <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">Payment Successful!</h1>
      <p className="text-gray-600 max-w-md mb-6">
        Thank you for your purchase. Your vehicle report will be delivered to your provided email within the selected timeframe.
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Back to Home
      </button>
    </section>
  );
};

export default SuccessPage;
