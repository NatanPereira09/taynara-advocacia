import React from 'react';
import Button from './Button';
import { Users, MessageCircle, ArrowRight } from 'lucide-react';

const Partnerships: React.FC = () => {
  return (
    <section id="parcerias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Parcerias
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16 text-primary" />
            </div>
            
            <p className="text-gray-700 mb-6 text-center">
              A confiança é a base do meu trabalho — e isso se estende também às parcerias que firmo. Para garantir que cada cliente receba o melhor atendimento possível, atuo em conjunto com advogados altamente capacitados, especializados em áreas específicas do Direito.
            </p>
            
            <p className="text-gray-700 mb-8 text-center">
              Essas colaborações me permitem oferecer um suporte completo, sempre com a mesma dedicação, ética e responsabilidade que guiam minha atuação.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-gray-800 font-medium mb-4">
                📞 Todos os atendimentos são realizados com o mesmo compromisso e qualidade. Para dúvidas ou direcionamento ao profissional ideal, entre em contato diretamente comigo:
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="primary" 
                  icon={<MessageCircle size={18} />}
                  onClick={() => window.open('https://wa.me/5543988248965', '_blank')}
                >
                  Contato via WhatsApp
                </Button>
                <Button 
                  variant="secondary" 
                  icon={<ArrowRight size={18} />}
                  onClick={() => {
                    const element = document.getElementById('areas-atuacao');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Consultar Áreas de Atuação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;