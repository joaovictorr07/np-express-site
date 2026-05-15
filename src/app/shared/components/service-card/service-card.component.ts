import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly index = input(1);

  protected readonly indexLabel = computed(() => String(this.index()).padStart(2, '0'));
}
