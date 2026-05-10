import { ChangeDetectionStrategy, Component } from "@angular/core";

import { WaveUnderlineComponent } from "../../shared/wave-underline/wave-underline";

interface ContactRow {
  readonly key: string;
  readonly value: string;
  readonly href: string;
  readonly external?: boolean;
}

@Component({
  selector: "hrb-contact-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WaveUnderlineComponent],
  templateUrl: "./contact.html",
  styleUrl: "./contact.scss",
})
export class ContactPage {
  protected readonly email = "anna.svrva@gmail.com";

  protected readonly elsewhere: readonly ContactRow[] = [
    { key: "LinkedIn", value: "/in/anna-svrv", href: "https://www.linkedin.com/in/anna-svrv/", external: true },
    { key: "GitHub",   value: "@annasvrv",     href: "https://github.com/annasvrv",            external: true },
    { key: "Telegram", value: "@anna_svrv",    href: "https://t.me/anna_svrv",                 external: true },
    { key: "CV (PDF)", value: "Download →",    href: "/anna-suvorova-cv.pdf" },
  ];
}
