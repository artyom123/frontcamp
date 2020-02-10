import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnChanges {
  @Input() public data: string;
  public isVisible = false;

  public ngOnChanges(): void {
    if (this.data) {
      this.isVisible = true;
      setTimeout((() => this.isVisible = false).bind(this), 1500);
    }
  }

  public setClasses(): object {
    return {
      'alert-success': !/error/gmi.test(this.data),
      'alert-danger': /error/gmi.test(this.data)
    };
  }
}
