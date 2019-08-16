import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CurrentStatusTabComponent} from './current-status-tab.component';
import {SuggestionsModalComponent} from './suggestions-modal/suggestions-modal.component';
import { RightTabComponentModule } from '../right-tab/right-tab-component.module';
import { RightTabComponent } from '../right-tab/right-tab.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RightTabComponentModule,
        RouterModule.forChild([{path: '', component: CurrentStatusTabComponent}])
    ],
    declarations: [CurrentStatusTabComponent, SuggestionsModalComponent],
    entryComponents: [SuggestionsModalComponent, RightTabComponent]
})
export class CurrentStatusTabComponentModule {
}
