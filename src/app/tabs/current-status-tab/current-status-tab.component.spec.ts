import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentStatusTabComponent } from './current-status-tab.component';

describe('Tab2Page', () => {
  let component: CurrentStatusTabComponent;
  let fixture: ComponentFixture<CurrentStatusTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentStatusTabComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentStatusTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
