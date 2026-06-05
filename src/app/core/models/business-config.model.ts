import { CtaLink } from './cta-link.model';

export interface BusinessHourSlot {
  readonly label: string;
  readonly hours: string;
  readonly note?: string;
}

export interface BusinessConfig {
  readonly companyName: string;
  readonly primaryPhoneDisplay: string;
  readonly displayPhones: readonly string[];
  readonly whatsappNumberIntl: string;
  readonly defaultWhatsappMessage: string;
  readonly whatsappBaseUrl: string;
  readonly businessTagline: string;
  readonly serviceLabels: readonly string[];
  readonly businessHours: readonly BusinessHourSlot[];
  readonly contactLinks: {
    readonly whatsapp: string;
    readonly phone: string;
    readonly institutional: readonly CtaLink[];
  };
}
