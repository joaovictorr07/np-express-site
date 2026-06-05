import { BusinessConfig } from '../models/business-config.model';

function createWhatsappUrl(numberIntl: string, message: string, baseUrl: string): string {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBaseUrl}${numberIntl}?text=${encodeURIComponent(message)}`;
}

const DEFAULT_MESSAGE = 'Olá! Quero solicitar uma coleta ou entrega com a NP Express.';
const WHATSAPP_NUMBER = '5511912141367';
const WHATSAPP_BASE_URL = 'https://wa.me/';

export const BUSINESS_CONFIG = {
  companyName: 'NP Express',
  primaryPhoneDisplay: '11 91214-1367',
  displayPhones: ['11 91214-1367'],
  whatsappNumberIntl: WHATSAPP_NUMBER,
  defaultWhatsappMessage: DEFAULT_MESSAGE,
  whatsappBaseUrl: WHATSAPP_BASE_URL,
  businessTagline: 'Coleta, entrega e urgência com resposta rápida.',
  serviceLabels: [
    'Entregas rápidas',
    'Entregas e coletas',
    'Entregas urgentes sob consulta',
    'Coleta programada',
    'Pequenas e longas distâncias',
    'Contrato fixo ou esporádico'
  ],
  contactLinks: {
    whatsapp: createWhatsappUrl(WHATSAPP_NUMBER, DEFAULT_MESSAGE, WHATSAPP_BASE_URL),
    phone: 'tel:+5511912141367',
    institutional: [
      {
        label: 'WhatsApp',
        href: createWhatsappUrl(WHATSAPP_NUMBER, DEFAULT_MESSAGE, WHATSAPP_BASE_URL),
        ariaLabel: 'Abrir conversa da NP Express no WhatsApp',
        external: true
      },
      {
        label: 'Ligar agora',
        href: 'tel:+5511912141367',
        ariaLabel: 'Ligar para o contato principal da NP Express'
      }
    ]
  }
} satisfies BusinessConfig;

export function buildWhatsappLink(message: string = BUSINESS_CONFIG.defaultWhatsappMessage): string {
  return createWhatsappUrl(
    BUSINESS_CONFIG.whatsappNumberIntl,
    message,
    BUSINESS_CONFIG.whatsappBaseUrl
  );
}

export function buildContextualWhatsappMessage(context: string): string {
  return `Olá! Quero falar com a NP Express sobre ${context}.`;
}
