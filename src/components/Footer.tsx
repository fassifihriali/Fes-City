import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Groupe Scolaire <span className="text-lime-500">Fès City</span>
            </h2>
            <p className="text-sm max-w-xs mb-6">
              Cultiver l'excellence et les valeurs humaines pour former les
              leaders de demain.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groupescolairefescity"
                className="hover:text-lime-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/groupescolairefescityofficiel/"
                className="hover:text-lime-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-lime-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#path"
                  className="hover:text-lime-400 transition-colors"
                >
                  Parcours
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  className="hover:text-lime-400 transition-colors"
                >
                  Philosophie
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-lime-400 transition-colors"
                >
                  Inscription
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Règlement intérieur
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Groupe Scolaire Fès City. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
