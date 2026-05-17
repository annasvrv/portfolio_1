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

import { LogoComponent } from "../../../shared/logo/logo";
import { WaveUnderlineComponent } from "../../../shared/wave-underline/wave-underline";
import { ThemeService } from "../../theme/theme.service";

interface NavItem {
  readonly path: string;
  readonly label: string;
  readonly title: string;
}

@Component({
  selector: "hrb-header",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, LogoComponent, WaveUnderlineComponent],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  protected readonly theme = inject(ThemeService);

  protected readonly isOpen = signal(false);
  protected readonly toggleButton = viewChild<ElementRef<HTMLButtonElement>>("toggleButton");
  protected readonly sidebar = viewChild<ElementRef<HTMLElement>>("sidebar");

  protected readonly navItems: readonly NavItem[] = [
    { path: "/",         label: "Home",     title: "Homepage" },
    { path: "/about",    label: "About",    title: "About Anna" },
    { path: "/projects", label: "Projects", title: "Selected work" },
    { path: "/contact",  label: "Contact",  title: "Get in touch" },
  ];

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.isOpen.set(false));

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

  protected toggleTheme(): void {
    this.theme.toggle();
  }

  @HostListener("document:keydown.escape")
  protected onEscape(): void {
    if (this.isOpen()) this.close();
  }

  private focusFirstLink(): void {
    if (!this.isBrowser) return;
    queueMicrotask(() => {
      this.sidebar()
        ?.nativeElement.querySelector<HTMLAnchorElement>("a")
        ?.focus();
    });
  }
}
