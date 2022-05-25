import { TestBed } from '@angular/core/testing';

import { JsoncallService } from './jsoncall.service';

describe('JsoncallService', () => {
  let service: JsoncallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsoncallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
