import { TestBed } from '@angular/core/testing';

import { NgxUtilCoreService } from './ngx-util-core.service';

describe('NgxUtilCoreService', () => {
  let service: NgxUtilCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUtilCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
