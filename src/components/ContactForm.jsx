'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 backdrop-blur-md"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

        <form
          action="https://formsubmit.co/youremail@example.com" // Replace with your email
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jackson Mile"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
