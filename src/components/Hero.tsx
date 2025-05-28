import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-anthracite-950 opacity-60"></div>
        <div className="h-full w-full bg-white dark:bg-anthracite-950"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-anthracite-900 dark:text-white leading-tight mb-6">
              Réinvente le jeu. <br />
              <span className="text-gold-500">Domine l'échiquier.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-anthracite-700 dark:text-anthracite-300 mb-8 max-w-xl">
              Voici le Cavalier Légendaire : plus qu'un pion, une déclaration de style.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/product" 
                className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold-500/30 text-center"
              >
                Commander maintenant
              </Link>
              <button className="px-8 py-3 border border-gold-500 text-gold-500 hover:text-gold-600 hover:border-gold-600 font-bold rounded-md transition-all duration-300 bg-transparent dark:bg-transparent hover:bg-gold-500/5">
                Voir les détails
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl transform -rotate-3 transition-all duration-500 hover:rotate-0">
              <img 
                src="/cav.png" 
                alt="Cavalier Légendaire" 
                className="w-full h-full object-contain bg-anthracite-100 dark:bg-anthracite-900"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-medium bg-gold-500 inline-block px-3 py-1 rounded-full">
                  Édition Limitée
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;