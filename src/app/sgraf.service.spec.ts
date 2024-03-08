import { TestBed } from '@angular/core/testing';

import { SgrafService } from './sgraf.service';

describe('SgrafService', () => {
  let service: SgrafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SgrafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
