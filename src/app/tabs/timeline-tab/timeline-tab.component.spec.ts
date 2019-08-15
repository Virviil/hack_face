import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimelineTabComponent } from './timeline-tab.component';

describe('TimelineTabPage', () => {
  let component: TimelineTabComponent;
  let fixture: ComponentFixture<TimelineTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineTabComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
