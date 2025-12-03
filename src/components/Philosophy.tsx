import React from "react";
import { Heart, Brain, Globe } from "lucide-react";

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wide mb-3">
            Philosophie
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              Notre Philosophie : <br />
              <span className="text-blue-600">
                Former les citoyens de demain
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Au Groupe Scolaire Fès City, nous croyons que l'éducation va
              au-delà des livres. Nous cultivons la curiosité, l'esprit critique
              et les valeurs humaines essentielles pour réussir dans un monde en
              constante évolution.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-lime-100 text-lime-600 rounded-lg">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Valeurs Humaines</h4>
                  <p className="text-gray-500 text-sm">
                    Respect, solidarité et empathie au cœur de notre projet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Esprit Critique</h4>
                  <p className="text-gray-500 text-sm">
                    Apprendre à réfléchir, analyser et comprendre le monde.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Ouverture sur le monde
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Langues étrangères et culture internationale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070"
                alt="Teacher assisting student"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Quote Card */}
            <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="text-gray-600 italic mb-4">
                "L'éducation est l'arme la plus puissante qu'on puisse utiliser
                pour changer le monde."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-lime-500 rounded-full"></div>
                <span className="text-sm font-bold text-gray-900">
                  Nelson Mandela
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
