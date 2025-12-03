// import React from "react";
// import ifLogo from "../assets/logo-institut-francais.jpg";
// import nantesLogo from "../assets/logo-nantes.png";
// import charlesLogo from "../assets/lycee_polyvalent_charles_de_gaulle_logo.jpeg";
// import cambridgeLogo from "../assets/cambridge.png";

// const Partnerships: React.FC = () => {
//   const partners = [
//     {
//       name: "Institut Français",
//       description: "Coopération culturelle et linguistique.",
//       image: ifLogo,
//     },
//     {
//       name: "Nantes Terre Atlantique",
//       description: "Échanges pédagogiques et écologiques.",
//       image: nantesLogo,
//     },
//     {
//       name: "Lycée Polyvalent Charles de Gaulle",
//       description: "Partenariat d'excellence académique.",
//       image: charlesLogo,
//     },
//     {
//       name: "Cambridge English",
//       description: "Centre de préparation aux certifications.",
//       image: cambridgeLogo,
//     },
//   ];

//   return (
//     <section className="py-20 bg-slate-50 border-t border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
//             Réseau & Collaboration
//           </span>
//           <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
//             Nos Partenaires <span className="text-blue-600">Stratégiques</span>
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Le Groupe Scolaire Fès City tisse des liens forts avec des
//             institutions prestigieuses pour offrir à vos enfants une ouverture
//             sur le monde.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group h-full"
//             >
//               {/* Conteneur de l'image avec une taille fixe pour l'alignement */}
//               <div className="w-32 h-32 flex items-center justify-center mb-6 p-2 bg-white rounded-full shadow-inner border border-gray-50 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
//                 <img
//                   src={partner.image}
//                   alt={`Logo ${partner.name}`}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//               <h3 className="font-bold text-gray-800 text-lg leading-tight mb-3 min-h-[3rem] flex items-center justify-center">
//                 {partner.name}
//               </h3>
//               <p className="text-sm text-gray-500">{partner.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partnerships;

import React from "react";

// Importation des logos depuis le dossier assets
// Assurez-vous que les noms de fichiers correspondent exactement
import ifLogo from "../assets/logo-institut-francais.jpg";
import nantesLogo from "../assets/logo-nantes.png";
import charlesLogo from "../assets/lycee_polyvalent_charles_de_gaulle_logo.jpeg";
import cambridgeLogo from "../assets/cambridge.png";

const Partnerships: React.FC = () => {
  const partners = [
    {
      name: "Institut Français",
      description: "Coopération culturelle et linguistique.",
      image: ifLogo,
    },
    {
      name: "Nantes Terre Atlantique",
      description: "Échanges pédagogiques et écologiques.",
      image: nantesLogo,
    },
    {
      name: "Lycée Polyvalent Charles de Gaulle",
      description: "Partenariat d'excellence académique.",
      image: charlesLogo,
    },
    {
      name: "Cambridge English",
      description: "Centre de préparation aux certifications.",
      image: cambridgeLogo,
    },
  ];

  return (
    <section
      id="partners"
      className="py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
            Réseau & Collaboration
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Nos Partenaires <span className="text-blue-600">Stratégiques</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Le Groupe Scolaire Fès City tisse des liens forts avec des
            institutions prestigieuses pour offrir à vos enfants une ouverture
            sur le monde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group h-full"
            >
              {/* Conteneur de l'image avec une taille fixe pour l'alignement */}
              <div className="w-32 h-32 flex items-center justify-center mb-6 p-2 bg-white rounded-full shadow-inner border border-gray-50 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img
                  src={partner.image}
                  alt={`Logo ${partner.name}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-lg leading-tight mb-3 min-h-[3rem] flex items-center justify-center">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-500">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
