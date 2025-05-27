export interface Service {
  area: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    area: "Direito Previdenciário",
    description: "Atendimento voltado à análises e requerimentos de benefícios junto ao INSS, como:",
    items: [
      "Aposentadoria",
      "Benefício de Prestação Continuada (BPC/LOAS)",
      "Salário-maternidade",
      "Auxílio-doença",
      "Pensão por morte",
      "Auxílio-reclusão",
      "E outros direitos junto ao INSS"
    ]
  },
  {
    area: "Direito do Trabalho",
    description: "Atuação na defesa dos direitos do trabalhador, com foco em:",
    items: [
      "Verbas rescisórias",
      "Reconhecimento de vínculo",
      "Acidentes de trabalho",
      "Indenizações por danos morais",
      "Assédio no trabalho",
      "Estabilidade (acidente ou gestação)",
      "E outros direitos trabalhistas"
    ]
  },
  {
    area: "Direito Civil",
    description: "Atendimento em conflitos e relações jurídicas do dia a dia, como:",
    items: [
      "Cobranças",
      "Danos materiais e morais",
      "Contratos",
      "Responsabilidade civil"
    ]
  },
  {
    area: "Direito de Família",
    description: "Assessoria em questões familiares com sensibilidade e atenção, como:",
    items: [
      "Divórcio",
      "Guarda",
      "Pensão alimentícia",
      "Regulamentação de visitas"
    ]
  },
  {
    area: "Direito das Sucessões",
    description: "Atuação em processos relacionados à herança e partilha de bens:",
    items: [
      "Inventários",
      "Testamentos",
      "Partilhas amigáveis ou judiciais"
    ]
  },
  {
    area: "Direito do Consumidor",
    description: "Defesa contra abusos e irregularidades nas relações de consumo:",
    items: [
      "Cobranças indevidas",
      "Cláusulas abusivas",
      "Problemas com produtos ou serviços",
      "Inscrições indevidas em cadastros de inadimplentes"
    ]
  },
  {
    area: "Direito Imobiliário e Usucapião",
    description: "Atuação em questões que envolvem imóveis e posse:",
    items: [
      "Contratos de compra e venda",
      "Usucapião",
      "Regularização de imóveis",
      "Despejos e locações"
    ]
  }
];