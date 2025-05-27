import React from 'react';
import { Palette, Shield, Crown, Zap, Package } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-amber-500/20">
    <div className="w-12 h-12 bg-amber-500/10 dark:bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Palette size={24} />,
      title: "Design unique",
      description: "Imprimé en 3D avec précision pour un niveau de détail inégalé dans chaque pièce."
    },
    {
      icon: <Shield size={24} />,
      title: "Finition mate noire",
      description: "Traitement de surface premium pour un toucher velouté et une élégance intemporelle."
    },
    {
      icon: <Crown size={24} />,
      title: "Chaîne dorée royale",
      description: "Pendentif couronne plaqué or 24K, symbole de pouvoir sur l'échiquier."
    },
    {
      icon: <Zap size={24} />,
      title: "Détails audacieux",
      description: "Pistolet à la ceinture et lunettes de soleil pour une attitude rebelle incomparable."
    },
    {
      icon: <Package size={24} />,
      title: "Livraison sécurisée",
      description: "Emballage premium et expédition rapide pour une expérience d'achat exceptionnelle."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Caractéristiques Exceptionnelles
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Chaque détail a été pensé pour créer la pièce d'échecs la plus originale jamais conçue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;