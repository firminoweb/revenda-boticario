import { TestBed, inject } from '@angular/core/testing';

import { CashbackService } from './cashback.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashbackService]
    });
  });

  it('should be created', inject([CashbackService], (service: CashbackService) => {
    expect(service).toBeTruthy();
  }));
});
