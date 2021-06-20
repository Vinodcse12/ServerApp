import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent {

  @Input() message!: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
