import { TestBed, inject } from '@angular/core/testing';

import { WorkforceService } from './workforce.service';

describe('WorkforceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkforceService]
    });
  });

  it('should be created', inject([WorkforceService], (service: WorkforceService) => {
    expect(service).toBeTruthy();
  }));
});
