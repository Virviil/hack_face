import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RightTabComponent } from './right-tab.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        // RouterModule.forChild([{path: '', component: RightTabComponent}])
    ],
    declarations: [RightTabComponent],
    exports: [RightTabComponent]
})
export class RightTabComponentModule {
}
