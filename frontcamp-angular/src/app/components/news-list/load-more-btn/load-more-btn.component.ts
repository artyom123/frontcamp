import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-load-more-btn',
    templateUrl: './load-more-btn.component.html',
    styleUrls: ['./load-more-btn.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadMoreBtnComponent {
    @Input() public isDisabled: boolean;
    @Output() public loading = new EventEmitter<boolean>();

    public loadItems(): void {
        this.loading.emit(true);
    }
}
