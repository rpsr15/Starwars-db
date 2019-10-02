import { TestBed } from '@angular/core/testing';

import { SWapiService } from './swapi.service';

describe('SWapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SWapiService = TestBed.get(SWapiService);
    expect(service).toBeTruthy();
  });
});
