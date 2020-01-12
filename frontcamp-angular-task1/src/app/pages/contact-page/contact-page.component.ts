import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  public type: string;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    const data = (this.route.data as BehaviorSubject<{type: string}>).getValue();

    if (data) {
        this.type = data.type;
    }
  }
}
