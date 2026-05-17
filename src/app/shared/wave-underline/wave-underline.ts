import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'hrb-wave-underline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="width()"
      height="14"
      viewBox="0 0 220 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 8 C 30 2, 70 12, 110 6 S 200 2, 218 7"
        fill="none"
        stroke-width="1.6"
        stroke-linecap="round"
        [attr.stroke]="color()"
      />
    </svg>
  `,
  styles: [
    `
      :host { display: inline-block; line-height: 0; }
      svg { display: block; }
    `,
  ],
})
export class WaveUnderlineComponent {
  readonly color = input<string>('var(--hrb-color-accent-primary)');
  readonly width = input<string | number>(220);
}
