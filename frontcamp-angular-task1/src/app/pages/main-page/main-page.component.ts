import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public type: string;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    const data = (this.route.data as BehaviorSubject<{type: string}>).getValue();

    if (data) {
        this.type = data.type;
    }
  }
}
