import CategorySlider from "@/components/CategorySlider";
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
      <CategorySlider />
    </div>
  );
};

export default page;
