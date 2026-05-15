import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { FeatureCardComponent } from '../../../../shared/components/feature-card/feature-card.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [FeatureCardComponent, RevealOnViewDirective, SectionHeaderComponent],
  templateUrl: './benefits-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsSectionComponent {
  protected readonly sectionId = SECTION_IDS.benefits;
  protected readonly benefits = LANDING_CONTENT.benefits;
}
