'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle } from 'react-icons/fa';
import { usePlan } from '@/context/PlanContext';
import { initializePaddle } from '@paddle/paddle-js'; // ✅ fixed import

const plans = [
  {
    title: 'Basic',
    price: '$30.99',
    duration: 'Delivered within 12 to 24 hours',
    features: [
      'Vehicle Overview',
      'Market Value',
      'Vehicle Specifications',
      'Sales Listing',
      'Accident Record',
      'Theft Record',
      'Impounds',
      'Exports',
      'Active Warranties',
      'Expired Warranties',
      'Open Recals',
      'Options & Packages Installed',
    ],
  },
  {
    title: 'Standard',
    price: '$60.99',
    duration: 'Delivered within 10 to 12 hours',
    features: [
      'All Basic Features',
      'HQ Car Images',
      'Salvage',
      'Title Brand',
      'Vehicle Overview',
      'Market Value',
      'Vehicle Specifications',
      'Sales Listing',
      'Accident Record',
      'Theft Record',
      'Impounds',
      'Exports',
      'Active Warranties',
      'Expired Warranties',
      'Open Recals',
      'Options & Packages Installed',
    ],
  },
  {
    title: 'Premium',
    price: '$90.99',
    duration: 'Delivered within 6 to 8 hours',
    features: [
      'All Standard Features',
      'Buy One Get Another Report Free for Lifetime',
      '2 Buyers Numbers from our Directory',
      'Title Record',
      'Vehicle Overview',
      'Market Value',
      'Vehicle Specifications',
      'Sales Listing',
      'Accident Record',
      'Theft Record',
      'Impounds',
      'Exports',
      'Active Warranties',
      'Expired Warranties',
      'Open Recals',
      'Options & Packages Installed',
    ],
  },
];

const VehicleReportPlans = () => {
  const { setSelectedPlan } = usePlan();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (clientToken) {
      initializePaddle({ environment: 'production', token: clientToken });
    }
  }, []);

  const getPriceId = (planTitle) => {
    const priceMap = {
      Basic: process.env.NEXT_PUBLIC_PADDLE_PRICE_BASIC,
      Standard: process.env.NEXT_PUBLIC_PADDLE_PRICE_STANDARD,
      Premium: process.env.NEXT_PUBLIC_PADDLE_PRICE_PREMIUM,
    };
    return priceMap[planTitle];
  };

  const handleSelectPlan = async (plan) => {
    setSelectedPlan(plan);

    const priceId = getPriceId(plan.title);
    const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

    if (!priceId || !clientToken) {
      console.error('Missing Paddle config.');
      return;
    }

    const paddle = await initializePaddle({ environment: 'production', token: clientToken });

    paddle.Checkout.open({
      items: [{ priceId }],
      customer: {
        email: 'user@example.com', // Optional: dynamically pass actual user
      },
    });
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 border-t-4 border-blue-500 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-2xl font-semibold text-blue-600">
                {plan.price}{' '}
                <span className="text-base font-normal text-gray-500">/ per Report</span>
              </p>
              <p className="text-sm text-gray-500 mt-1 mb-4">{plan.duration}</p>

              <button
                onClick={() => handleSelectPlan(plan)}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition mb-4"
              >
                Get Report
              </button>

              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleReportPlans;
