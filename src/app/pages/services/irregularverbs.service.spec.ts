import { TestBed } from '@angular/core/testing';

import { IrregularverbsService } from './irregularverbs.service';

describe('IrregularverbsService', () => {
  let service: IrregularverbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrregularverbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
