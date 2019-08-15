import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {
    TimelineComponent,
    TimelineItemComponent
} from './timeline';

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineItemComponent,
  ],
  imports: [IonicModule],
  exports: [
    TimelineComponent,
    TimelineItemComponent,
  ]
})
export class TimelineComponentModule {}
