import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "hrb-home-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page">
      <h1>Home</h1>
      <p>Hi! 👋 I am Anna — placeholder page, real content in Phase 6.</p>
    </section>
  `,
  styles: `
    @use "../../../styles/mixins" as mixins;
    .page { @include mixins.container; padding-block: 48px; }
  `,
})
export class HomePage {}
