import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'hrb-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly isBrowser: boolean;
  readonly mode = signal<ThemeMode>('light');

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.mode.set(this.resolveInitial());
      this.apply(this.mode());
    }
  }

  toggle(): void {
    this.set(this.mode() === 'dark' ? 'light' : 'dark');
  }

  set(mode: ThemeMode): void {
    this.mode.set(mode);
    if (!this.isBrowser) return;
    this.apply(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // localStorage may be unavailable (private mode); ignore.
    }
  }

  private resolveInitial(): ThemeMode {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // fall through
    }
    return this.doc.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private apply(mode: ThemeMode): void {
    this.doc.documentElement.setAttribute('data-theme', mode);
  }
}
