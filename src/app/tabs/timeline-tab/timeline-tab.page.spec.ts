import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimelineTabPage } from './timeline-tab.page';

describe('TimelineTabPage', () => {
  let component: TimelineTabPage;
  let fixture: ComponentFixture<TimelineTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
