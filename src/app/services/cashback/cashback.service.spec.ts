import { TestBed, inject } from '@angular/core/testing';

import { CashbackService } from './cashback.service';

describe('CashbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashbackService]
    });
  });

  it('should be created', inject([CashbackService], (service: CashbackService) => {
    expect(service).toBeTruthy();
  }));
});
