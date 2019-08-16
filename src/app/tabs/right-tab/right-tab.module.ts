import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RightTabComponent} from './right-tab.component';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [RightTabComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: RightTabComponent}])
    ]
})
export class RightTabModule {
}
