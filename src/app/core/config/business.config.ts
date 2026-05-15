import { BusinessConfig } from '../models/business-config.model';

function createWhatsappUrl(numberIntl: string, message: string, baseUrl: string): string {
  return `${baseUrl}?phone=${numberIntl}&text=${encodeURIComponent(message)}`;
}

const DEFAULT_MESSAGE = 'Olá! Quero solicitar um atendimento da NP Express.';
const WHATSAPP_NUMBER = '5511912141367';
const WHATSAPP_BASE_URL = 'https://wa.me/';

export const BUSINESS_CONFIG = {
  companyName: 'NP Express',
  primaryPhoneDisplay: '11 91214-1367',
  displayPhones: ['11 91214-1367'],
  whatsappNumberIntl: WHATSAPP_NUMBER,
  defaultWhatsappMessage: DEFAULT_MESSAGE,
  whatsappBaseUrl: WHATSAPP_BASE_URL,
  businessTagline: 'Motoboy ágil para entregas, coletas e contratos fixos.',
  serviceLabels: [
    'Contrato fixo ou esporádico',
    'Entregas e coletas',
    'Coleta programada',
    'Pequenas e longas distâncias',
    'Entregas rápidas',
    'Entregas urgentes sob consulta'
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
  return `Olá! Quero falar sobre ${context} na NP Express.`;
}
