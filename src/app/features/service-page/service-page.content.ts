export interface ServicePageFaq {
  readonly question: string;
  readonly answer: string;
}

export interface ServicePageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly introduction: string;
  readonly ctaContext: string;
  readonly highlights: readonly string[];
  readonly serviceTitle: string;
  readonly serviceDescription: string;
  readonly services: readonly { readonly title: string; readonly description: string }[];
  readonly processTitle: string;
  readonly process: readonly { readonly title: string; readonly description: string }[];
  readonly audienceTitle: string;
  readonly audienceDescription: string;
  readonly faqs: readonly ServicePageFaq[];
}

export const EXPRESS_DELIVERY_CONTENT: ServicePageContent = {
  eyebrow: 'Entrega rápida em Jundiaí',
  title: 'Entrega Rápida em Jundiaí com Coleta Ágil',
  introduction:
    'Solicite uma entrega rápida para documentos, encomendas e pequenos volumes em Jundiaí e região. A NP Express confirma origem, destino, prazo e viabilidade diretamente pelo WhatsApp.',
  ctaContext: 'uma entrega rápida em Jundiaí',
  highlights: ['Solicitação pelo WhatsApp', 'Coletas avulsas ou programadas', 'Prazo confirmado antes da saída'],
  serviceTitle: 'Quando usar a entrega rápida da NP Express',
  serviceDescription:
    'Atendimento para demandas que precisam sair da espera e seguir com comunicação objetiva.',
  services: [
    {
      title: 'Documentos e contratos',
      description: 'Retirada e entrega de documentos comerciais, contratos e malotes em endereços combinados.'
    },
    {
      title: 'Pequenas encomendas',
      description: 'Transporte de pacotes e pequenos volumes que possam seguir com segurança em uma moto.'
    },
    {
      title: 'Coletas urgentes',
      description: 'Avaliação rápida de disponibilidade, rota e prazo para solicitações que não podem esperar.'
    },
    {
      title: 'Entregas programadas',
      description: 'Agendamento antecipado para organizar retiradas e entregas com mais previsibilidade.'
    }
  ],
  processTitle: 'Como solicitar sua entrega rápida',
  process: [
    { title: 'Informe a coleta', description: 'Envie o endereço de origem e o horário disponível para retirada.' },
    { title: 'Passe o destino e o volume', description: 'Informe o endereço final e o que será transportado.' },
    { title: 'Confirme a execução', description: 'Receba a confirmação de viabilidade, valor e previsão antes da saída.' }
  ],
  audienceTitle: 'Atendimento para pessoas e empresas',
  audienceDescription:
    'A entrega rápida atende solicitações avulsas de pessoas físicas e profissionais, além de demandas pontuais de empresas, escritórios, lojas e operações locais.',
  faqs: [
    {
      question: 'Como pedir uma entrega rápida em Jundiaí?',
      answer: 'Chame a NP Express pelo WhatsApp e informe endereço de coleta, destino e tipo de volume. Com esses dados, confirmamos a disponibilidade, o valor e a previsão antes da execução.'
    },
    {
      question: 'A entrega pode ser feita no mesmo dia?',
      answer: 'Sim, quando houver disponibilidade e a rota for viável. O prazo é confirmado pelo WhatsApp após a análise da origem, do destino e do volume.'
    },
    {
      question: 'Que tipos de itens podem ser enviados?',
      answer: 'Transportamos documentos, contratos, malotes, autopeças, pacotes de e-commerce, exames e pequenas encomendas que caibam com segurança no baú ou mochila do motoboy.'
    }
  ]
};

export const BUSINESS_COURIER_CONTENT: ServicePageContent = {
  eyebrow: 'Motoboy para empresas em Jundiaí',
  title: 'Motoboy para Empresas em Jundiaí',
  introduction:
    'Apoio para empresas que precisam de coletas, entregas, malotes e rotas recorrentes em Jundiaí e região, com contato direto e opções de faturamento quinzenal ou mensal para contratos ativos.',
  ctaContext: 'motoboy para minha empresa em Jundiaí',
  highlights: ['Atendimento recorrente', 'Faturamento para contratos ativos', 'Rotas alinhadas com a operação'],
  serviceTitle: 'Apoio de motoboy para a rotina da empresa',
  serviceDescription:
    'Uma operação flexível para demandas pontuais ou frequentes, sem adicionar etapas desnecessárias.',
  services: [
    {
      title: 'Malotes e documentos',
      description: 'Coletas e entregas de contratos, documentos, exames e materiais administrativos.'
    },
    {
      title: 'Cartórios e bancos',
      description: 'Apoio externo para serviços previamente alinhados com a equipe responsável.'
    },
    {
      title: 'Rotas recorrentes',
      description: 'Programação de trajetos frequentes entre filiais, fornecedores, clientes e parceiros.'
    },
    {
      title: 'Demandas urgentes',
      description: 'Avaliação de solicitações críticas conforme disponibilidade, prazo e viabilidade da rota.'
    }
  ],
  processTitle: 'Como contratar o atendimento empresarial',
  process: [
    { title: 'Explique sua rotina', description: 'Informe frequência, regiões, horários e tipos de materiais transportados.' },
    { title: 'Alinhe o formato', description: 'Defina se o atendimento será avulso, programado ou recorrente.' },
    { title: 'Confirme as condições', description: 'Valide rotas, comunicação, cobrança e início do atendimento.' }
  ],
  audienceTitle: 'Serviço dimensionado para cada operação',
  audienceDescription:
    'Atendemos comércios, escritórios, indústrias, e-commerces e prestadores de serviço. O formato é definido conforme frequência, distância, volume e necessidade de cada empresa.',
  faqs: [
    {
      question: 'A NP Express oferece contrato de motoboy para empresas?',
      answer: 'Sim. Avaliamos contratos e atendimentos recorrentes conforme frequência, rotas, horários e tipo de material que a empresa precisa transportar.'
    },
    {
      question: 'É possível faturar os serviços mensalmente?',
      answer: 'Para empresas com contrato ativo e condições previamente aprovadas, oferecemos faturamento quinzenal ou mensal via boleto bancário.'
    },
    {
      question: 'A empresa também pode solicitar entregas avulsas?',
      answer: 'Sim. Empresas podem solicitar coletas e entregas pontuais pelo WhatsApp, mesmo sem uma rota recorrente ou contrato fixo.'
    }
  ]
};
