import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CorrelationService } from './correlation.service';

describe('CorrelationService', () => {
  let service: CorrelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // Agrega esta línea
    });
    service = TestBed.inject(CorrelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
