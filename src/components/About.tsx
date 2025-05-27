import React from "react";

const About: React.FC = () => {
  return (
    <section id="quem-sou" className="py-20 bg-white text-justify">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Quem sou eu
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative w-[90%] mx-auto md:w-full">
                <div className="absolute -top-2 -left-2 w-full h-full border-2 border-primary md:-top-4 md:-left-4"></div>
                <img
                  src="src/assets/taynara-1.webp"
                  alt="Dra. Taynara Paulina"
                  className="w-full h-auto object-cover z-10 relative"
                />
              </div>
            </div>
            <div className="text-start mt-4 md:hidden">
              <h3 className="text-xl font-serif font-semibold text-primary">
                Dra. Taynara Paulina
              </h3>
              <p className="text-gray-600">OAB/PR 128750</p>
            </div>

            <div className="md:col-span-3 space-y-4 text-gray-700">
              <p>
                Sou natural do estado de Rondônia, mas foi no Amazonas que vivi
                e cresci até os 17 anos de idade — experiências que moldaram não
                só minha visão de mundo, como também a forma com que me
                relaciono com as pessoas.
              </p>
              <p>
                Iniciei minha jornada acadêmica no Paraná, onde escolhi trilhar
                o caminho da advocacia com propósito. Sou formada em Direito
                pela Pontifícia Universidade Católica do Paraná (PUCPR), campus
                de Londrina.
              </p>
              <p>
                Mais do que oferecer respostas jurídicas, acredito na escuta
                atenta e no acolhimento genuíno. Cada pessoa que chega até mim
                traz uma história única, e é com sensibilidade e compromisso que
                busco transformar a linguagem do Direito em uma ponte segura
                entre o problema e a possibilidade de solução.
              </p>
              <p>
                Atuo nas áreas de Direito Previdenciário, Direito do Consumidor
                e Família, entre outras demandas.
              </p>
            </div>
          </div>
          <div className="text-start mt-4 hidden md:block">
            <h3 className="text-xl font-serif font-semibold text-primary">
              Dra. Taynara Paulina
            </h3>
            <p className="text-gray-600">OAB/PR 128750</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
