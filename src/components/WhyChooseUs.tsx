// import React from "react";
// import { BookOpen, Microscope, Music, Users, ArrowUpRight } from "lucide-react";

// const FeatureCard: React.FC<{
//   title: string;
//   desc: string;
//   icon: React.ReactNode;
//   color: string;
// }> = ({ title, desc, icon, color }) => (
//   <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
//     <div
//       className={`absolute top-0 right-0 w-32 h-32 bg-${color}-100 rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform`}
//     ></div>
//     <div
//       className={`w-14 h-14 rounded-xl bg-${color}-100 text-${color}-600 flex items-center justify-center mb-6 relative z-10`}
//     >
//       {icon}
//     </div>
//     <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
//       {title}
//     </h3>
//     <p className="text-gray-600 leading-relaxed relative z-10">{desc}</p>
//     <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
//       En savoir plus <ArrowUpRight size={16} className="ml-1" />
//     </div>
//   </div>
// );

// const WhyChooseUs: React.FC = () => {
//   return (
//     <section id="why-us" className="py-20 md:py-32 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
//             Nos Atouts
//           </h2>
//           <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Pourquoi choisir <span className="text-lime-600">Fès City</span> ?
//           </h3>
//           <p className="text-lg text-gray-600">
//             Une éducation complète pour l'épanouissement de vos enfants, basée
//             sur l'excellence et le bien-être.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <FeatureCard
//             title="Pédagogie active"
//             desc="Une approche centrée sur l'élève pour développer son autonomie et sa curiosité."
//             icon={<BookOpen size={28} />}
//             color="blue"
//           />
//           <FeatureCard
//             title="Infrastructures Modernes"
//             desc="Des laboratoires équipés et des salles informatiques de dernière génération."
//             icon={<Microscope size={28} />}
//             color="lime"
//           />
//           <FeatureCard
//             title="Activités Riches"
//             desc="Un programme parascolaire varié incluant sport, art et théâtre."
//             icon={<Music size={28} />}
//             color="purple"
//           />
//           <FeatureCard
//             title="Suivi Personnalisé"
//             desc="Une communication fluide et constante avec les parents pour la réussite de chacun."
//             icon={<Users size={28} />}
//             color="orange"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import { BookOpen, Microscope, Music, Users } from "lucide-react";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgClass: string;
  iconBgClass: string;
  iconTextClass: string;
}> = ({ title, desc, icon, bgClass, iconBgClass, iconTextClass }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
    <div
      className={`absolute top-0 right-0 w-32 h-32 ${bgClass} rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform`}
    ></div>
    <div
      className={`w-14 h-14 rounded-xl ${iconBgClass} ${iconTextClass} flex items-center justify-center mb-6 relative z-10`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed relative z-10">{desc}</p>
    {/* <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
      En savoir plus <ArrowUpRight size={16} className="ml-1" />
    </div> */}
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wide mb-3">
            Nos Atouts
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir <span className="text-lime-600">Fès City</span> ?
          </h3>
          <p className="text-lg text-gray-600">
            Une éducation complète pour l'épanouissement de vos enfants, basée
            sur l'excellence et le bien-être.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Pédagogie active"
            desc="Une approche centrée sur l'élève pour développer son autonomie et sa curiosité."
            icon={<BookOpen size={28} />}
            bgClass="bg-blue-100"
            iconBgClass="bg-blue-100"
            iconTextClass="text-blue-600"
          />
          <FeatureCard
            title="Infrastructures Modernes"
            desc="Des laboratoires équipés et des salles informatiques de dernière génération."
            icon={<Microscope size={28} />}
            bgClass="bg-lime-100"
            iconBgClass="bg-lime-100"
            iconTextClass="text-lime-600"
          />
          <FeatureCard
            title="Activités Riches"
            desc="Un programme parascolaire varié incluant sport, art et théâtre."
            icon={<Music size={28} />}
            bgClass="bg-purple-100"
            iconBgClass="bg-purple-100"
            iconTextClass="text-purple-600"
          />
          <FeatureCard
            title="Suivi Personnalisé"
            desc="Une communication fluide et constante avec les parents pour la réussite de chacun."
            icon={<Users size={28} />}
            bgClass="bg-orange-100"
            iconBgClass="bg-orange-100"
            iconTextClass="text-orange-600"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
