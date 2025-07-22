import { TestBed } from '@angular/core/testing';

import { ZonasService } from './zonas.service.js';

describe('ZonasServiceTs', () => {
  let service: ZonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
