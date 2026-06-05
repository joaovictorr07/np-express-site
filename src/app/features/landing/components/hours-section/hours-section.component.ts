import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS_CONFIG } from '../../../../core/config/business.config';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-hours-section',
  standalone: true,
  imports: [RevealOnViewDirective, SectionHeaderComponent],
  templateUrl: './hours-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoursSectionComponent {
  protected readonly sectionId = SECTION_IDS.hours;
  protected readonly section = LANDING_CONTENT.hoursSection;
  protected readonly businessHours = BUSINESS_CONFIG.businessHours;
}
