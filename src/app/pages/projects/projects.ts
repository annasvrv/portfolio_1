import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ProjectCardComponent } from "../../shared/project-card/project-card";
import { ContactCtaComponent } from "../../shared/contact-cta/contact-cta";
import { projects } from "../../data/projects.data";

@Component({
  selector: "hrb-projects-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent, ContactCtaComponent],
  templateUrl: "./projects.html",
  styleUrl: "./projects.scss",
})
export class ProjectsPage {
  protected readonly projects = projects;
}
