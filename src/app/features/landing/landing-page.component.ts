import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HOME_SEO } from '../../core/seo/seo-pages.config';
import { SeoService } from '../../core/seo/seo.service';
import { FloatingWhatsappButtonComponent } from '../../shared/components/floating-whatsapp-button/floating-whatsapp-button.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { CoverageSectionComponent } from './components/coverage-section/coverage-section.component';
import { FinalCtaSectionComponent } from './components/final-cta-section/final-cta-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HowItWorksSectionComponent } from './components/how-it-works-section/how-it-works-section.component';
import { HoursSectionComponent } from './components/hours-section/hours-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { RegionsSectionComponent } from './components/regions-section/regions-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderBarComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    BenefitsSectionComponent,
    HowItWorksSectionComponent,
    CoverageSectionComponent,
    RegionsSectionComponent,
    HoursSectionComponent,
    FaqSectionComponent,
    FinalCtaSectionComponent,
    FooterSectionComponent,
    FloatingWhatsappButtonComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  constructor(seo: SeoService) {
    seo.apply(HOME_SEO);
  }
}
