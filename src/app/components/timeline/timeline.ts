import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html',
  styleUrls: ['timeline.scss']
})
export class TimelineComponent {
  @Input('endIcon') endIcon = 'ionic';
  constructor() { }
}

@Component({
  selector: 'timeline-item',
  templateUrl: 'timeline-item.html',
  styleUrls: ['timeline-item.scss']
})
export class TimelineItemComponent{
  constructor() { }
}
