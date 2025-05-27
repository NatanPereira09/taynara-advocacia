import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const Terms: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Termos de Uso | Taynara Paulina';
    window.scrollTo(0, 0);
  }, []);

  const handleSmoothNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 300ms ease-in-out';
    
    setTimeout(() => {
      navigate('/taynara-advocacia');
      document.body.style.opacity = '1';
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 text-justify">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <div className="mb-8">
          <a 
            href="/taynara-advocacia"
            onClick={handleSmoothNavigate}
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Voltar para a página inicial
          </a>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-serif font-bold text-primary">
              Termos de Uso
            </h1>
          </div>
          <p className="text-gray-600 mb-6">
            Atualizado em 21/05/2025.
          </p>
          <p className="text-gray-700 mb-6">
            Ao acessar este site, você concorda com os seguintes termos:
          </p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-serif font-semibold text-primary mb-3">
              1. Uso do conteúdo
            </h2>
            <p className="text-gray-700">
              Todo o conteúdo deste site tem caráter informativo e não substitui a consulta jurídica personalizada. O uso das informações é de responsabilidade do usuário.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-serif font-semibold text-primary mb-3">
              2. Propriedade intelectual
            </h2>
            <p className="text-gray-700">
              Todos os textos, imagens, marcas e identidade visual pertencem à Dra. Taynara Paulina. É proibida a reprodução sem autorização.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-serif font-semibold text-primary mb-3">
              3. Links externos
            </h2>
            <p className="text-gray-700">
              Este site pode conter links para redes sociais ou outros sites. Não nos responsabilizamos pelas políticas de privacidade ou conteúdo desses terceiros.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-serif font-semibold text-primary mb-3">
              4. Modificações
            </h2>
            <p className="text-gray-700">
              Reservamo-nos o direito de atualizar este conteúdo a qualquer momento, sem aviso prévio.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="primary"
            onClick={handleSmoothNavigate}
            icon={<ArrowLeft size={16} />}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terms;