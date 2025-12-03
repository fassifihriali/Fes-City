// import React, { useState } from "react";
// import { Plane, MapPin, ChevronLeft, ChevronRight, Circle } from "lucide-react";

// import france1 from "../assets/france1.jpg";
// import france2 from "../assets/france2.png";
// import france3 from "../assets/france3.png";

// import england1 from "../assets/england1.png";
// import england2 from "../assets/england2.png";
// import england3 from "../assets/england3.png";

// interface TripData {
//   id: string;
//   country: string;
//   description: string;
//   type: string;
//   tags: string[];
//   images: string[];
//   themeColor: string; // 'blue' | 'red'
// }

// const SchoolTrips: React.FC = () => {
//   // Données des voyages (Images actuelles + nouvelles images)
//   const trips: TripData[] = [
//     {
//       id: "france",
//       country: "France",
//       type: "Voyage Culturel",
//       description:
//         "Découverte du patrimoine historique, visites de musées parisiens et échanges avec nos partenaires éducatifs français.",
//       tags: ["Paris", "Nantes", "Musée du Louvre", "Versailles"],
//       themeColor: "blue",
//       images: [
//         // Image Principale (celle que vous aviez)
//         "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
//         // Image 2 (Musée/Culture)
//         france1,
//         // Image 3 (Versailles/Architecture)
//         france2,
//         // Image 4 (Groupe/École - générique)
//         france3,

//         // Si vous utilisez les assets locaux, remplacez par :
//         // france1, france2, france3, france4
//       ],
//     },
//     {
//       id: "england",
//       country: "Angleterre",
//       type: "Séjour Linguistique",
//       description:
//         "Immersion totale dans la langue anglaise, visite des universités prestigieuses et découverte de la culture britannique.",
//       tags: ["Londres", "Cambridge", "Oxford", "Big Ben"],
//       themeColor: "red",
//       images: [
//         // Image Principale
//         "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
//         // Image 2 (Université)
//         england1,
//         // Image 3 (Bus/Rue)
//         england2,
//         // Image 4 (Étudiants)
//         england3,
//         // Si vous utilisez les assets locaux, remplacez par :
//         // england1, england2, england3, england4
//       ],
//     },
//   ];

//   return (
//     <section id="trips" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between mb-12">
//           <div className="text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//               Voyages & <span className="text-lime-500">Découvertes</span>
//             </h2>
//             <p className="text-lg text-gray-600">
//               L'école Fès City organise des séjours linguistiques et culturels
//               en Europe.
//             </p>
//           </div>
//           <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-5 py-3 rounded-full mt-6 md:mt-0 shadow-sm border border-blue-100">
//             <Plane size={20} />
//             <span className="font-semibold">Destinations Phares</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {trips.map((trip) => (
//             <TripGalleryCard key={trip.id} trip={trip} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Sous-composant pour gérer l'état de chaque carte individuellement
// const TripGalleryCard: React.FC<{ trip: TripData }> = ({ trip }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Empêche le clic de se propager
//     setCurrentImageIndex((prev) =>
//       prev === trip.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? trip.images.length - 1 : prev - 1
//     );
//   };

//   const goToImage = (index: number, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setCurrentImageIndex(index);
//   };

//   // Définition des couleurs dynamiques selon le thème
//   const gradientColor =
//     trip.themeColor === "blue" ? "from-blue-900/90" : "from-red-900/90";
//   const tagBg = "bg-white/10 border-white/30 backdrop-blur-sm";
//   const textColor =
//     trip.themeColor === "blue" ? "text-blue-100" : "text-red-100";

//   return (
//     <div className="group relative overflow-hidden rounded-2xl h-[500px] shadow-lg border-2 border-transparent hover:border-lime-200 transition-all duration-300">
//       {/* Images Slider */}
//       <div className="absolute inset-0 w-full h-full bg-gray-200">
//         {trip.images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`${trip.country} - image ${idx + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
//               idx === currentImageIndex
//                 ? "opacity-100 scale-105"
//                 : "opacity-0 scale-100"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Overlay Gradient */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-t ${gradientColor} via-transparent to-transparent opacity-90`}
//       ></div>

