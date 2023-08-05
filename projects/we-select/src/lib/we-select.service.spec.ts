import { TestBed } from '@angular/core/testing';

import { WeSelectService } from './we-select.service';

describe('WeSelectService', () => {
  let service: WeSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
