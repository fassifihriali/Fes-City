import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Students learning"
          className="w-full h-full object-cover"
        /> */}
        {/* Gradient Overlay using brand colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-lime-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-lime-500/20 border border-lime-400 text-lime-300 font-semibold text-sm mb-6 backdrop-blur-sm">
            Excellence & Épanouissement
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Bienvenue au <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-300">
              Groupe Scolaire Fès City
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-10">
            {/* Une éducation complète pour construire l'avenir de vos enfants, de
            la maternelle au lycée. */}
            De la maternelle au lycée, nous formons les leaders de demain dans
            un cadre épanouissant et innovant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#path"
              className="px-8 py-4 bg-lime-500 hover:bg-lime-600 text-blue-900 font-bold rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Découvrir nos parcours
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl transition-all flex items-center justify-center"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg
          className="block w-full h-16 md:h-24 text-slate-50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
