import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcomeWizardComponent } from './welcome-wizard.component';

describe('Tab1Page', () => {
  let component: WelcomeWizardComponent;
  let fixture: ComponentFixture<WelcomeWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeWizardComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
