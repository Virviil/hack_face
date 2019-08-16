import { TestBed } from '@angular/core/testing';

import { DriverWizardService } from './driver-wizard.service';

describe('DriverWizardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverWizardService = TestBed.get(DriverWizardService);
    expect(service).toBeTruthy();
  });
});
