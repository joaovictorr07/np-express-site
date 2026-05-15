import { SECTION_IDS } from '../../core/constants/section-ids';

export interface LandingNavItem {
  readonly label: string;
  readonly href: string;
}

export interface ContentBlock {
  readonly title: string;
  readonly description: string;
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
    eyebrow: 'Atendimento rápido e direto',
    title: 'Motoboy rápido para entregas, coletas e contratos fixos',
    description:
      'Atendimento ágil para empresas e pessoas físicas, com entregas programadas, urgentes ou esporádicas.',
    primaryCtaLabel: 'Chamar no WhatsApp',
    secondaryCtaLabel: 'Ver serviços',
    badges: [
      'Contrato fixo ou esporádico',
      'Entregas rápidas',
      'Atendimento direto pelo WhatsApp'
    ] as const
  },
  services: [
    {
      title: 'Contrato fixo ou esporádico',
      description: 'Operação sob demanda ou recorrente para rotina comercial, administrativa ou pessoal.'
    },
    {
      title: 'Entregas e coletas',
      description: 'Coleta e entrega com comunicação simples e resposta rápida desde o primeiro contato.'
    },
    {
      title: 'Coleta programada',
      description: 'Agendamentos que ajudam a manter a logística organizada sem depender de improviso.'
    },
    {
      title: 'Pequenas e longas distâncias',
      description: 'Atendimento flexível para trajetos urbanos curtos e percursos mais extensos.'
    },
    {
      title: 'Entregas rápidas',
      description: 'Priorização de tempo e execução para quem precisa acelerar a operação do dia a dia.'
    },
    {
      title: 'Entregas urgentes sob consulta',
      description: 'Demandas críticas analisadas caso a caso para alinhar prazo, viabilidade e execução.'
    }
  ] as const satisfies readonly ContentBlock[],
  benefits: [
    {
      title: 'Agilidade operacional',
      description: 'Atendimentos pensados para sair do WhatsApp direto para a execução, sem burocracia.'
    },
    {
      title: 'Contato sem intermediários',
      description: 'Comunicação direta para alinhamento rápido de coleta, entrega, urgência e confirmação.'
    },
    {
      title: 'Flexibilidade real',
      description: 'Solução útil tanto para empresas quanto para pessoas físicas com rotinas variadas.'
    },
    {
      title: 'Coletas programadas',
      description: 'Base preparada para recorrência e previsibilidade sem perder velocidade no atendimento.'
    },
    {
      title: 'Apoio a demandas recorrentes',
      description: 'Boa opção para quem precisa de frequência, contratos fixos ou apoio constante de motoboy.'
    }
  ] as const satisfies readonly ContentBlock[],
  howItWorks: [
    {
      step: '01',
      title: 'Chame no WhatsApp',
      description: 'Inicie o atendimento com poucos toques e fale direto com a NP Express.'
    },
    {
      step: '02',
      title: 'Informe origem, destino e tipo de entrega',
      description: 'Passe os dados principais da coleta ou entrega para alinhar a execução.'
    },
    {
      step: '03',
      title: 'Receba a confirmação',
      description: 'A demanda é validada com clareza para você saber como seguir.'
    },
    {
      step: '04',
      title: 'Combine a execução da entrega',
      description: 'Com tudo alinhado, a operação segue com rapidez e foco no prazo.'
    }
  ] as const satisfies readonly StepBlock[],
  coverage: {
    eyebrow: 'Cobertura e flexibilidade',
    title: 'Atendimento para pequenas demandas, rotinas recorrentes e urgências sob consulta',
    description:
      'A base da landing reforça velocidade, clareza comercial e capacidade de adaptação ao tipo de entrega.',
    bullets: [
      'Atendimento a empresas e pessoas físicas.',
      'Operação para coletas avulsas, recorrentes e contratos fixos.',
      'Fluxo comercial pensado para conversão rápida no WhatsApp.'
    ] as const,
    badges: ['Pequenas distâncias', 'Longas distâncias', 'Urgências sob consulta'] as const
  },
  finalCta: {
    title: 'Precisa de um motoboy agora?',
    description:
      'Fale com a NP Express no WhatsApp e alinhe sua coleta ou entrega com atendimento direto.',
    label: 'Chamar no WhatsApp'
  },
  footer: {
    note: 'Atendimento ágil para entregas, coletas e contratos fixos.'
  }
} as const;
