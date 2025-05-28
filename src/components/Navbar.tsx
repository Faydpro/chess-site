import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              URBAN<span className="text-gold-500">CHESS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-200 hover:text-gold-500 transition-colors">
              Accueil
            </Link>
            <Link to="/product" className="text-gray-200 hover:text-gold-500 transition-colors">
              Produit
            </Link>
            <a href="#features" className="text-gray-200 hover:text-gold-500 transition-colors">
              Caractéristiques
            </a>
            <a href="#about" className="text-gray-200 hover:text-gold-500 transition-colors">
              À propos
            </a>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/panier" className="text-gray-200 hover:text-gold-500 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                <ShoppingCart size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-gray-200 hover:text-gold-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/product"
                className="text-gray-200 hover:text-gold-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Produit
              </Link>
              <a 
                href="#features" 
                className="text-gray-200 hover:text-gold-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Caractéristiques
              </a>
              <a 
                href="#about" 
                className="text-gray-200 hover:text-gold-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </a>
              <Link 
                to="/panier"
                className="text-gray-200 hover:text-gold-500 transition-colors flex items-center"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                <ShoppingCart size={20} className="mr-2" />
                Panier
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;