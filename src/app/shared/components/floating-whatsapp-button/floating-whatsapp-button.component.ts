import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BUSINESS_CONFIG, buildWhatsappLink } from '../../../core/config/business.config';

@Component({
  selector: 'app-floating-whatsapp-button',
  standalone: true,
  templateUrl: './floating-whatsapp-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingWhatsappButtonComponent {
  readonly contextTag = input('atendimento imediato');
  protected readonly href = computed(() =>
    buildWhatsappLink(
      `Olá! Quero falar com a ${BUSINESS_CONFIG.companyName} sobre ${this.contextTag()}.`
    )
  );
}
