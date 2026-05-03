import { ChangeDetectionStrategy, Component } from "@angular/core";

import { IconComponent } from "../../core/icon/icon";
import {
  education,
  languages,
  profile,
  timeline,
} from "../../data/cv.data";

@Component({
  selector: "hrb-cv-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: "./cv.html",
  styleUrl: "./cv.scss",
})
export class CvPage {
  protected readonly profile = profile;
  protected readonly timeline = timeline;
  protected readonly languages = languages;
  protected readonly education = education;
}
