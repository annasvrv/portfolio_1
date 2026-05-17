import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from "@angular/core";

// Renders a single icon from the generated sprite at /sprite.svg.
//
// Usage:
//   <hrb-icon name="menu" />
//   <hrb-icon name="github" size="32" label="GitHub profile" />
//
// `label` makes the icon perceivable to screen readers when it carries
// meaning on its own. Decorative icons (paired with visible text) should
// omit `label` — the component will mark the SVG aria-hidden.
@Component({
  selector: "hrb-icon",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <svg
      class="icon__svg"
      [attr.width]="size()"
      [attr.height]="size()"
      [attr.role]="label() ? 'img' : null"
      [attr.aria-label]="label()"
      [attr.aria-hidden]="label() ? null : true"
      focusable="false"
    >
      <use [attr.href]="href()"></use>
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      line-height: 0;
      color: currentColor;
    }
    .icon__svg {
      fill: none;
      stroke: currentColor;
    }
  `,
  host: { class: "icon" },
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input<number>(24);
  readonly label = input<string | null>(null);

  protected readonly href = computed(() => `/sprite.svg#${this.name()}`);
}
