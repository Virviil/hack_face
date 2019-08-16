import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, PopoverController} from '@ionic/angular';
import {SuggestionsModalComponent} from './suggestions-modal/suggestions-modal.component';
import { RightTabComponentModule } from '../right-tab/right-tab-component.module';
import { RightTabComponent } from '../right-tab/right-tab.component';

@Component({
    selector: 'app-current-status-tab',
    templateUrl: 'current-status-tab.component.html',
    styleUrls: ['current-status-tab.component.scss']
})
export class CurrentStatusTabComponent implements OnInit {

    constructor(public activatedRoute: ActivatedRoute,
                public popoverController: PopoverController) {
    }

    ngOnInit(): void {
        console.log(this.activatedRoute.snapshot.data);
    }

    async openSuggestionsModal() {
        console.log('asdas');
        const popover = await this.popoverController.create({
            component: SuggestionsModalComponent,
            componentProps: {
                suggestions: this.activatedRoute.snapshot.data.data.suggestions
            }
        });

        return await popover.present();
    }

    async openRigtsTab(rightName) {
        console.log('rightsName');
        const popover = await this.popoverController.create({
            component: RightTabComponent,
            componentProps: {rights: rightName}
        });

        return await popover.present();
    }
}
