// import React from "react";
// import {
//   Award,
//   CheckCircle,
//   TrendingUp,
//   BookOpen,
//   Star,
//   GraduationCap,
// } from "lucide-react";

// interface ExamCardProps {
//   title: string;
//   subtitle: string;
//   icon: React.ReactNode;
//   colorClass: string;
//   textClass: string;
//   stats: { label: string; value: string }[];
//   grades: { subject: string; grade: string }[];
// }

// const ExamCard: React.FC<ExamCardProps> = ({
//   title,
//   subtitle,
//   icon,
//   colorClass,
//   textClass,
//   stats,
//   grades,
// }) => (
//   <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
//     <div className={`${colorClass} p-5 text-white text-center`}>
//       <div className="flex justify-center mb-3">{icon}</div>
//       <h3 className="text-xl font-bold">{title}</h3>
//       <p className="opacity-90 text-sm font-medium">{subtitle}</p>
//     </div>
//     <div className="p-6">
//       <div className="flex items-center justify-around gap-2 mb-6 border-b border-gray-100 pb-6">
//         {stats.map((stat, idx) => (
//           <React.Fragment key={idx}>
//             <div className="text-center">
//               <span className={`block text-2xl font-extrabold ${textClass}`}>
//                 {stat.value}
//               </span>
//               <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide block mt-1">
//                 {stat.label}
//               </span>
//             </div>
//             {idx < stats.length - 1 && (
//               <div className="h-8 w-px bg-gray-200"></div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       <div className="space-y-3">
//         <h4 className="text-gray-800 text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
//           <CheckCircle size={16} className={textClass} /> Performances :
//         </h4>
//         <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 space-y-2">
//           {grades.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex justify-between items-center text-sm"
//             >
//               <span className="text-gray-600 font-medium">{item.subject}</span>
//               <span className="font-bold text-gray-900 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-100">
//                 {item.grade}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ExamResults: React.FC = () => {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wide mb-3">
//             Résultats & Palmarès
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             L'Excellence <span className="text-lime-600">Académique</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             De la 6ème année primaire jusqu'au Baccalauréat, nos élèves se
//             distinguent par des résultats exceptionnels chaque année.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* 6ème Année Primaire */}
//           <ExamCard
//             title="6ème Année"
//             subtitle="Certificat Primaire"
//             icon={<Star size={28} className="text-white" />}
//             colorClass="bg-lime-500"
//             textClass="text-lime-600"
//             stats={[
//               { value: "100%", label: "Réussite" },
//               { value: "95%", label: "Mention T.B." },
//             ]}
//             grades={[
//               { subject: "Mathématiques", grade: "9.8/10" },
//               { subject: "Français", grade: "9.5/10" },
//               { subject: "Arabe", grade: "9.7/10" },
//             ]}
//           />

//           {/* 3ème Année Collège */}
//           <ExamCard
//             title="3ème Année"
//             subtitle="Brevet des Collèges"
//             icon={<BookOpen size={28} className="text-white" />}
//             colorClass="bg-blue-500"
//             textClass="text-blue-600"
//             stats={[
//               { value: "99%", label: "Réussite" },
//               { value: "18.5", label: "Meilleure Moy." },
//             ]}
//             grades={[
//               { subject: "Maths", grade: "19.5/20" },
//               { subject: "Physique", grade: "19.0/20" },
//               { subject: "SVT", grade: "18.5/20" },
//             ]}
//           />

//           {/* 1ère Année Bac */}
//           <ExamCard
//             title="1ère Bac"
//             subtitle="Examen Régional"
//             icon={<Award size={28} className="text-white" />}
//             colorClass="bg-indigo-600"
//             textClass="text-indigo-600"
//             stats={[
//               { value: "Top 5", label: "Région Fès" },
//               { value: "19.15", label: "Note Max" },
//             ]}
//             grades={[
//               { subject: "Français", grade: "19.5/20" },
//               { subject: "Ed. Islamique", grade: "19.75/20" },
//               { subject: "Hist-Géo", grade: "19.0/20" },
//             ]}
//           />

