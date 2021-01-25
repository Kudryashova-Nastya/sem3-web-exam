import { TestBed } from '@angular/core/testing';

import { HttpPurchasesService } from './http-purchases.service';

describe('HttpPurchasesService', () => {
  let service: HttpPurchasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPurchasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
