import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NOT_FOUND_SEO } from '../../core/seo/seo-pages.config';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  template: `
    <main class="flex min-h-screen items-center justify-center px-4 text-center">
      <div class="surface-panel max-w-xl p-8 md:p-12">
        <p class="eyebrow">Erro 404</p>
        <h1 class="mt-6 font-[var(--font-display)] text-4xl font-bold text-white">Página não encontrada</h1>
        <p class="mt-4 leading-7 text-[var(--color-text-secondary)]">O endereço acessado não existe. Volte para a página principal da NP Express.</p>
        <a href="/" class="focus-ring mt-7 inline-flex rounded-full bg-[var(--color-brand-red)] px-6 py-3 font-semibold text-slate-950">Voltar ao início</a>
      </div>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.apply(NOT_FOUND_SEO);
  }
}