//           {/* 2ème Année Bac */}
//           <ExamCard
//             title="2ème Bac"
//             subtitle="Examen National"
//             icon={<GraduationCap size={28} className="text-white" />}
//             colorClass="bg-slate-800"
//             textClass="text-slate-800"
//             stats={[
//               { value: "98%", label: "Mention Bien+" },
//               { value: "19.25", label: "Moyenne Gén." },
//             ]}
//             grades={[
//               { subject: "Maths (SM)", grade: "20/20" },
//               { subject: "Physique (PC)", grade: "19.5/20" },
//               { subject: "SVT", grade: "19.0/20" },
//             ]}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExamResults;

import React from "react";
import {
  Award,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Star,
  GraduationCap,
} from "lucide-react";

interface ExamCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  colorClass: string;
  textClass: string;
  stats: { label: string; value: string }[];
  grades: { subject: string; grade: string }[];
}

const ExamCard: React.FC<ExamCardProps> = ({
  title,
  subtitle,
  icon,
  colorClass,
  textClass,
  stats,
  grades,
}) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className={`${colorClass} p-5 text-white text-center`}>
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="opacity-90 text-sm font-medium">{subtitle}</p>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-around gap-2 mb-6 border-b border-gray-100 pb-6">
        {stats.map((stat, idx) => (
          <React.Fragment key={idx}>
            <div className="text-center">
              <span className={`block text-2xl font-extrabold ${textClass}`}>
                {stat.value}
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide block mt-1">
                {stat.label}
              </span>
            </div>
            {idx < stats.length - 1 && (
              <div className="h-8 w-px bg-gray-200"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="space-y-3">
        <h4 className="text-gray-800 text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
          <CheckCircle size={16} className={textClass} /> Performances :
        </h4>
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 space-y-2">
          {grades.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-gray-600 font-medium">{item.subject}</span>
              <span className="font-bold text-gray-900 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-100">
                {item.grade}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ExamResults: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wide mb-3">
            Résultats & Palmarès
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            L'Excellence <span className="text-lime-600">Académique</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De la 6ème année primaire jusqu'au Baccalauréat, nos élèves se
            distinguent par des résultats exceptionnels chaque année.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 6ème Année Primaire */}
          <ExamCard
            title="6ème Année"
            subtitle="Certificat Primaire"
            icon={<Star size={28} className="text-white" />}
            colorClass="bg-lime-500"
            textClass="text-lime-600"
            stats={[
              { value: "100%", label: "Réussite" },
              { value: "95%", label: "Mention T.B." },
            ]}
            grades={[
              { subject: "Mathématiques", grade: "9.8/10" },
              { subject: "Français", grade: "9.5/10" },
              { subject: "Arabe", grade: "9.7/10" },
            ]}
          />

          {/* 3ème Année Collège */}
          <ExamCard
            title="3ème Année"
            subtitle="Brevet des Collèges"
            icon={<BookOpen size={28} className="text-white" />}
            colorClass="bg-blue-500"
            textClass="text-blue-600"
            stats={[
              { value: "99%", label: "Réussite" },
              { value: "18.5", label: "Meilleure Moy." },
            ]}
            grades={[
              { subject: "Maths", grade: "19.5/20" },
              { subject: "Physique", grade: "19.0/20" },
              { subject: "SVT", grade: "18.5/20" },
            ]}
          />

          {/* 1ère Année Bac */}
          <ExamCard
            title="1ère Bac"
            subtitle="Examen Régional"
            icon={<Award size={28} className="text-white" />}
            colorClass="bg-indigo-600"
            textClass="text-indigo-600"
            stats={[
              { value: "Top 5", label: "Région Fès" },
              { value: "19.15", label: "Note Max" },
            ]}
            grades={[
              { subject: "Français", grade: "19.5/20" },
              { subject: "Ed. Islamique", grade: "19.75/20" },
              { subject: "Hist-Géo", grade: "19.0/20" },
            ]}
          />

          {/* 2ème Année Bac */}
          <ExamCard
            title="2ème Bac"
            subtitle="Examen National"
            icon={<GraduationCap size={28} className="text-white" />}
            colorClass="bg-slate-800"
            textClass="text-slate-800"
            stats={[
              { value: "98%", label: "Mention Bien+" },
              { value: "19.25", label: "Moyenne Gén." },
            ]}
            grades={[
              { subject: "Maths (SM)", grade: "20/20" },
              { subject: "Physique (PC)", grade: "19.5/20" },
              { subject: "SVT", grade: "19.0/20" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExamResults;
