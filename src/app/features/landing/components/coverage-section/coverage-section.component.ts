import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { TrustBadgeComponent } from '../../../../shared/components/trust-badge/trust-badge.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-coverage-section',
  standalone: true,
  imports: [RevealOnViewDirective, SectionHeaderComponent, TrustBadgeComponent],
  templateUrl: './coverage-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoverageSectionComponent {
  protected readonly sectionId = SECTION_IDS.coverage;
  protected readonly coverage = LANDING_CONTENT.coverage;
}
