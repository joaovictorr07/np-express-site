import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-visual',
  standalone: true,
  templateUrl: './hero-visual.component.html',
  styleUrl: './hero-visual.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroVisualComponent {}
