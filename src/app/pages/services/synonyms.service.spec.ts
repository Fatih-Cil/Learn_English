import { TestBed } from '@angular/core/testing';

import { SynonymsService } from './synonyms.service';

describe('SynonymsService', () => {
  let service: SynonymsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynonymsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
