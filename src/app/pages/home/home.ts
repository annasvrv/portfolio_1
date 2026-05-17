import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { LogoComponent } from "../../shared/logo/logo";
import { WaveUnderlineComponent } from "../../shared/wave-underline/wave-underline";
import { featuredProjects, projects } from "../../data/projects.data";

@Component({
  selector: "hrb-home-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, LogoComponent, WaveUnderlineComponent],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class HomePage {
  protected readonly featured = featuredProjects;
  protected readonly featuredCount = featuredProjects.length;
  protected readonly totalCount = projects.length;
}
