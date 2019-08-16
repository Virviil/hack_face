import { TestBed } from '@angular/core/testing';

import { RightTabResolver } from './right-tab.resolver';

describe('RightTabResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightTabResolver = TestBed.get(RightTabResolver);
    expect(service).toBeTruthy();
  });
});
