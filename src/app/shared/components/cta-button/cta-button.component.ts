import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  templateUrl: './cta-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaButtonComponent {
  readonly label = input.required<string>();
  readonly href = input.required<string>();
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly ariaLabel = input<string>();
  readonly external = input(false);

  protected readonly classes = computed(() => {
    const base =
      'focus-ring inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 ease-out';

    const variants: Record<ButtonVariant, string> = {
      primary:
        'cta-glow bg-linear-to-r from-[var(--color-brand-red)] to-[#ff8b5b] text-slate-950 hover:-translate-y-0.5 hover:brightness-105',
      secondary:
        'border border-white/12 bg-white/6 text-[var(--color-text-primary)] hover:-translate-y-0.5 hover:border-[var(--color-brand-cyan)] hover:bg-white/10',
      ghost:
        'text-[var(--color-brand-cyan)] hover:text-white'
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-3 text-sm md:px-6 md:py-3.5',
      lg: 'px-6 py-3.5 text-base md:px-7 md:py-4'
    };

    return `${base} ${variants[this.variant()]} ${sizes[this.size()]}`;
  });
}
