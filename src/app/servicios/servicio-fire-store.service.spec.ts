import { TestBed } from '@angular/core/testing';

import { ServicioFireStoreService } from './servicio-fire-store.service';

describe('ServicioFireStoreService', () => {
  let service: ServicioFireStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFireStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
