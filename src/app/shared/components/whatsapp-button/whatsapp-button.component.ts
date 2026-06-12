import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  buildContextualWhatsappMessage,
  buildWhatsappLink
} from '../../../core/config/business.config';

type WhatsappVariant = 'primary' | 'secondary' | 'ghost';
type WhatsappSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappButtonComponent {
  readonly label = input('Chamar no WhatsApp');
  readonly messageOverride = input<string>();
  readonly contextTag = input<string>();
  readonly variant = input<WhatsappVariant>('primary');
  readonly size = input<WhatsappSize>('md');
  readonly ariaLabel = input<string>();

  protected readonly href = computed(() => {
    const override = this.messageOverride()?.trim();
    const context = this.contextTag()?.trim();

    if (override) {
      return buildWhatsappLink(override);
    }

    if (context) {
      return buildWhatsappLink(buildContextualWhatsappMessage(context));
    }

    return buildWhatsappLink();
  });

  protected readonly classes = computed(() => {
    const base =
      'focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-out';

    const variants: Record<WhatsappVariant, string> = {
      primary:
        'shimmer-btn animate-pulse-glow-wa bg-linear-to-r from-[var(--color-brand-red)] to-[#ff8b5b] text-slate-950 hover:-translate-y-0.5 hover:brightness-105',
      secondary:
        'border border-[rgba(37,211,102,0.25)] bg-[rgba(37,211,102,0.08)] text-[var(--color-text-primary)] hover:-translate-y-0.5 hover:bg-[rgba(37,211,102,0.14)]',
      ghost:
        'text-[var(--color-wa-green)] hover:text-white'
    };

    const sizes: Record<WhatsappSize, string> = {
      sm: 'min-h-10 px-4 py-2 text-sm',
      md: 'min-h-11 px-5 py-3 text-sm md:px-6 md:py-3.5',
      lg: 'min-h-12 px-6 py-3.5 text-base md:px-7 md:py-4'
    };

    return `${base} ${variants[this.variant()]} ${sizes[this.size()]}`;
  });
}
