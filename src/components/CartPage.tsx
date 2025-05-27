import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles du panier */}
          <div className="lg:col-span-2 space-y-6">
            {/* Article exemple */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src="https://raw.githubusercontent.com/StackBlitz/stackblitz-upload-service/main/knight.png"
                  alt="Le Cavalier Légendaire"
                  className="w-24 h-24 object-contain bg-gray-100 dark:bg-gray-900 rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Le Cavalier Légendaire</h3>
                  <p className="text-gray-600 dark:text-gray-400">Édition Limitée</p>
                  <div className="flex items-center mt-2">
                    <button className="p-1 hover:text-amber-500">
                      <Minus size={16} />
                    </button>
                    <span className="mx-3">1</span>
                    <button className="p-1 hover:text-amber-500">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">299€</p>
                  <button className="text-red-500 hover:text-red-600 mt-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Résumé de la commande */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>299€</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>299€</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors">
                Procéder au paiement
              </button>
              <Link 
                to="/product"
                className="block text-center mt-4 text-sm text-amber-500 hover:text-amber-600"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;