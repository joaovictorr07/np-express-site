import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';
import { TrustBadgeComponent } from '../../../../shared/components/trust-badge/trust-badge.component';
import { WhatsappButtonComponent } from '../../../../shared/components/whatsapp-button/whatsapp-button.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';
import { HeroVisualComponent } from '../hero-visual/hero-visual.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CtaButtonComponent,
    HeroVisualComponent,
    RevealOnViewDirective,
    TrustBadgeComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  protected readonly hero = LANDING_CONTENT.hero;
  protected readonly sectionId = SECTION_IDS.hero;
  protected readonly servicesHref = `#${SECTION_IDS.services}`;
}
