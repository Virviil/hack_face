import { TestBed } from '@angular/core/testing';

import { WelcomeWizardService } from './welcome-wizard.service';

describe('WelcomeWizardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeWizardService = TestBed.get(WelcomeWizardService);
    expect(service).toBeTruthy();
  });
});
