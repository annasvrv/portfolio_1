import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";

import { Project } from "../../data/projects.data";

export type ProjectCardVariant = "stacked" | "split" | "split-reverse";

@Component({
  selector: "hrb-project-card",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./project-card.html",
  styleUrl: "./project-card.scss",
})
export class ProjectCardComponent {
  // The project data (image, title, description, demo link, stack).
  readonly project = input.required<Project>();

  // Layout variant:
  //   stacked       — image on top, text below (used in /projects grid)
  //   split         — image left, text right (used on home, odd rows)
  //   split-reverse — image right, text left (used on home, even rows)
  readonly variant = input<ProjectCardVariant>("stacked");

  // CTA label override (e.g. "Demo" on home, "View my work" on /projects)
  readonly ctaLabel = input<string>("View my work");

  // Whether this card's image is the LCP (skip lazy + use fetchpriority).
  readonly isLcp = input<boolean>(false);

  protected readonly variantClass = computed(
    () => `project-card--${this.variant()}`,
  );
}
