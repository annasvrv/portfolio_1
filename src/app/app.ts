import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./core/layout/header/header";
import { FooterComponent } from "./core/layout/footer/footer";

@Component({
  selector: "hrb-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {}
