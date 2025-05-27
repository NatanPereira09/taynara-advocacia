import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { Calendar, Monitor, MapPin, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  consultationType: 'online' | 'in-person';
  bestTime: string;
  description: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  consultationType: 'online',
  bestTime: '',
  description: '',
};

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const navigate = useNavigate(); 

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzzrqwqp';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consultationType: e.target.value as 'online' | 'in-person',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          consultationType: formData.consultationType === 'online' ? 'Consulta Online' : 'Consulta Presencial',
          bestTime: formData.bestTime,
          description: formData.description,
          _subject: `Nova solicitação de consulta - ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData); // Limpa o formulário
        
        // Redireciona para página de agradecimento sem recarregar a página
        setTimeout(() => {
          navigate('/obrigada');
        }, 1000);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultas" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Agende sua Consulta
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Consultas online ou presenciais, de forma prática e segura.
            Escolha o formato que melhor se adapta à sua rotina e entre em contato para agendarmos um horário.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary shadow-lg">
              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Consultas Presenciais
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Atendimento realizado em ambiente reservado, com conforto e privacidade.
                  </p>
                  <p className="text-gray-700">
                    <strong>Endereço:</strong> Rua Rio Paraná, n° 168 - Sala 02 - Jardim Santo Amaro, Cambé - PR, CEP: 86185-300.
                  </p>
                  <p className="text-gray-700">
                    <strong>Atendimento:</strong> mediante agendamento.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary shadow-lg">
              <div className="flex items-start">
                <Monitor className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Consultas Online
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Realizadas por videochamada (Google Meet, WhatsApp ou outro meio combinado).
                  </p>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Sigilo garantido</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Horários flexíveis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary shadow-lg">
              <div className="flex items-start">
                <MessageCircle className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Como agendar:
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Você pode agendar sua consulta de forma rápida:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Pelo WhatsApp</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Pelo formulário ao lado</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button 
                      className="transition-all duration-300 transform hover:-translate-y-1"
                      variant="primary"
                      icon={<MessageCircle size={16} />}
                      onClick={() => window.open('https://wa.me/5543988248965', '_blank')}
                    >
                      Falar pelo WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-semibold text-primary mb-6">
              Formulário de Agendamento
            </h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p className="font-semibold">Formulário enviado com sucesso!</p>
                <p className="text-sm">Entraremos em contato em breve para confirmar o agendamento.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Nome completo*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Telefone/WhatsApp*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">
                  Tipo de consulta*
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consultationType"
                      value="online"
                      checked={formData.consultationType === 'online'}
                      onChange={handleRadioChange}
                      className="mr-2 text-primary"
                    />
                    <span>Online</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consultationType"
                      value="in-person"
                      checked={formData.consultationType === 'in-person'}
                      onChange={handleRadioChange}
                      className="mr-2 text-primary"
                    />
                    <span>Presencial</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label htmlFor="bestTime" className="block text-gray-700 mb-1">
                  Melhor horário para contato
                </label>
                <input
                  type="text"
                  id="bestTime"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ex: Manhã, Tarde, Noite"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-gray-700 mb-1">
                  Breve descrição da demanda
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="mt-6">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<Calendar size={18} />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Formulário'}
                </Button>
              </div>
              
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">
                  Ocorreu um erro ao enviar o formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;