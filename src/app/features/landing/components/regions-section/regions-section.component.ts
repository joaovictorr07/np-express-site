import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';
import { buildWhatsappLink } from '../../../../core/config/business.config';

@Component({
  selector: 'app-regions-section',
  standalone: true,
  imports: [RevealOnViewDirective, SectionHeaderComponent],
  templateUrl: './regions-section.component.html',
  styleUrl: './regions-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsSectionComponent {
  protected readonly sectionId = SECTION_IDS.regions;
  protected readonly sectionInfo = LANDING_CONTENT.regionsSection;
  protected readonly regions = LANDING_CONTENT.regions;

  protected getWhatsappLink(cityName: string): string {
    return buildWhatsappLink(`Olá! Quero falar com a NP Express sobre motoboy em ${cityName}.`);
  }
}
