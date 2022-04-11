import { TestBed } from '@angular/core/testing';

import { LocalJSONService } from './localjson.service';

describe('LocaljsonService', () => {
  let service: LocalJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
