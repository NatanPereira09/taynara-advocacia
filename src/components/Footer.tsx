import React from "react";
import { Link } from "react-router-dom";
import { Scale, MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import FaviconNm from "../assets/favicon-nm.svg";

const Footer: React.FC = () => {
  // Mensagem pré-definida para o WhatsApp
  const whatsappMessage = "Olá! Cheguei até aqui por meio do seu site e gostaria de agendar um atendimento jurídico. Poderia, por gentileza, me informar os horários disponíveis?";
  const whatsappURL = `https://wa.me/5543988248965?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Identidade */}
          <div>
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-serif font-semibold">Identidade</h3>
            </div>
            <p className="mb-2 text-gray-300">Dra. Taynara Paulina</p>
            <p className="mb-2 text-gray-300">OAB/PR 128750</p>
            <p className="text-gray-300">
              Advogada atuante nas áreas de Direito Previdenciário, Família,
              Consumidor e mais.
            </p>
          </div>

          {/* Endereço */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-serif font-semibold">
                Endereço do Escritório
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Rua Rio Paraná, n° 168 - Sala 02 - Jardim Santo Amaro, Cambé - PR,
              CEP: 86185-300.
            </p>
            <p className="text-gray-300">Atendimento com hora marcada.</p>
          </div>

          {/* Contatos */}
          <div>
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-serif font-semibold">Contatos</h3>
            </div>
            <p className="flex items-center mb-2 text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <a
                href={whatsappURL}
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (43) 9 8824-8965
              </a>
            </p>
            <p className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <a
                href="mailto:taynarapaulina.adv@gmail.com"
                className="hover:text-primary transition-colors"
              >
                E-mail: taynarapaulina.adv@gmail.com
              </a>
            </p>
          </div>

          {/* Redes Sociais e Navegação */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-serif font-semibold">
                Redes Sociais
              </h3>
            </div>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/taynara.paulina.adv?igsh=OGR1aHBieHc4b29t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/taynara-paulina-o-martins-327a1a2b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <h3 className="text-xl font-serif font-semibold mb-4">
              Navegação Rápida
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#quem-sou"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Quem sou
                </a>
              </li>
              <li>
                <a
                  href="#areas-atuacao"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a
                  href="#consultas"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Consultas
                </a>
              </li>
              <li>
                <a
                  href="#parcerias"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Parcerias
                </a>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mb-3 flex items-center justify-center">
          Criado por
          <a href="https://www.instagram.com/nminovacoestech/" target="_blank">
            <img src={FaviconNm} alt="Logo NM" className="w-14 h-14" />
          </a>
        </p>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Taynara Paulina | Advogada — Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Este site tem caráter informativo e não substitui a consulta
              jurídica personalizada.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;