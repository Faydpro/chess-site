import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally connect to your backend API
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-black dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ne manque pas les prochaines pièces
          </h2>
          <p className="text-gray-400 mb-8">
            Inscris-toi pour recevoir les nouvelles pièces en avant-première et des offres exclusives.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Ton email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button 
              type="submit" 
              className={`px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all duration-300 ${
                submitted ? 'bg-green-500 hover:bg-green-600' : ''
              }`}
              disabled={submitted}
            >
              {submitted ? 'Inscrit !' : "S'inscrire"}
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            On ne partage jamais tes informations. Tu peux te désabonner à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;