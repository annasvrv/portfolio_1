import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { LogoComponent } from "../../shared/logo/logo";
import { ViewportService } from "../../core/viewport/viewport.service";

interface Value {
  readonly title: string;
  readonly body: string;
}

@Component({
  selector: "hrb-about-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent],
  templateUrl: "./about.html",
  styleUrl: "./about.scss",
})
export class AboutPage {
  protected readonly viewport = inject(ViewportService);

  protected readonly values: readonly Value[] = [
    { title: "Honesty.",  body: "In code, in feedback, in scope." },
    { title: "Calm.",     body: "Considered motion, breathable spacing, kind defaults." },
    { title: "Patience.", body: "Long runs and long reads work the same muscle." },
  ];
}
