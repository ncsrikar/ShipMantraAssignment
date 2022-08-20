import { TestBed } from '@angular/core/testing';

import { GetCostDataService } from './get-cost-data.service';

describe('GetCostDataService', () => {
  let service: GetCostDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCostDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
