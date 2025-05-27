import React from 'react';
import { ChevronRight as ChessKnight, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <ChessKnight className="w-6 h-6 text-amber-500 mr-2" />
              <span className="text-xl font-bold">URBAN<span className="text-amber-500">CHESS</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              Réinventer l'art des échecs pour une nouvelle génération de joueurs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Caractéristiques
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Témoignages
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Assistance</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Livraison
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Retours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} URBANCHES. Tous droits réservés. 
            <span className="block sm:inline sm:ml-2">
              Conçu avec passion pour les joueurs audacieux.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;