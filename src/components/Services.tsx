import React from 'react';
import { services } from '../data/services';
import { Shield, Briefcase, FileText, Heart, Scroll, ShoppingBag, Home } from 'lucide-react';

const getIcon = (area: string) => {
  switch (area) {
    case 'Direito Previdenciário':
      return <Shield className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
    case 'Direito do Trabalho':
      return <Briefcase className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
    case 'Direito Civil':
      return <FileText className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
    case 'Direito de Família':
      return <Heart className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
    case 'Direito das Sucessões':
      return <Scroll className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
    case 'Direito do Consumidor':
      return <ShoppingBag className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
    case 'Direito Imobiliário e Usucapião':
      return <Home className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
    default:
      return <FileText className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />;
  }
};

const Services: React.FC = () => {
  // Split services into two rows
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  const handleServiceClick = () => {
    window.location.href = '/taynara-advocacia#consultas';
  };

  return (
    <section id="areas-atuacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Como posso te ajudar
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cada caso é único — por isso, ofereço uma escuta atenta e soluções jurídicas personalizadas, sempre com foco no que realmente importa: os seus direitos.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstRow.map((service, index) => (
              <div 
                key={index}
                onClick={handleServiceClick}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary cursor-pointer transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
              >
                <div className="mb-4">
                  {getIcon(service.area)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3 transition-colors duration-300">
                  {service.area}
                </h3>
                <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 transition-colors duration-300">•</span>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary font-semibold text-sm">Clique para agendar uma consulta →</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondRow.map((service, index) => (
              <div 
                key={index}
                onClick={handleServiceClick}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary cursor-pointer transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
              >
                <div className="mb-4">
                  {getIcon(service.area)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3 transition-colors duration-300">
                  {service.area}
                </h3>
                <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 transition-colors duration-300">•</span>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary font-semibold text-sm">Clique para agendar uma consulta →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;