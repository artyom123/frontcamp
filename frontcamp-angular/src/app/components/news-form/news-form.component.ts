import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-news-form',
    templateUrl: './news-form.component.html',
    styleUrls: ['./news-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFormComponent {
  public radioButtonValue: boolean = false;
  public image: string;
  constructor(private location: Location) {}

  public save(): void {
    console.log('Save news');
    setTimeout(() => {
      this.location.back();
    }, 1000);
  }

  public cancel() {
    this.location.back();
  }

  public click({ target: { value } }): void {
    this.radioButtonValue = value === "file" ? true : false;
    console.log(this.radioButtonValue);
  }

  public change({ target: { value } }): void {
    this.image = value;

    console.log(value);
  }
}
