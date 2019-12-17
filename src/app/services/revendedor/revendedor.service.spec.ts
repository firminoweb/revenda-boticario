import { TestBed } from '@angular/core/testing';

import { RevendedorService } from './revendedor.service';

describe('RevendedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevendedorService = TestBed.get(RevendedorService);
    expect(service).toBeTruthy();
  });
});
