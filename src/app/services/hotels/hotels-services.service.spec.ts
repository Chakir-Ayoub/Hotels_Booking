import { TestBed } from '@angular/core/testing';

import { HotelsServicesService } from './hotels-services.service';

describe('HotelsServicesService', () => {
  let service: HotelsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
