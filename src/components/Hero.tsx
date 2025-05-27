import React from 'react';
import Button from './Button';
import { MessageCircle, Calendar } from 'lucide-react';
import TaynaraHero from "../assets/taynara-hero.webp";
import TaynaraHeroMobile from "../assets/taynara-hero-mobile.webp";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-r from-white to-gray-100 pt-16"
    >
    {/* Imagem para desktop */}
    <div className="absolute inset-0 bg-cover bg-center opacity-50 hidden md:block">
      <img className="w-full h-full object-cover" src={TaynaraHero} alt="Taynara Hero Desktop" />
    </div>

    {/* Imagem para mobile */}
    <div className="absolute inset-0 bg-cover bg-center opacity-50 block md:hidden">
      <img className="w-full h-full object-cover" src={TaynaraHeroMobile} alt="Taynara Hero Mobile" />
    </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
            Taynara Paulina
          </h1>
          <p className="text-xl md:text-2xl font-serif text-gray-800 mb-4">Advogada | OAB/PR 128750</p>
          
          <div className="w-24 h-1 bg-primary mx-auto my-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
            "Advocacia com propósito: escuta, acolhimento e compromisso com o seu direito."
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button
              className="transition-all duration-300 transform hover:-translate-y-1"
              variant="primary" 
              size="lg" 
              icon={<Calendar size={20} />}
              onClick={() => {
                const element = document.getElementById('consultas');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Agendar Consulta
            </Button>
            <Button 
              className="transition-all duration-300 transform hover:-translate-y-1"
              variant="secondary" 
              size="lg" 
              icon={<MessageCircle size={20} />}
              onClick={() => window.open('https://wa.me/5543988248965', '_blank')}
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#quem-sou" 
          className="text-primary hover:text-primary-dark transition-colors"
          aria-label="Role para baixo"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;