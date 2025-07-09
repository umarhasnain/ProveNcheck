'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CheckoutForm = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Billing + Vehicle Form */}
        <div
          className="lg:col-span-2 bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Details</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="form-input" placeholder="Full Name *" required />
            <input className="form-input" placeholder="Phone *" required />
            <input className="form-input" placeholder="Email *" required />
            <input className="form-input" placeholder="Address *" required />
            <select className="form-input" required>
              <option value="">Country *</option>
              <option value="USA">USA</option>
              <option value="Pakistan">Pakistan</option>
            </select>
            <input className="form-input" placeholder="Zip Code *" required />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Vehicle Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="form-input" placeholder="Vehicle Name *" required />
            <input className="form-input" placeholder="VIN Number *" required />
            <input className="form-input" placeholder="Mileage *" required />
            <input className="form-input" placeholder="Number Plate *" required />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Additional Information</h2>
          <textarea
            className="form-input h-24"
            placeholder="Order notes (optional)"
          ></textarea>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Confirm & Checkout
          </button>
        </div>

        {/* Order Summary */}
        <div
          className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-6 h-fit"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Order</h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Package :</span>
            <span className="font-medium">Standard</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Category :</span>
            <span className="font-medium">Boat</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>$60</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;

// Tailwind Custom Input Style
// Paste this in global CSS or include utility classes
// .form-input {
//   @apply w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-sm;
// }
