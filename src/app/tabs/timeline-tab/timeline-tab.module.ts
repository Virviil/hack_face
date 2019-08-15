import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TimelineTabComponent} from './timeline-tab.component';
import {TimelineComponentModule} from '../../components/timeline/timeline.module';

@NgModule({
    imports: [
        IonicModule,
        TimelineComponentModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: TimelineTabComponent}])
    ],
    declarations: [TimelineTabComponent]
})
export class TimelineTabModule {
}
