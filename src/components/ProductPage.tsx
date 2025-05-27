import React, { useState } from 'react';
import { ChevronDown, Truck, Shield, Package, Crown } from 'lucide-react';

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const images = [
    "https://images.pexels.com/photos/7095307/pexels-photo-7095307.jpeg",
    "https://images.pexels.com/photos/6114955/pexels-photo-6114955.jpeg"
  ];

  const features = [
    {
      icon: <Crown className="w-5 h-5 text-amber-500" />,
      title: "Édition Limitée",
      description: "Numéroté individuellement"
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-500" />,
      title: "Livraison Express",
      description: "2-3 jours ouvrés"
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-500" />,
      title: "Garantie à Vie",
      description: "Remplacement gratuit"
    },
    {
      icon: <Package className="w-5 h-5 text-amber-500" />,
      title: "Packaging Premium",
      description: "Boîte collector"
    }
  ];

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <img
                src={images[selectedImage]}
                alt="Le Cavalier Légendaire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-amber-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Vue ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Le Cavalier Légendaire</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-amber-500">299€</span>
                <span className="text-lg text-gray-500 line-through">399€</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 text-sm font-semibold rounded-full">
                  -25%
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Le Cavalier Légendaire est plus qu'une pièce d'échecs. C'est un statement, 
                une déclaration de style et de puissance sur l'échiquier.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="block text-sm font-medium">Quantité</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors">
              Ajouter au panier
            </button>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <button 
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection('description')}
                >
                  <span className="font-medium">Description détaillée</span>
                  <ChevronDown className={`w-5 h-5 transform transition-transform ${
                    openSection === 'description' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openSection === 'description' && (
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    Le Cavalier Légendaire est une pièce d'échecs unique, conçue pour les joueurs qui osent se démarquer. 
                    Fabriqué en résine haute qualité avec une finition mate sophistiquée, chaque détail a été pensé pour 
                    créer une pièce qui allie style urbain et élégance classique. Les lunettes de soleil et la chaîne en 
                    or 24K ajoutent une touche de luxe contemporain, tandis que le pistolet symbolise la puissance 
                    stratégique sur l'échiquier. Chaque pièce est numérotée à la main et livrée dans un coffret collector.
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <button 
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection('dimensions')}
                >
                  <span className="font-medium">Dimensions</span>
                  <ChevronDown className={`w-5 h-5 transform transition-transform ${
                    openSection === 'dimensions' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openSection === 'dimensions' && (
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Hauteur : 10.5 cm</li>
                      <li>Largeur : 4.8 cm</li>
                      <li>Profondeur : 4.8 cm</li>
                      <li>Poids : 185g</li>
                      <li>Diamètre de la base : 4.2 cm</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <button 
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection('shipping')}
                >
                  <span className="font-medium">Livraison & Retours</span>
                  <ChevronDown className={`w-5 h-5 transform transition-transform ${
                    openSection === 'shipping' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openSection === 'shipping' && (
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <h4 className="font-semibold mb-2">Livraison :</h4>
                    <ul className="list-disc list-inside mb-4">
                      <li>Livraison express gratuite en France métropolitaine</li>
                      <li>Délai de livraison : 2-3 jours ouvrés</li>
                      <li>Numéro de suivi fourni par email</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Politique de retour :</h4>
                    <ul className="list-disc list-inside">
                      <li>Retours acceptés sous 7 jours après réception</li>
                      <li>Le produit doit être retourné dans son emballage d'origine</li>
                      <li>Remboursement intégral après réception du retour</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;