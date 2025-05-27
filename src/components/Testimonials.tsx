import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, rating, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative">
    <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white">
        <Star size={20} fill="currentColor" />
      </div>
    </div>
    
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-black dark:text-white">{name}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
      </div>
    </div>
    
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          size={16}
          className={i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300 dark:text-gray-600"}
        />
      ))}
    </div>
    
    <p className="text-gray-700 dark:text-gray-300 italic">"{content}"</p>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Thomas M.",
      role: "Maître FIDE",
      content: "Ce cavalier n'est pas seulement une pièce d'échecs, c'est une déclaration. Mes adversaires sont intimidés avant même le premier coup.",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      name: "Sophie L.",
      role: "Collectionneuse",
      content: "La qualité est exceptionnelle. J'ai toute la collection Urban Chess et le Cavalier Légendaire est clairement la pièce maîtresse.",
      rating: 5,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
      name: "Karim D.",
      role: "Designer",
      content: "Le mélange parfait entre élégance traditionnelle et style urbain. La finition est impeccable.",
      rating: 4,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Ce qu'ils en disent
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Découvrez ce que nos clients pensent du Cavalier Légendaire
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;