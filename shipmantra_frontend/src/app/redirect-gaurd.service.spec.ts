import { TestBed } from '@angular/core/testing';

import { RedirectGaurdService } from './redirect-gaurd.service';

describe('RedirectGaurdService', () => {
  let service: RedirectGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
