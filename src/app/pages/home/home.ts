import { ChangeDetectionStrategy, Component } from "@angular/core";

import { HeroComponent } from "../../shared/hero/hero";
import { ProjectCardComponent, ProjectCardVariant } from "../../shared/project-card/project-card";
import { ContactCtaComponent } from "../../shared/contact-cta/contact-cta";
import { featuredProjects } from "../../data/projects.data";

@Component({
  selector: "hrb-home-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent, ProjectCardComponent, ContactCtaComponent],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class HomePage {
  protected readonly projects = featuredProjects;

  // Alternate split / split-reverse layouts down the page (matches legacy).
  protected variantFor(index: number): ProjectCardVariant {
    return index % 2 === 0 ? "split" : "split-reverse";
  }
}
