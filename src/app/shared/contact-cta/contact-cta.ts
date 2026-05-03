import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "hrb-contact-cta",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: "./contact-cta.html",
  styleUrl: "./contact-cta.scss",
})
export class ContactCtaComponent {
  readonly heading = input<string>("Work Inquiry");
  readonly subheading = input<string>("Let's work together");
  readonly ctaLabel = input<string>("Contact me");
  readonly ctaPath = input<string>("/contact");
}
