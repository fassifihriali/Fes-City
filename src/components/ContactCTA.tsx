// import React from "react";
// import { Phone, Mail, MapPin, Calendar } from "lucide-react";

// const ContactCTA: React.FC = () => {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-blue-900 text-white relative overflow-hidden"
//     >
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lime-500 rounded-full opacity-10 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Prêt à rejoindre la famille <br />
//               <span className="text-lime-400">Fès City ?</span>
//             </h2>
//             <p className="text-blue-100 text-lg mb-8 leading-relaxed">
//               Les inscriptions sont ouvertes. Nous serions ravis de vous
//               accueillir pour une visite de l'école et répondre à toutes vos
//               questions.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lime-400">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-blue-200">Appelez-nous</p>
//                   <p className="text-xl font-semibold">+212 5 35 93 24 86</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lime-400">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-blue-200">Écrivez-nous</p>
//                   <p className="text-xl font-semibold">contact@fes-city.ma</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lime-400">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-blue-200">Visitez-nous</p>
//                   <p className="text-lg font-semibold">
//                     Route de Sefrou, Fès, Maroc
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
//             <h3 className="text-2xl font-bold mb-6 text-blue-900">
//               Demande d'information
//             </h3>
//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Nom du parent
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-all"
//                     placeholder="Votre nom"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Téléphone
//                   </label>
//                   <input
//                     type="tel"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-all"
//                     placeholder="06..."
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Niveau concerné
//                 </label>
//                 <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-all">
//                   <option>Maternelle</option>
//                   <option>Primaire</option>
//                   <option>Collège</option>
//                   <option>Lycée</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows={3}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-all"
//                   placeholder="Comment pouvons-nous vous aider ?"
//                 ></textarea>
//               </div>

//               <button className="w-full py-3 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2">
//                 <Calendar size={20} />
//                 Prendre rendez-vous
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactCTA;

import React from "react";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-blue-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lime-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Prêt à rejoindre la famille <br />
            <span className="text-lime-400">Fès City ?</span>
          </h2>
          <p className="text-blue-100 text-xl leading-relaxed">
            Les inscriptions sont ouvertes. Nous serions ravis de vous
            accueillir pour une visite de l'école et répondre à toutes vos
            questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} className="text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-3">Appelez-nous</h3>
            <p className="text-blue-200 mb-4">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
            <a
              href="tel:+212535932486"
              className="text-lime-400 font-semibold text-lg hover:text-lime-300 transition-colors"
            >
              +212 5 35 93 24 86
            </a>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} className="text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-3">Écrivez-nous</h3>
            <p className="text-blue-200 mb-4">
              Envoyez-nous vos questions par email, nous vous répondrons
              rapidement
            </p>
            <a
              href="mailto:contact@fes-city.ma"
              className="text-lime-400 font-semibold text-lg hover:text-lime-300 transition-colors break-all"
            >
              groupescolairefescity1@gmail.com
            </a>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin size={32} className="text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visitez-nous</h3>
            <p className="text-blue-200 mb-4">
              Venez découvrir notre campus et nos installations modernes
            </p>
            <p className="text-lime-400 font-semibold text-lg">
              Champ de Course Rue Lalla Aicha
              <br />
              Fès, Maroc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
