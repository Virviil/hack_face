import { TestBed } from '@angular/core/testing';

import { CurrentStatusTabResolver } from './current-status-tab.resolver';

describe('CurrentStatusTabResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentStatusTabResolver = TestBed.get(CurrentStatusTabResolver);
    expect(service).toBeTruthy();
  });
});
