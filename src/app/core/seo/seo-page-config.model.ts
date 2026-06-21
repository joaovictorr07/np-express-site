export interface SeoPageConfig {
  readonly title: string;
  readonly description: string;
  readonly canonicalUrl: string;
  readonly robots: string;
  readonly openGraph: {
    readonly type: 'website';
    readonly imageUrl: string;
    readonly imageAlt: string;
  };
  readonly jsonLd: readonly Record<string, unknown>[];
}
