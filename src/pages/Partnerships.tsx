// src/pages/Partnerships.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const Partnerships: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Parcerias | Taynara Paulina';
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 300ms ease-in-out';

    setTimeout(() => {
      navigate('/taynara-advocacia');
      document.body.style.opacity = '1';
    }, 300);
  };

  const handleRedirectToAreas = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 300ms ease-in-out';

    setTimeout(() => {
      navigate('/taynara-advocacia#areas-atuacao');
      document.body.style.opacity = '1';
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <div className="mb-8">
          <a
            href="/taynara-advocacia"
            onClick={handleBack}
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Voltar para a página inicial
          </a>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Parcerias
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        </div>

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
               onClick={() => window.open('https://wa.me/5543988248965?text=Olá! Cheguei até aqui por meio do seu site e gostaria de agendar um atendimento jurídico. Poderia, por gentileza, me informar os horários disponíveis?', '_blank')}
            >
              Contato via WhatsApp
            </Button>
            <Button
              variant="secondary"
              icon={<ArrowRight size={18} />}
              onClick={handleRedirectToAreas}
            >
              Consultar Áreas de Atuação
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
