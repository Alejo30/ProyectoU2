import { TestBed } from '@angular/core/testing';

import { AudioproService } from './audiopro.service';

describe('AudioproService', () => {
  let service: AudioproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
