import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'timeline-tab.component.html',
  styleUrls: ['timeline-tab.component.scss']
})
export class TimelineTabComponent {

  constructor(public activatedRoute: ActivatedRoute) {}

}
