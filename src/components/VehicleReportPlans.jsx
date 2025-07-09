'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle } from 'react-icons/fa';

const plans = [
  {
    title: 'Basic',
    price: '$30.00',
    duration: 'Delivered within 12 to 24 hours',
    features: [
      'Vehicle Overview',
      'Market Value',
      'Vehicle Specifications',
      'Sales Listing',
      'Accident Record',
      'Theft Record',
      'Impounds'
    ]
  },
  {
    title: 'Standard',
    price: '$60.00',
    duration: 'Delivered within 10 to 12 hours',
    features: [
      'All Basic Features',
      'HQ Car Images',
      'Salvage',
      'Title Brand',
      'Vehicle Overview',
      'Market Value',
      'Vehicle Specifications'
    ]
  },
  {
    title: 'Premium',
    price: '$90.00',
    duration: 'Delivered within 6 to 8 hours',
    features: [
      'All Standard Features',
      'Buy One Get Another Report Free for Lifetime',
      '2 Buyers Numbers from our Directory',
      'Title Record',
      'Vehicle Overview',
      'Market Value',
      'Vehicle Specifications'
    ]
  }
];

const VehicleReportPlans = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why You Need a Vehicle Report</h2>
            <p className="text-gray-600 leading-relaxed">
              Immediate and Comprehensive Vehicle Reports. Understanding the full history of a vehicle is essential for making informed decisions. Our partnership with NMVTIS ensures you receive the most reliable and up-to-date vehicle history. Peace of mind, enhanced safety, and transparency come standard.
            </p>
          </div>
          <img
            data-aos="fade-left"
            src="https://images.unsplash.com/photo-1519821172141-b5d8b6611a2e"
            alt="Vehicle Report"
            className="rounded-xl shadow-lg w-full"
          />
        </div> */}

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 border-t-4 border-blue-500 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-2xl font-semibold text-blue-600">{plan.price} <span className="text-base font-normal text-gray-500">/ per Report</span></p>
              <p className="text-sm text-gray-500 mt-1 mb-4">{plan.duration}</p>
              <button className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition mb-4">Get Report</button>
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