import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
  styleUrls: ['./right-tab.component.scss'],
})
export class RightTabComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {}

}
