import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WelcomeWizardComponent} from './welcome-wizard.component';
import {WelcomeWizardService} from './welcome-wizard.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: WelcomeWizardComponent}])
    ],
    declarations: [
        WelcomeWizardComponent
    ],
    providers: [
        WelcomeWizardService
    ]
})
export class WelcomeWizardModule {
}
