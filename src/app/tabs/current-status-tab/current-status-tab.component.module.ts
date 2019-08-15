import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrentStatusTabComponent } from './current-status-tab.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CurrentStatusTabComponent }])
  ],
  declarations: [CurrentStatusTabComponent]
})
export class CurrentStatusTabComponentModule {}
