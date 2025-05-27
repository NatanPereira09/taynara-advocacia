import React from 'react';
import { services } from '../data/services';
import { Shield, Briefcase, FileText, Heart, Scroll, ShoppingBag, Home } from 'lucide-react';

const getIcon = (area: string) => {
  switch (area) {
    case 'Direito Previdenciário':
      return <Shield className="w-10 h-10 text-primary" />;
    case 'Direito do Trabalho':
      return <Briefcase className="w-10 h-10 text-primary" />;
    case 'Direito Civil':
      return <FileText className="w-10 h-10 text-primary" />;
    case 'Direito de Família':
      return <Heart className="w-10 h-10 text-primary" />;
    case 'Direito das Sucessões':
      return <Scroll className="w-10 h-10 text-primary" />;
    case 'Direito do Consumidor':
      return <ShoppingBag className="w-10 h-10 text-primary" />;
    case 'Direito Imobiliário e Usucapião':
      return <Home className="w-10 h-10 text-primary" />;
    default:
      return <FileText className="w-10 h-10 text-primary" />;
  }
};

const Services: React.FC = () => {
  // Split services into two rows
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary"
              >
                <div className="mb-4">
                  {getIcon(service.area)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {service.area}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Second row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondRow.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary"
              >
                <div className="mb-4">
                  {getIcon(service.area)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {service.area}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;