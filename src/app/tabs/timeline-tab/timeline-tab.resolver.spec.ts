import { TestBed } from '@angular/core/testing';

import { TimelineTabResolver } from './timeline-tab.resolver';

describe('TimelineTabResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelineTabResolver = TestBed.get(TimelineTabResolver);
    expect(service).toBeTruthy();
  });
});
