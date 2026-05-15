import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-trust-badge',
  standalone: true,
  templateUrl: './trust-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrustBadgeComponent {
  readonly label = input.required<string>();
}
