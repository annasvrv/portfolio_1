import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "hrb-contact-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page">
      <h1>Contact me</h1>
      <p>Placeholder — real content in Phase 6.</p>
    </section>
  `,
  styles: `
    @use "../../../styles/mixins" as mixins;
    .page { @include mixins.container; padding-block: 48px; }
  `,
})
export class ContactPage {}
