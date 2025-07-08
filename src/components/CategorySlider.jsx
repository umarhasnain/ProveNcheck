"use client";

import { Carousel } from "react-scroll-carousel";
import Image from "next/image";

const categories = [
  { name: "SUVs", image: "/assets/categories/suv.jpg" },
  { name: "Sedans", image: "/assets/categories/sedan.jpg" },
  { name: "Hatchbacks", image: "/assets/categories/hatchback.jpg" },
  { name: "Electric Cars", image: "/assets/categories/electric.jpg" },
  { name: "Sports Cars", image: "/assets/categories/sports.jpg" },
  { name: "Pickup Trucks", image: "/assets/categories/truck.jpg" },
];

const CategorySlider = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Explore Our Vehicle Categories
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Choose your ideal vehicle from our wide range of categories.
          </p>
        </div>

        {/* Category Slider */}
        <Carousel
          speed={30}
          autoScroll
          pauseOnHover
          showArrows
          className="gap-6"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="w-52 min-w-[200px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-32 relative rounded-t-xl overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-3 text-center font-medium text-gray-700">
                {cat.name}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CategorySlider;
