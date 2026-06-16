import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SECTION_IDS } from '../../../../core/constants/section-ids';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnViewDirective } from '../../../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [RevealOnViewDirective, SectionHeaderComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqSectionComponent {
  protected readonly sectionId = SECTION_IDS.faq;
  protected readonly sectionInfo = LANDING_CONTENT.faqSection;
  protected readonly faqs = LANDING_CONTENT.faqs;

  protected readonly activeIndex = signal<number | null>(null);

  protected toggleAccordion(index: number): void {
    if (this.activeIndex() === index) {
      this.activeIndex.set(null);
    } else {
      this.activeIndex.set(index);
    }
  }
}
