import { TestBed } from '@angular/core/testing';

import { PhrasalverbsService } from './phrasalverbs.service';

describe('PhrasalverbsService', () => {
  let service: PhrasalverbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhrasalverbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
