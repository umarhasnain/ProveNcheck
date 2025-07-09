import VehicleReportPlans from "@/components/VehicleReportPlans";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="relative flex items-center justify-center h-[200px] md:h-[300px] w-full bg-gradient-to-r from-black via-gray-900 to-black text-center">
        <div className="z-10 px-4">
          <p className="text-[#6CA9D7] text-sm md:text-base font-semibold mb-2">
            Packages
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Select The Categories
          </h2>
        </div>
      </section>
      <div className="max-w-7xl mx-auto">

<div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why You Need a Vehicle Report
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Immediate and Comprehensive Vehicle Reports. Understanding the full
            history of a vehicle is essential for making informed decisions. Our
            partnership with NMVTIS ensures you receive the most reliable and
            up-to-date vehicle history. Peace of mind, enhanced safety, and
            transparency come standard.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src="https://images.unsplash.com/photo-1519821172141-b5d8b6611a2e"
          alt="Vehicle Report"
          className="rounded-xl shadow-lg w-full"
        />
      </div>
      </div>
      
      <VehicleReportPlans />
    </div>
  );
};

export default page;
