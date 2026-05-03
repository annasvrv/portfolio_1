import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { Certificate } from "../../data/certificates.data";

@Component({
  selector: "hrb-certificate-card",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./certificate-card.html",
  styleUrl: "./certificate-card.scss",
})
export class CertificateCardComponent {
  readonly certificate = input.required<Certificate>();
  readonly loading = input<"lazy" | "eager">("lazy");
}
