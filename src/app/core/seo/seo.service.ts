import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoPageConfig } from './seo-page-config.model';

const MANAGED_JSON_LD_ATTRIBUTE = 'data-np-seo';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  apply(config: SeoPageConfig): void {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: config.robots });
    this.meta.updateTag({ property: 'og:type', content: config.openGraph.type });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:site_name', content: 'NP Express' });
    this.meta.updateTag({ property: 'og:url', content: config.canonicalUrl });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.openGraph.imageUrl });
    this.meta.updateTag({ property: 'og:image:alt', content: config.openGraph.imageAlt });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.openGraph.imageUrl });

    this.setCanonical(config.canonicalUrl);
    this.setJsonLd(config.jsonLd);
  }

  private setCanonical(url: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = url;
  }

  private setJsonLd(documents: readonly Record<string, unknown>[]): void {
    this.document.head
      .querySelectorAll<HTMLScriptElement>(`script[${MANAGED_JSON_LD_ATTRIBUTE}]`)
      .forEach((script) => script.remove());

    for (const document of documents) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(MANAGED_JSON_LD_ATTRIBUTE, 'true');
      script.text = JSON.stringify(document);
      this.document.head.appendChild(script);
    }
  }
}
