import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'hrb-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      [src]="src()"
      [width]="size()"
      [height]="size()"
      [class.logo--on-dark]="onDark()"
      [class.logo--watermark]="watermark()"
      alt=""
      decoding="async"
      aria-hidden="true"
    />
  `,
  styles: [
    `
      :host { display: inline-flex; line-height: 0; }
      img { display: block; object-fit: contain; }
      .logo--on-dark { filter: invert(1) brightness(0.95); }
      .logo--watermark { opacity: 0.06; }
      :host-context([data-theme="dark"]) img:not(.logo--on-dark) {
        filter: invert(1) brightness(0.95);
      }
    `,
  ],
})
export class LogoComponent {
  readonly size = input<number>(42);
  readonly onDark = input<boolean>(false);
  readonly watermark = input<boolean>(false);
  readonly src = computed(() => '/logo.svg');
}
