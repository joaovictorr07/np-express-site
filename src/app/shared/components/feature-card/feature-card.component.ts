import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  templateUrl: './feature-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly icon = input('operation');
}
