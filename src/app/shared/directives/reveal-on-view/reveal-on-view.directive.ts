import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
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
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const nativeElement = this.elementRef.nativeElement;

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
