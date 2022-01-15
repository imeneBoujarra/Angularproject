import { TestBed } from '@angular/core/testing';

import { FakeSessionItemService } from './fake-session-item.service';

describe('FakeSessionItemService', () => {
  let service: FakeSessionItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSessionItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
