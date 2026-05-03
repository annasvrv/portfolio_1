import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  computed,
  inject,
  input,
  signal,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { interval } from "rxjs";

import { Certificate } from "../../data/certificates.data";
import { CertificateCardComponent } from "../certificate-card/certificate-card";
import { IconComponent } from "../../core/icon/icon";

@Component({
  selector: "hrb-certificate-carousel",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CertificateCardComponent, IconComponent],
  templateUrl: "./certificate-carousel.html",
  styleUrl: "./certificate-carousel.scss",
})
export class CertificateCarouselComponent {
  // Items to rotate through.
  readonly items = input.required<readonly Certificate[]>();

  // Auto-advance interval in ms. Set to 0 to disable.
  readonly autoplayMs = input<number>(5000);

  protected readonly activeIndex = signal(0);

  protected readonly activeCertificate = computed(
    () => this.items()[this.activeIndex()],
  );

  protected readonly count = computed(() => this.items().length);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Autoplay only in the browser (skip on server-side prerender) and
    // only when the user hasn't requested reduced motion.
    if (!isPlatformBrowser(this.platformId)) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const autoplay = this.autoplayMs();
    if (reduceMotion || autoplay <= 0) return;

    interval(autoplay)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.next());
  }

  protected next(): void {
    this.activeIndex.update((i) => (i + 1) % this.count());
  }

  protected previous(): void {
    this.activeIndex.update((i) => (i - 1 + this.count()) % this.count());
  }

  protected goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
