import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal
} from '@angular/core';
import { BUSINESS_CONFIG } from '../../../../core/config/business.config';
import { LANDING_CONTENT } from '../../landing.content';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly companyName = BUSINESS_CONFIG.companyName;
  protected readonly navItems = LANDING_CONTENT.nav;
  protected readonly whatsappHref = BUSINESS_CONFIG.contactLinks.whatsapp;
  protected readonly menuId = 'header-mobile-navigation';
  protected readonly menuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly menuButtonLabel = computed(() =>
    this.menuOpen() ? 'Fechar menu principal' : 'Abrir menu principal'
  );

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    afterNextRender(() => {
      const currentWindow = this.document.defaultView;

      if (!currentWindow) {
        return;
      }

      const syncScrolledState = () => this.isScrolled.set(currentWindow.scrollY > 12);
      const handleScroll = () => syncScrolledState();

      currentWindow.addEventListener('scroll', handleScroll, { passive: true });
      syncScrolledState();
      this.destroyRef.onDestroy(() => currentWindow.removeEventListener('scroll', handleScroll));

      const mediaQuery = currentWindow.matchMedia('(min-width: 768px)');
      const syncDesktopState = () => {
        if (mediaQuery.matches) {
          this.closeMenu();
        }
      };
      const handleBreakpointChange = () => syncDesktopState();

      syncDesktopState();

      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', handleBreakpointChange);
        this.destroyRef.onDestroy(() =>
          mediaQuery.removeEventListener('change', handleBreakpointChange)
        );
      } else {
        mediaQuery.addListener(handleBreakpointChange);
        this.destroyRef.onDestroy(() => mediaQuery.removeListener(handleBreakpointChange));
      }

      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          this.closeMenu();
        }
      };

      currentWindow.addEventListener('keydown', handleKeydown);
      this.destroyRef.onDestroy(() => currentWindow.removeEventListener('keydown', handleKeydown));
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected handleNavClick(): void {
    this.closeMenu();
  }
}
