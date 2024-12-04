import { TestBed } from '@angular/core/testing';

import { FetchdirService } from './fetchdir.service';

describe('FetchdirService', () => {
  let service: FetchdirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchdirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
