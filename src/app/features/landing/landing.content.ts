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

export const LANDING_CONTENT = {
  nav: [
    { label: 'Serviços', href: `#${SECTION_IDS.services}` },
    { label: 'Benefícios', href: `#${SECTION_IDS.benefits}` },
    { label: 'Como funciona', href: `#${SECTION_IDS.howItWorks}` },
    { label: 'Cobertura', href: `#${SECTION_IDS.coverage}` }
  ] as const satisfies readonly LandingNavItem[],
  hero: {
    eyebrow: 'Motoboy rápido e direto',
    title: 'Entregas, coletas e contratos fixos sem complicação',
    description:
      'A NP Express resolve entregas pontuais, coletas programadas e demandas recorrentes com alinhamento rápido pelo WhatsApp.',
    primaryCtaLabel: 'Chamar no WhatsApp',
    secondaryCtaLabel: 'Ver serviços',
    badges: [
      'Contrato fixo ou esporádico',
      'Coletas programadas',
      'Atendimento direto pelo WhatsApp'
    ] as const
  },
  services: [
    {
      title: 'Contrato fixo ou esporádico',
      description:
        'Apoio pontual ou recorrente para empresas que precisam de entregas e retiradas com previsibilidade.',
      icon: 'contract'
    },
    {
      title: 'Entregas e coletas',
      description:
        'Retirada e entrega de documentos, produtos e pequenos volumes com comunicação simples do início ao fim.',
      icon: 'pickup'
    },
    {
      title: 'Coleta programada',
      description:
        'Agendamento de coletas para reduzir improvisos e manter a operação comercial em dia.',
      icon: 'calendar'
    },
    {
      title: 'Pequenas e longas distâncias',
      description:
        'Atendimento para trajetos próximos ou deslocamentos maiores, conforme prazo, região e viabilidade.',
      icon: 'route'
    },
    {
      title: 'Entregas rápidas',
      description:
        'Prioridade para demandas em que resposta rápida, clareza e execução fazem diferença.',
      icon: 'speed'
    },
    {
      title: 'Urgências sob consulta',
      description:
        'Demandas críticas avaliadas caso a caso para alinhar prazo, rota e melhor forma de atendimento.',
      icon: 'urgent'
    }
  ] as const satisfies readonly ContentBlock[],
  benefits: [
    {
      title: 'Agilidade operacional',
      description:
        'A solicitação sai do WhatsApp direto para o alinhamento da coleta ou entrega, sem etapas desnecessárias.',
      icon: 'operation'
    },
    {
      title: 'Contato sem intermediários',
      description:
        'Origem, destino, prazo e detalhes importantes são confirmados em uma conversa objetiva.',
      icon: 'contact'
    },
    {
      title: 'Flexibilidade real',
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
      title: 'Apoio para demandas recorrentes',
      description:
        'Uma alternativa prática para quem precisa de motoboy com frequência e quer centralizar o contato.',
      icon: 'contract'
    }
  ] as const satisfies readonly ContentBlock[],
  howItWorks: [
    {
      step: '01',
      title: 'Chame no WhatsApp',
      description: 'Abra a conversa e explique o que precisa transportar.'
    },
    {
      step: '02',
      title: 'Informe origem, destino e tipo de entrega',
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
    eyebrow: 'Cobertura e flexibilidade',
    title: 'Atendimento para entregas pontuais, recorrentes e urgências sob consulta',
    description:
      'A NP Express ajusta o atendimento ao tipo de entrega, distância e prazo de cada solicitação.',
    bullets: [
      'Atendimento para empresas e pessoas físicas.',
      'Coletas avulsas, recorrentes e contratos fixos.',
      'WhatsApp como canal principal para orçamento e alinhamento.'
    ] as const,
    badges: ['Pequenas distâncias', 'Longas distâncias', 'Urgências sob consulta'] as const
  },
  finalCta: {
    title: 'Precisa de um motoboy agora?',
    description:
      'Fale com a NP Express e alinhe coleta, entrega ou contrato fixo pelo WhatsApp.',
    label: 'Chamar no WhatsApp'
  },
  footer: {
    note: 'Entregas, coletas e contratos fixos com comunicação direta e prazos combinados antes da execução.'
  }
} as const;
