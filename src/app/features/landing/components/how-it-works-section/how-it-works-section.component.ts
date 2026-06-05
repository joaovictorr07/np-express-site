import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [RevealOnViewDirective, SectionHeaderComponent],
  templateUrl: './how-it-works-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowItWorksSectionComponent {
  protected readonly sectionId = SECTION_IDS.howItWorks;
  protected readonly section = LANDING_CONTENT.howItWorksSection;
  protected readonly steps = LANDING_CONTENT.howItWorks;
}
