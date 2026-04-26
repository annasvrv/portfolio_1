import { ChangeDetectionStrategy, Component } from "@angular/core";

import { IconComponent } from "../../icon/icon";

interface SocialLink {
  readonly href: string;
  readonly label: string;
  readonly icon: string;
}

@Component({
  selector: "hrb-footer",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: "./footer.html",
  styleUrl: "./footer.scss",
})
export class FooterComponent {
  protected readonly email = "anna.svrva@gmail.com";

  protected readonly socials: readonly SocialLink[] = [
    { href: "https://www.linkedin.com/in/anna-svrv/",   label: "LinkedIn",  icon: "linkedin"  },
    { href: "https://github.com/annasvrv",              label: "GitHub",    icon: "github"    },
    { href: "https://www.instagram.com/anna_svrv/",     label: "Instagram", icon: "instagram" },
    { href: "https://twitter.com/anna_svrv",            label: "Twitter",   icon: "twitter"   },
  ];

  protected readonly currentYear = new Date().getFullYear();
}
