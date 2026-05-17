import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LogoComponent } from '../../shared/logo/logo';
import { ViewportService } from '../../core/viewport/viewport.service';

interface Value {
  readonly title: string;
  readonly body: string;
}

@Component({
  selector: 'hrb-about-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutPage {
  protected readonly viewport = inject(ViewportService);

  protected readonly values: readonly Value[] = [
    {
      title: 'Discipline.',
      body: 'Swimming and running taught me how to keep showing up. The same muscle solves frontend problems.',
    },
    {
      title: 'Curiosity.',
      body: 'Traveling, learning, stargazing — I move toward what I don’t yet understand.',
    },
    {
      title: 'Adaptability.',
      body: 'New cities, new stacks, new teams. I get my bearings faster than I used to.',
    },
  ];
}
