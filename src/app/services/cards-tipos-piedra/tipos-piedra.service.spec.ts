import { TestBed } from '@angular/core/testing';

import { TiposPiedraService } from './tipos-piedra.service';

describe('TiposPiedraService', () => {
  let service: TiposPiedraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposPiedraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
