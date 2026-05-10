import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  education,
  experience,
  interests,
  languages,
  profile,
  skills,
} from "../../data/cv.data";

@Component({
  selector: "hrb-cv-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: "./cv.html",
  styleUrl: "./cv.scss",
})
export class CvPage {
  protected readonly profile = profile;
  protected readonly skills = skills;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly languages = languages;
  protected readonly interests = interests;
}
