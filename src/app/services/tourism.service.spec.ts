import { TestBed, inject } from '@angular/core/testing';

import { TourismService } from './tourism.service';

describe('TourismService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourismService]
    });
  });

  it('should be created', inject([TourismService], (service: TourismService) => {
    expect(service).toBeTruthy();
  }));
});
