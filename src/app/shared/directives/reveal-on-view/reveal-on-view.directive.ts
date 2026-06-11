import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
  input,
  numberAttribute,
  inject
} from '@angular/core';

@Directive({
  selector: '[appRevealOnView]',
  standalone: true,
  host: {
    class: 'reveal-on-view'
  }
})
export class RevealOnViewDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  readonly delay = input(0, { alias: 'appRevealOnViewDelay', transform: numberAttribute });
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const nativeElement = this.elementRef.nativeElement;
    const delay = this.delay();

    if (delay > 0) {
      this.renderer.setStyle(nativeElement, '--reveal-delay', `${delay}ms`);
    }

    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.renderer.addClass(nativeElement, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        this.renderer.addClass(nativeElement, 'is-visible');
        this.observer?.disconnect();
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    this.observer.observe(nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
