import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "hrb-hero",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: "./hero.html",
  styleUrl: "./hero.scss",
})
export class HeroComponent {
  readonly greeting = input<string>("Hi! 👋 I am Anna");
  readonly title = input.required<string>();
  readonly subtitle = input<string>("based in Europe");
  readonly ctaLabel = input<string | null>("Contact me");
  readonly ctaPath = input<string>("/contact");
}
