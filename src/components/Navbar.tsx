// import React, { useState, useEffect } from "react";
// import { Menu, X, Phone, Mail } from "lucide-react";
// import logo from "../assets/logo_fes_city.jpeg";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     // { name: "Accueil", href: "#home" },
//     // { name: "Pourquoi nous ?", href: "#why-us" },
//     // { name: "Parcours", href: "#path" },
//     // { name: "Philosophie", href: "#philosophy" },
//     // { name: "Contact", href: "#contact" },
//     { name: "Accueil", href: "#home" },
//     { name: "L'École", href: "#why-us" },
//     { name: "Parcours", href: "#path" },
//     { name: "Résultats", href: "#results" },
//     { name: "Voyages", href: "#trips" },
//     { name: "Partenaires", href: "#partners" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center gap-3">
//             {/* Note: In a real scenario, replace the src below with the actual path to the logo file provided by the user */}
//             <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden">
//               <img
//                 src={logo}
//                 alt="Fès City Logo Placeholder"
//                 className="object-cover w-full h-full opacity-80"
//               />
//             </div>
//             <div className="flex flex-col">
//               <span
//                 className={`font-bold text-xl leading-none ${
//                   scrolled ? "text-gray-700" : "text-gray-800"
//                 }`}
//               >
//                 Groupe Scolaire
//               </span>
//               <span className="font-extrabold text-2xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
//                 Fès City
//               </span>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`font-medium transition-colors hover:text-lime-600 ${
//                   scrolled ? "text-gray-700" : "text-gray-800"
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
//             >
//               S'inscrire
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-blue-600 focus:outline-none"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
//           <div className="px-4 pt-2 pb-6 space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <div className="pt-4 flex flex-col gap-3">
//               <a
//                 href="tel:+212123456789"
//                 className="flex items-center gap-2 text-gray-600 px-3"
//               >
//                 <Phone size={18} className="text-lime-600" />{" "}
//                 <span>05 35 93 24 86</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../assets/logo_fes_city.jpeg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "L'École", href: "#why-us" },
    { name: "Parcours", href: "#path" },
    { name: "Résultats", href: "#results" },
    { name: "Voyages", href: "#trips" },
    { name: "Partenaires", href: "#partners" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Note: In a real scenario, replace the src below with the actual path to the logo file provided by the user */}
            <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden">
              <img
                src={logo}
                alt="Fès City Logo Placeholder"
                className="object-cover w-full h-full opacity-80"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-xl leading-none ${
                  scrolled ? "text-gray-700" : "text-gray-800"
                }`}
              >
                Groupe Scolaire
              </span>
              <span className="font-extrabold text-2xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
                Fès City
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-lime-600 text-sm xl:text-base ${
                  scrolled ? "text-gray-700" : "text-gray-800"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm xl:text-base"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-bold text-blue-600 bg-blue-50"
            >
              S'inscrire / Contact
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+212123456789"
                className="flex items-center gap-2 text-gray-600 px-3"
              >
                <Phone size={18} className="text-lime-600" />{" "}
                <span>05 35 XX XX XX</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