//       {/* Navigation Arrows (Visible on hover or mobile) */}
//       <button
//         onClick={prevImage}
//         className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-lime-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextImage}
//         className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-lime-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Dots Indicators (Top Right) */}
//       <div className="absolute top-4 right-4 flex gap-2 z-20">
//         {trip.images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={(e) => goToImage(idx, e)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               idx === currentImageIndex
//                 ? "bg-lime-400 w-6"
//                 : "bg-white/50 hover:bg-white"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="absolute bottom-0 left-0 p-8 text-white w-full z-10">
//         <div className="flex items-center gap-2 mb-2">
//           <MapPin size={18} className="text-lime-400" />
//           <span className="uppercase tracking-wider font-bold text-sm text-lime-400">
//             {trip.type}
//           </span>
//         </div>

//         <h3 className="text-4xl font-bold mb-3">{trip.country}</h3>

//         <p
//           className={`${textColor} mb-6 line-clamp-3 text-base leading-relaxed`}
//         >
//           {trip.description}
//         </p>

//         <div className="flex flex-wrap gap-2">
//           {trip.tags.map((tag, idx) => (
//             <span
//               key={idx}
//               className={`inline-block border ${tagBg} px-3 py-1 rounded-full text-xs font-medium`}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SchoolTrips;

import React, { useState } from "react";
import { Plane, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import france1 from "../assets/france1.jpg";
import france2 from "../assets/france2.png";
import france3 from "../assets/france3.png";

import england1 from "../assets/england1.png";
import england2 from "../assets/england2.png";
import england3 from "../assets/england3.png";

interface TripData {
  id: string;
  country: string;
  description: string;
  type: string;
  tags: string[];
  images: string[];
  themeColor: string; // 'blue' | 'red'
}

const SchoolTrips: React.FC = () => {
  const trips: TripData[] = [
    {
      id: "france",
      country: "France",
      type: "Voyage Culturel",
      description:
        "Découverte du patrimoine historique, visites de musées parisiens et échanges avec nos partenaires éducatifs français.",
      tags: ["Paris", "Nantes", "Musée du Louvre", "Versailles"],
      themeColor: "blue",
      images: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
        france1,
        france2,
        france3,
      ],
    },
    {
      id: "england",
      country: "Angleterre",
      type: "Séjour Linguistique",
      description:
        "Immersion totale dans la langue anglaise, visite des universités prestigieuses et découverte de la culture britannique.",
      tags: ["Londres", "Cambridge", "Oxford", "Big Ben"],
      themeColor: "red",
      images: [
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
        england1,
        england2,
        england3,
      ],
    },
  ];

  return (
    <section id="trips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Voyages & <span className="text-lime-500">Découvertes</span>
            </h2>
            <p className="text-lg text-gray-600">
              L'école Fès City organise des séjours linguistiques et culturels
              en Europe.
            </p>
          </div>
          <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-5 py-3 rounded-full mt-6 md:mt-0 shadow-sm border border-blue-100">
            <Plane size={20} />
            <span className="font-semibold">Destinations Phares</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trips.map((trip) => (
            <TripGalleryCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TripGalleryCard: React.FC<{ trip: TripData }> = ({ trip }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === trip.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? trip.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const gradientColor =
    trip.themeColor === "blue" ? "from-blue-900/90" : "from-red-900/90";
  const tagBg = "bg-white/10 border-white/30 backdrop-blur-sm";
  const textColor =
    trip.themeColor === "blue" ? "text-blue-100" : "text-red-100";

  return (
    <div className="group relative overflow-hidden rounded-2xl h-[390px] shadow-lg border-2 border-transparent hover:border-lime-200 transition-all duration-300">
      {/* Images */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {trip.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${trip.country} - image ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-contain bg-black transition-opacity duration-700 ease-in-out ${
              idx === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>

      {/* Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradientColor} via-transparent to-transparent opacity-90`}
      />

      {/* Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-lime-500 transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-lime-500 transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        {trip.images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => goToImage(idx, e)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentImageIndex
                ? "bg-lime-400 w-6"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 text-white w-full z-10">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={18} className="text-lime-400" />
          <span className="uppercase tracking-wider font-bold text-sm text-lime-400">
            {trip.type}
          </span>
        </div>

        <h3 className="text-4xl font-bold mb-3">{trip.country}</h3>

        <p className={`${textColor} mb-6 line-clamp-3 text-base`}>
          {trip.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {trip.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`inline-block border ${tagBg} px-3 py-1 rounded-full text-xs font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolTrips;
