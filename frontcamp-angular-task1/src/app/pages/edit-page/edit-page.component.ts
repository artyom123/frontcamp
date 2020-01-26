import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
    public type: string;

    constructor(private route: ActivatedRoute) {}

    public ngOnInit(): void {
        const data = (this.route.data as BehaviorSubject<{type: string}>).getValue();

        if (data) {
            this.type = data.type;
        }
    }
}
