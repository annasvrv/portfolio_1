import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./core/layout/header/header";
import { FooterComponent } from "./core/layout/footer/footer";
import { ThemeService } from "./core/theme/theme.service";

@Component({
  selector: "hrb-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  private readonly theme = inject(ThemeService);

  protected readonly watermarkSrc = computed(() =>
    this.theme.mode() === "dark"
      ? "/watermarks/sailboat-cream-18.png"
      : "/watermarks/sailboat-ink-12.png",
  );
}
