import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function Chessboard() {
  const meshRef = useRef();
  const [spring] = useSpring(() => ({
    position: [0, -2, 0],
    rotation: [Math.PI / 6, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  return (
    <animated.group {...spring}>
      {/* Chessboard squares */}
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[row - 3.5, 0, col - 3.5]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial 
              color={(row + col) % 2 === 0 ? '#1a1a1a' : '#ffffff'} 
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        ))
      )}
    </animated.group>
  );
}

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 10, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Chessboard />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Réinvente le jeu. <br />
            <span className="text-gold-500">Domine l'échiquier.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
            Voici le Cavalier Légendaire : plus qu'un pion, une déclaration de style.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/product" 
              className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold-500/30 text-center"
            >
              Commander maintenant
            </Link>
            <button className="px-8 py-3 border-2 border-gold-500 text-gold-500 hover:text-gold-600 hover:border-gold-600 font-bold rounded-md transition-all duration-300 bg-black/50 backdrop-blur-sm hover:bg-black/60">
              Voir les détails
            </button>
          </div>
        </div>
      </div>

      {/* Featured piece */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 z-20">
        <img 
          src="/cav.png" 
          alt="Cavalier Légendaire" 
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;