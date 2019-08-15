import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-suggestions-modal',
    templateUrl: './suggestions-modal.component.html',
    styleUrls: ['./suggestions-modal.component.scss'],
})
export class SuggestionsModalComponent implements OnInit {

    @Input() suggestions: any[];

    constructor() {
    }

    ngOnInit() {
      console.log(this.suggestions)
    }

}
