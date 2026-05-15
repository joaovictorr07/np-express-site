import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealOnViewDirective, SectionHeaderComponent, ServiceCardComponent],
  templateUrl: './services-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesSectionComponent {
  protected readonly sectionId = SECTION_IDS.services;
  protected readonly services = LANDING_CONTENT.services;
}
