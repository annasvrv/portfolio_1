import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { Skill } from "../../data/skills.data";

@Component({
  selector: "hrb-skill-icon",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./skill-icon.html",
  styleUrl: "./skill-icon.scss",
})
export class SkillIconComponent {
  readonly skill = input.required<Skill>();
}
