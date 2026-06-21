import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoPageConfig } from '../../core/seo/seo-page-config.model';
import { SeoService } from '../../core/seo/seo.service';
import { FloatingWhatsappButtonComponent } from '../../shared/components/floating-whatsapp-button/floating-whatsapp-button.component';
import { WhatsappButtonComponent } from '../../shared/components/whatsapp-button/whatsapp-button.component';
import { RevealOnViewDirective } from '../../shared/directives/reveal-on-view/reveal-on-view.directive';
import { FooterSectionComponent } from '../landing/components/footer-section/footer-section.component';
import { HeaderBarComponent } from '../landing/components/header-bar/header-bar.component';
import { ServicePageContent } from './service-page.content';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    HeaderBarComponent,
    FooterSectionComponent,
    FloatingWhatsappButtonComponent,
    WhatsappButtonComponent,
    RevealOnViewDirective
  ],
  templateUrl: './service-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly content = this.route.snapshot.data['content'] as ServicePageContent;
  protected readonly relatedPage = this.route.snapshot.data['relatedPage'] as {
    readonly href: string;
    readonly label: string;
    readonly description: string;
  };

  constructor() {
    this.seo.apply(this.route.snapshot.data['seo'] as SeoPageConfig);
  }
}
