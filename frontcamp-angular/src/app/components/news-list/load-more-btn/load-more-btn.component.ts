import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-load-more-btn',
    templateUrl: './load-more-btn.component.html',
    styleUrls: ['./load-more-btn.component.scss']
})
export class LoadMoreBtnComponent {
    @Input() public isDisabled: boolean;
    @Output() public loading = new EventEmitter<boolean>();

    public loadItems(): void {
        this.loading.emit(true);
    }
}
