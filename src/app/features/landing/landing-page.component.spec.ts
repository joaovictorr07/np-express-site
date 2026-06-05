import { TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  beforeAll(() => {
    class IntersectionObserverMock {
      observe(): void {}
      disconnect(): void {}
      unobserve(): void {}
    }

    Object.defineProperty(window, 'IntersectionObserver', {
      configurable: true,
      writable: true,
      value: IntersectionObserverMock
    });

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
      })
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent]
    }).compileComponents();
  });

  it('renders the hours section between coverage and final cta', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const sectionIds = Array.from(host.querySelectorAll('main section')).map((section) => section.id);

    expect(sectionIds).toContain('horario-atendimento');
    expect(sectionIds.indexOf('cobertura')).toBeLessThan(sectionIds.indexOf('horario-atendimento'));
    expect(sectionIds.indexOf('horario-atendimento')).toBeLessThan(
      sectionIds.indexOf('chamar-no-whatsapp')
    );
  });

  it('exposes the hours anchor in header, mobile menu and footer links', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const menuButton = host.querySelector('button[aria-controls="header-mobile-navigation"]');

    expect(host.querySelector('header nav a[href="#horario-atendimento"]')).not.toBeNull();
    expect(host.querySelector('footer nav a[href="#horario-atendimento"]')).not.toBeNull();

    menuButton?.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(host.querySelector('#header-mobile-navigation a[href="#horario-atendimento"]')).not.toBeNull();
  });
});
