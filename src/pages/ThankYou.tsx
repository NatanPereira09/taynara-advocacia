import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MessageCircle, Home, User, Users, Briefcase, Calendar, FileText } from 'lucide-react';
import Button from '../components/Button';

const ThankYou: React.FC = () => {
  useEffect(() => {
    document.title = 'Obrigada pelo contato! | Taynara Paulina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 flex items-center">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">
            Obrigada pelo seu contato!
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Sua mensagem foi enviada com sucesso.
          </p>
        </div>
        
        <div className="mb-8 text-center">
          <p className="text-gray-700 mb-4">
            Assim que possível, responderei com atenção e o cuidado que sua demanda merece.
            Enquanto isso, sinta-se à vontade para continuar navegando pelo site.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-primary mt-6">
            <p className="text-gray-800 font-medium mb-3">
              📬 Precisa falar com urgência?
            </p>
            <Button 
              variant="primary" 
              icon={<MessageCircle size={18} />}
               onClick={() => window.open('https://wa.me/5543988248965?text=Olá! Cheguei até aqui por meio do seu site e gostaria de agendar um atendimento jurídico. Poderia, por gentileza, me informar os horários disponíveis?', '_blank')}
            >
              Enviar mensagem pelo WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4 text-center">
            🔗 Continue navegando:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link to="/taynara-advocacia" className="flex flex-col items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <Home className="w-5 h-5 text-primary mb-1" />
              <span className="text-sm text-center">Home</span>
            </Link>
            <a href="/taynara-advocacia#quem-sou" className="flex flex-col items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-primary mb-1" />
              <span className="text-sm text-center">Quem sou</span>
            </a>
            <a href="/taynara-advocacia#parcerias" className="flex flex-col items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <Users className="w-5 h-5 text-primary mb-1" />
              <span className="text-sm text-center">Parcerias</span>
            </a>
            <a href="/taynara-advocacia#areas-atuacao" className="flex flex-col items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <Briefcase className="w-5 h-5 text-primary mb-1" />
              <span className="text-sm text-center">Áreas de Atuação</span>
            </a>
            <a href="/taynara-advocacia#consultas" className="flex flex-col items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <Calendar className="w-5 h-5 text-primary mb-1" />
              <span className="text-sm text-center">Consultas</span>
            </a>
            <Link to="/termos" className="flex flex-col items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <FileText className="w-5 h-5 text-primary mb-1" />
              <span className="text-sm text-center">Termos</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;