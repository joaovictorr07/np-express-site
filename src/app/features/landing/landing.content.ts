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
    eyebrow: 'Motoboy rápido para sua entrega',
    title: 'Entrega, coleta e urgência com resposta rápida',
    description:
      'Fale com a NP Express no WhatsApp e resolva coletas, entregas e demandas urgentes com atendimento direto.',
    supportLine: 'Atendimento direto para coletas, entregas rápidas e demandas sob consulta.',
    primaryCtaLabel: 'Chamar agora no WhatsApp',
    secondaryCtaLabel: 'Ver serviços',
    badges: [
      'Coleta e entrega rápida',
      'Urgências sob consulta',
      'Atendimento direto'
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
    eyebrow: 'Atendimento flexível',
    title: 'Coletas, entregas recorrentes e urgências sob consulta',
    description:
      'Atendimento ajustado ao tipo da demanda, distância e prazo.',
    bullets: [
      'Empresas e pessoas físicas.',
      'Demandas avulsas, programadas e contratos fixos.',
      'Orçamento e alinhamento direto no WhatsApp.'
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
  footer: {
    note: 'Coletas, entregas e rotas recorrentes com contato direto e prazo combinado.'
  }
} as const;
