import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DriverWizardComponent} from './driver-wizard.component';
import {DriverWizardService} from './driver-wizard.service';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [DriverWizardComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: DriverWizardComponent}]),
        FormsModule
    ],
    providers: [
        DriverWizardService
    ]
})
export class DriverWizardModule {
}
