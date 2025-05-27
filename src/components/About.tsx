import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6114955/pexels-photo-6114955.jpeg" 
                alt="Le Cavalier qui change les règles" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-20 h-1 bg-amber-500 mb-4"></div>
                <p className="text-white text-lg font-medium">Édition Exclusive 2025</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Le Cavalier qui change les règles
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Ce n'est pas juste un pion. C'est une pièce iconique fabriquée avec soin pour les stratèges modernes. 
              Un symbole d'originalité, de pouvoir et de style.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Design 3D exclusif, finition mate noire, chaîne dorée brillante. Fabriqué en série limitée.
            </p>
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-md transition-all duration-300 transform hover:translate-x-2">
              Découvrir notre histoire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;