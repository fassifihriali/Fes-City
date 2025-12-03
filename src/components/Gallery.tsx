import fes1 from "../assets/fes1.png";
import fes2 from "../assets/fes2.png";
import fes3 from "../assets/fes3.png";
import fes4 from "../assets/fes4.png";

import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            La vie à <span className="text-blue-600">Fès City</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Découvrez notre quotidien en images
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Masonry-style grid simulation */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src={fes2}
              alt="School library"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={fes1}
              alt="Kids raising hands"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={fes4}
              alt="Science lab"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="col-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src={fes3}
              alt="Sports"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
