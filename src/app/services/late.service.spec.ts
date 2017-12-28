import { TestBed, inject } from '@angular/core/testing';

import { LateService } from './late.service';

describe('LateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LateService]
    });
  });

  it('should be created', inject([LateService], (service: LateService) => {
    expect(service).toBeTruthy();
  }));
});
