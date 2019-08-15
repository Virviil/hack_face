import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimelineTabPage } from './timeline-tab.page';
import { TimelineComponentModule } from "../../components/timeline/timeline.module";

@NgModule({
  imports: [
    IonicModule,
    TimelineComponentModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TimelineTabPage }])
  ],
  declarations: [TimelineTabPage]
})
export class TimelineTabModule {}
