import React from "react";
import maternelle from "../assets/maternelle.png";
import primaire from "../assets/primaire.png";
import college from "../assets/college.png";
import lycee from "../assets/lycee.png";

const LevelCard: React.FC<{
  level: string;
  desc: string;
  image: string;
  accent: string;
}> = ({ level, desc, image, accent }) => (
  <div className="relative group overflow-hidden rounded-2xl h-80 shadow-md cursor-pointer">
    <img
      src={image}
      alt={level}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300">
      <div className={`h-1 w-12 mb-4 bg-${accent}-500 rounded-full`}></div>
      <h3 className="text-2xl font-bold text-white mb-2">{level}</h3>
      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        {desc}
      </p>
    </div>
  </div>
);

const EducationPath: React.FC = () => {
  return (
    <section id="path" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
              Cycles d'enseignement
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Un parcours adapté à{" "}
              <span className="underline decoration-lime-500 underline-offset-4">
                chaque âge
              </span>
            </h3>
          </div>
          <p className="hidden md:block text-gray-500 max-w-md text-right">
            De la petite enfance jusqu'au baccalauréat, nous accompagnons votre
            enfant à chaque étape.
          </p>
        </div> */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wide mb-3">
            Cycles d'enseignement
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Un parcours adapté à{" "}
            <span className="text-lime-600">chaque âge</span> ?
          </h3>
          <p className="text-lg text-gray-600">
            De la petite enfance jusqu'au baccalauréat, nous accompagnons votre
            enfant à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <LevelCard
            level="Maternelle"
            desc="L'éveil, la socialisation et les premiers apprentissages dans un cadre bienveillant."
            image={maternelle}
            accent="lime"
          />
          <LevelCard
            level="Primaire"
            desc="Acquisition des fondamentaux et découverte du monde."
            image={primaire}
            accent="blue"
          />
          <LevelCard
            level="Collège"
            desc="Approfondissement des connaissances et développement de la méthode."
            image={college}
            accent="purple"
          />
          <LevelCard
            level="Lycée"
            desc="Préparation à l'excellence académique et à l'enseignement supérieur."
            image={lycee}
            accent="orange"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationPath;
