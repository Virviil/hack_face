import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs-routing.module';

import {TabsComponent} from './tabs.component';
import {CurrentStatusTabResolver} from './current-status-tab/current-status-tab.resolver';
import {RightTabResolver} from './right-tab/right-tab.resolver';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule
    ],
    declarations: [TabsComponent],
    providers: [
        CurrentStatusTabResolver,
        RightTabResolver
    ]
})
export class TabsModule {
}
