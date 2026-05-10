import { ChangeDetectionStrategy, Component, computed } from "@angular/core";

import { WaveUnderlineComponent } from "../../shared/wave-underline/wave-underline";
import { Project, projects } from "../../data/projects.data";

interface ProjectRow extends Project {
  readonly index: string;
  readonly imageReverse: boolean;
}

@Component({
  selector: "hrb-projects-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WaveUnderlineComponent],
  templateUrl: "./projects.html",
  styleUrl: "./projects.scss",
})
export class ProjectsPage {
  protected readonly rows = computed<readonly ProjectRow[]>(() =>
    projects.map((project, i) => ({
      ...project,
      index: String(i + 1).padStart(2, "0"),
      imageReverse: i % 2 !== 0,
    })),
  );
}
