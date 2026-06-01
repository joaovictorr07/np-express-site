import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS_CONFIG } from '../../../../core/config/business.config';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  templateUrl: './footer-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterSectionComponent {
  protected readonly companyName = BUSINESS_CONFIG.companyName;
  protected readonly primaryPhone = BUSINESS_CONFIG.primaryPhoneDisplay;
  protected readonly phoneHref = BUSINESS_CONFIG.contactLinks.phone;
  protected readonly whatsappHref = BUSINESS_CONFIG.contactLinks.whatsapp;
  protected readonly footerNote = LANDING_CONTENT.footer.note;
  protected readonly navItems = LANDING_CONTENT.nav;
}
