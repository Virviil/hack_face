import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'timeline-tab.page.html',
  styleUrls: ['timeline-tab.page.scss']
})
export class TimelineTabPage {
  items = [
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { subtitle: '4/16/2013', title: '21:30' }
    },
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { subtitle: 'January', title: '29' }
    },
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { title: 'Short Text' }
    }
  ];

  constructor() {}

}
