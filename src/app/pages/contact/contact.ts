import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

// Contact page intentionally omits ContactCta — it would be tautological here.

interface ContactLink {
  readonly heading: string;
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

@Component({
  selector: "hrb-contact-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: "./contact.html",
  styleUrl: "./contact.scss",
})
export class ContactPage {
  protected readonly contacts: readonly ContactLink[] = [
    {
      heading: "E-mail",
      label: "anna.svrva@gmail.com",
      href: "mailto:anna.svrva@gmail.com",
    },
    {
      heading: "LinkedIn",
      label: "Anna Suvorova",
      href: "https://www.linkedin.com/in/anna-svrv/",
      external: true,
    },
    {
      heading: "GitHub",
      label: "@annasvrv",
      href: "https://github.com/annasvrv",
      external: true,
    },
  ];
}
