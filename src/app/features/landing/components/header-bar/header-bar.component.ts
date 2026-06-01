import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS_CONFIG } from '../../../../core/config/business.config';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent {
  protected readonly companyName = BUSINESS_CONFIG.companyName;
  protected readonly navItems = LANDING_CONTENT.nav;
  protected readonly whatsappHref = BUSINESS_CONFIG.contactLinks.whatsapp;
}
