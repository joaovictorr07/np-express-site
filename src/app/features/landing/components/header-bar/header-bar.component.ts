import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS_CONFIG } from '../../../../core/config/business.config';
import { LANDING_CONTENT } from '../../landing.content';
import { WhatsappButtonComponent } from '../../../../shared/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [WhatsappButtonComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent {
  protected readonly companyName = BUSINESS_CONFIG.companyName;
  protected readonly navItems = LANDING_CONTENT.nav;
}
