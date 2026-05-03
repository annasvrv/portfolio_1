import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { SkillIconComponent } from "../../shared/skill-icon/skill-icon";
import { CertificateCardComponent } from "../../shared/certificate-card/certificate-card";
import { CertificateCarouselComponent } from "../../shared/certificate-carousel/certificate-carousel";
import { ContactCtaComponent } from "../../shared/contact-cta/contact-cta";
import { skills } from "../../data/skills.data";
import { certificates } from "../../data/certificates.data";

@Component({
  selector: "hrb-about-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    SkillIconComponent,
    CertificateCardComponent,
    CertificateCarouselComponent,
    ContactCtaComponent,
  ],
  templateUrl: "./about.html",
  styleUrl: "./about.scss",
})
export class AboutPage {
  protected readonly skills = skills;
  protected readonly certificates = certificates;

  protected readonly personalLife = [
    "An Amateur Swimmer and Runner: I find solace in the water and strength on the track, which parallels my problem-solving approach, determination and discipline.",
    "A Stargazer: I'm fascinated by the mysteries of the universe, and stargazing fuels my curiosity and creativity.",
    "A Travel Enthusiast: One of my greatest joys is traveling with my family, exploring new landscapes and cultures.",
    "An Avid Reader: Books are a never-ending source of knowledge and inspiration for me, driving my thirst for learning.",
    "A Lifelong Learner: I'm constantly seeking opportunities to acquire new skills and broaden my expertise.",
  ];
}
