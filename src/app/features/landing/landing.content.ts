import { SECTION_IDS } from '../../core/constants/section-ids';

export interface LandingNavItem {
  readonly label: string;
  readonly href: string;
}

export interface ContentBlock {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface StepBlock {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export interface SectionIntro {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly supportLine?: string;
}

export const LANDING_CONTENT = {
  nav: [
    { label: 'Serviços', href: `#${SECTION_IDS.services}` },
    { label: 'Benefícios', href: `#${SECTION_IDS.benefits}` },
    { label: 'Como funciona', href: `#${SECTION_IDS.howItWorks}` },
    { label: 'Cobertura', href: `#${SECTION_IDS.coverage}` },
    { label: 'Horário', href: `#${SECTION_IDS.hours}` }
  ] as const satisfies readonly LandingNavItem[],
  hero: {
    eyebrow: 'Motoboy em Jundiaí e Região',
    title: 'Serviço de Motoboy e Entrega Rápida',
    description:
      'Precisa enviar ou retirar mercadorias, documentos ou urgências? A NP Express oferece motoboy rápido para Jundiaí, Várzea Paulista, Campo Limpo Paulista, Itupeva, Louveira, Cajamar, Cabreúva, Vinhedo e Valinhos. Chame no WhatsApp!',
    supportLine: 'Atendimento direto para coletas, entregas rápidas e demandas sob consulta.',
    primaryCtaLabel: 'Chamar agora no WhatsApp',
    secondaryCtaLabel: 'Ver serviços',
    badges: [
      'Motoboy rápido e seguro',
      'Urgências sob consulta',
      'Faturamento para empresas'
    ] as const
  },
  servicesSection: {
    eyebrow: 'Serviços',
    title: 'Serviços para coleta, entrega e apoio recorrente',
    description: 'Atendimento rápido para demandas avulsas, programadas e contratos fixos.'
  } as const satisfies SectionIntro,
  services: [
    {
      title: 'Entregas rápidas',
      description:
        'Prioridade para solicitações que pedem resposta rápida, retirada ágil e execução sem enrolação.',
      icon: 'speed'
    },
    {
      title: 'Entregas e coletas',
      description:
        'Retirada e entrega de documentos, produtos e pequenos volumes com alinhamento direto do início ao fim.',
      icon: 'pickup'
    },
    {
      title: 'Urgências sob consulta',
      description:
        'Demandas críticas avaliadas caso a caso para alinhar prazo, rota e melhor forma de atendimento.',
      icon: 'urgent'
    },
    {
      title: 'Coleta programada',
      description:
        'Agendamento de coletas para dar ritmo à operação e reduzir improvisos na rotina comercial.',
      icon: 'calendar'
    },
    {
      title: 'Pequenas e longas distâncias',
      description:
        'Atendimento para trajetos próximos ou deslocamentos maiores, conforme prazo, região e viabilidade.',
      icon: 'route'
    },
    {
      title: 'Contrato fixo ou esporádico',
      description:
        'Apoio pontual ou recorrente para empresas que precisam de entregas e retiradas com mais previsibilidade.',
      icon: 'contract'
    }
  ] as const satisfies readonly ContentBlock[],
  benefitsSection: {
    eyebrow: 'Benefícios',
    title: 'Mais agilidade, menos atrito',
    description: 'Você chama, alinha e resolve sem burocracia.',
    supportLine:
      'Agilidade para demandas urgentes, previsibilidade para coletas recorrentes e contato direto quando a operação precisa andar.'
  } as const satisfies SectionIntro,
  benefits: [
    {
      title: 'Resposta rápida',
      description:
        'A demanda sai do WhatsApp direto para o atendimento, sem etapas desnecessárias no caminho.',
      icon: 'operation'
    },
    {
      title: 'Contato direto',
      description:
        'Origem, destino, prazo e detalhes importantes são confirmados em uma conversa objetiva.',
      icon: 'contact'
    },
    {
      title: 'Flexibilidade de atendimento',
      description:
        'Atendimento útil para empresas, profissionais autônomos e pessoas físicas com demandas pontuais ou recorrentes.',
      icon: 'flexibility'
    },
    {
      title: 'Rotina mais previsível',
      description:
        'Coletas programadas e contratos fixos ajudam a organizar a semana sem depender de improviso.',
      icon: 'routine'
    },
    {
      title: 'Apoio recorrente',
      description:
        'Uma alternativa prática para quem precisa de motoboy com frequência e quer centralizar o contato.',
      icon: 'contract'
    }
  ] as const satisfies readonly ContentBlock[],
  howItWorksSection: {
    eyebrow: 'Como funciona',
    title: 'Chame, alinhe e acompanhe',
    description: 'Um fluxo simples para resolver sua entrega sem demora.'
  } as const satisfies SectionIntro,
  howItWorks: [
    {
      step: '01',
      title: 'Chame no WhatsApp',
      description: 'Abra a conversa e explique o que precisa transportar.'
    },
    {
      step: '02',
      title: 'Envie origem, destino e tipo de volume',
      description: 'Passe os dados principais para alinharmos prazo, rota e viabilidade.'
    },
    {
      step: '03',
      title: 'Receba a confirmação',
      description: 'A demanda é validada com clareza antes da execução.'
    },
    {
      step: '04',
      title: 'Acompanhe a execução',
      description: 'Com tudo combinado, a entrega segue com cuidado e comunicação objetiva.'
    }
  ] as const satisfies readonly StepBlock[],
  coverage: {
    eyebrow: 'Atendimento amplo',
    title: 'Cobertura em Jundiaí e Cidades Vizinhas (Raio de 25km)',
    description:
      'Motoboy rápido para demandas avulsas urgentes ou rotinas programadas com faturamento mensal.',
    bullets: [
      'Atendimento em Jundiaí, Várzea Paulista, Campo Limpo Paulista, Itupeva, Louveira, Cajamar, Cabreúva, Vinhedo e Valinhos.',
      'Suporte completo para empresas (contratos e faturamento) e entregas expressas avulsas.',
      'Orçamento instantâneo e alinhamento simplificado via WhatsApp.'
    ] as const,
    badges: ['Pequenas distâncias', 'Longas distâncias', 'Urgências sob consulta'] as const
  },
  hoursSection: {
    eyebrow: 'Horário de atendimento',
    title: 'Janelas claras para responder, alinhar e colocar a rota em andamento',
    description:
      'Consulte os períodos de atendimento e confirme pelo WhatsApp quando a demanda pedir coleta rápida ou urgência.',
    supportLine:
      'Quando a operação sai do padrão, a confirmação segue direta no WhatsApp.'
  } as const satisfies SectionIntro,
  finalCta: {
    eyebrow: 'Contato direto',
    title: 'Precisa resolver uma entrega agora?',
    description:
      'Fale com a NP Express e alinhe coleta, entrega ou contrato fixo pelo WhatsApp.',
    label: 'Chamar agora no WhatsApp',
    supportLine: 'Atendimento comercial e sob demanda'
  },
  regionsSection: {
    eyebrow: 'Regiões de Atendimento',
    title: 'Serviço de Motoboy em Jundiaí e mais 8 Cidades Vizinhas',
    description: 'Atendimento ágil em toda a região metropolitana e polos comerciais/industriais próximos.'
  } as const,
  regions: [
    { name: 'Jundiaí', type: 'Base Central', details: 'Atendimento ultra rápido em todos os bairros, incluindo Distrito Industrial, Eloy Chaves, Medeiros, Fazenda Grande, Centro, Ponte São João, Hortolândia e Vila Arens.' },
    { name: 'Várzea Paulista', type: 'Atendimento Rápido', details: 'Coletas e entregas rápidas conectadas ao polo comercial e industrial da cidade.' },
    { name: 'Campo Limpo Paulista', type: 'Cobertura Diária', details: 'Serviço expresso de motofrete para indústrias, comércios locais e residências.' },
    { name: 'Itupeva', type: 'Cobertura Diária', details: 'Trajetos rápidos conectando Jundiaí às empresas, chácaras e condomínios de Itupeva.' },
    { name: 'Louveira', type: 'Rota Frequente', details: 'Atendimento diário direcionado a empresas, indústrias e polos de distribuição local.' },
    { name: 'Cajamar', type: 'Conexão Logística', details: 'Coletas expressas integradas aos grandes centros logísticos e de e-commerce da região.' },
    { name: 'Cabreúva', type: 'Atendimento Diário', details: 'Entregas e retiradas de documentos ou mercadorias no distrito industrial e Jacaré.' },
    { name: 'Vinhedo', type: 'Rota Programada', details: 'Trajetos diários e programados ligando Vinhedo à base em Jundiaí.' },
    { name: 'Valinhos', type: 'Rota Programada', details: 'Entregas rápidas de malotes e documentos para empresas e escritórios locais.' }
  ] as const,
  faqSection: {
    eyebrow: 'Dúvidas Frequentes',
    title: 'Perguntas Frequentes sobre nosso Serviço de Motoboy',
    description: 'Tire suas dúvidas sobre prazos, contratos, faturamento e como chamar o motoboy rápida e diretamente.'
  } as const,
  faqs: [
    {
      question: 'Como solicitar um motoboy rápido na NP Express?',
      answer: 'É muito simples e sem burocracia: clique no botão do WhatsApp disponível em todo o site para abrir uma conversa direta. Nos envie o local de coleta, endereço de destino e o tipo de mercadoria/volume. Em instantes confirmamos o valor, a rota e a previsão exata de retirada.'
    },
    {
      question: 'Quais cidades e regiões a NP Express atende?',
      answer: 'Temos base em Jundiaí e prestamos serviços de motoboy num raio de 20 a 25km, cobrindo Várzea Paulista, Campo Limpo Paulista, Itupeva, Louveira, Cajamar, Cabreúva, Vinhedo e Valinhos. Também fazemos trajetos pontuais ligando essas cidades à Grande São Paulo ou interior, sob consulta.'
    },
    {
      question: 'Vocês atendem empresas com contrato ou faturamento mensal?',
      answer: 'Sim, este é um dos nossos diferenciais! Oferecemos planos corporativos com faturamento mensal ou quinzenal para empresas que precisam de suporte logístico frequente, malotes de documentos, serviços de cartório ou banco. O alinhamento das rotas é feito de forma direta e sem burocracia.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Para coletas e entregas avulsas, o pagamento pode ser feito via PIX ou transferência bancária antes ou no momento da execução. Para clientes corporativos parceiros com contratos ativos, oferecemos faturamento quinzenal ou mensal via boleto bancário.'
    },
    {
      question: 'Quais tipos de mercadorias podem ser transportadas?',
      answer: 'Nossos motoboys transportam documentos, contratos comerciais, malotes, autopeças, pacotes de e-commerce, exames médicos, eletrônicos e pequenas encomendas em geral. O volume deve caber com segurança no baú ou mochila de transporte do motoboy.'
    }
  ] as const,
  footer: {
    note: 'NP Express - Serviços de motoboy e entregas rápidas em Jundiaí, Várzea Paulista, Campo Limpo Paulista, Louveira, Itupeva, Cajamar, Cabreúva, Vinhedo e Valinhos.'
  }
} as const;
