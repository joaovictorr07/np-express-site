import { CtaLink } from './cta-link.model';

export interface BusinessConfig {
  readonly companyName: string;
  readonly primaryPhoneDisplay: string;
  readonly displayPhones: readonly string[];
  readonly whatsappNumberIntl: string;
  readonly defaultWhatsappMessage: string;
  readonly whatsappBaseUrl: string;
  readonly businessTagline: string;
  readonly serviceLabels: readonly string[];
  readonly contactLinks: {
    readonly whatsapp: string;
    readonly phone: string;
    readonly institutional: readonly CtaLink[];
  };
}
