import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { WhatsappButtonComponent } from '../../../../shared/components/whatsapp-button/whatsapp-button.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [RevealOnViewDirective, WhatsappButtonComponent],
  templateUrl: './final-cta-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalCtaSectionComponent {
  protected readonly sectionId = SECTION_IDS.finalCta;
  protected readonly cta = LANDING_CONTENT.finalCta;
}
