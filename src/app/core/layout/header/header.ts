import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { filter } from "rxjs/operators";

import { IconComponent } from "../../icon/icon";

interface NavItem {
  readonly path: string;
  readonly label: string;
  readonly title: string;
}

@Component({
  selector: "hrb-header",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  protected readonly isOpen = signal(false);

  // Element refs for focus management.
  protected readonly toggleButton = viewChild<ElementRef<HTMLButtonElement>>("toggleButton");
  protected readonly sidebar = viewChild<ElementRef<HTMLElement>>("sidebar");

  protected readonly navItems: readonly NavItem[] = [
    { path: "/",         label: "Home",        title: "Homepage" },
    { path: "/about",    label: "About me",    title: "About Anna" },
    { path: "/projects", label: "My projects", title: "Anna's projects" },
    { path: "/contact",  label: "Contact me",  title: "Contact Anna" },
  ];

  constructor() {
    // Close the mobile menu on every successful navigation.
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.isOpen.set(false));

    // Lock body scroll whenever the drawer is open. The CSS hides the
    // drawer on tab-s+, so this is effectively a no-op on desktop.
    effect(() => {
      if (!this.isBrowser) return;
      document.body.style.overflow = this.isOpen() ? "hidden" : "";
    });
  }

  protected toggle(): void {
    const willOpen = !this.isOpen();
    this.isOpen.set(willOpen);
    if (willOpen) {
      this.focusFirstLink();
    } else {
      this.toggleButton()?.nativeElement.focus();
    }
  }

  protected close(): void {
    if (!this.isOpen()) return;
    this.isOpen.set(false);
    this.toggleButton()?.nativeElement.focus();
  }

  @HostListener("document:keydown.escape")
  protected onEscape(): void {
    if (this.isOpen()) this.close();
  }

  // Defer to a microtask so the drawer's open transition has applied
  // before we move focus into it.
  private focusFirstLink(): void {
    if (!this.isBrowser) return;
    queueMicrotask(() => {
      this.sidebar()
        ?.nativeElement.querySelector<HTMLAnchorElement>("a")
        ?.focus();
    });
  }
}
