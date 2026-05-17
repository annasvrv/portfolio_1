import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  signal,
  type WritableSignal,
} from '@angular/core';

// Names mirror the SCSS breakpoints in src/styles/_breakpoints.scss
// (tab-s 768, desk-s 1280, desk-l 1920) so a template binding like
// `[size]="viewport.pb768() ? 96 : 64"` reads the same as the matching
// `@include breakpoints.tab-s { ... }` block.
@Injectable({ providedIn: 'root' })
export class ViewportService {
  readonly pb768 = signal(false);
  readonly pb1280 = signal(false);
  readonly pb1920 = signal(false);

  constructor(
    @Inject(DOCUMENT) doc: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    if (!isPlatformBrowser(platformId)) return;
    const win = doc.defaultView;
    if (!win) return;

    this.watch(win, 768, this.pb768);
    this.watch(win, 1280, this.pb1280);
    this.watch(win, 1920, this.pb1920);
  }

  private watch(win: Window, px: number, target: WritableSignal<boolean>): void {
    const mql = win.matchMedia(`(min-width: ${px}px)`);
    target.set(mql.matches);
    mql.addEventListener('change', (e) => target.set(e.matches));
  }
}
