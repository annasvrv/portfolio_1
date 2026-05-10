import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LogoComponent } from "../../../shared/logo/logo";

@Component({
  selector: "hrb-footer",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent],
  templateUrl: "./footer.html",
  styleUrl: "./footer.scss",
})
export class FooterComponent {
  protected readonly email = "anna.svrva@gmail.com";
  protected readonly currentYear = new Date().getFullYear();
}
