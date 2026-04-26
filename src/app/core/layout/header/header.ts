import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from "@angular/core";
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

  protected readonly isOpen = signal(false);

  protected readonly navItems: readonly NavItem[] = [
    { path: "/",         label: "Home",        title: "Homepage" },
    { path: "/about",    label: "About me",    title: "About Anna" },
    { path: "/projects", label: "My projects", title: "Anna's projects" },
    { path: "/cv",       label: "CV",          title: "Anna's CV" },
    { path: "/contact",  label: "Contact me",  title: "Contact Anna" },
  ];

  constructor() {
    // Close the mobile menu on every successful navigation.
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.isOpen.set(false));
  }

  protected toggle(): void {
    this.isOpen.update((open) => !open);
  }

  protected close(): void {
    this.isOpen.set(false);
  }

  @HostListener("document:keydown.escape")
  protected onEscape(): void {
    if (this.isOpen()) this.close();
  }
}
