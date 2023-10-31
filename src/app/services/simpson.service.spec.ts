import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SimpsonService } from './simpson.service';

describe('SimpsonService', () => {
  let service: SimpsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // Agrega esta línea
    });
    service = TestBed.inject(SimpsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});