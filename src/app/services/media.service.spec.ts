import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MediaService } from './media.service';

describe('MediaService', () => {
  let service: MediaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MediaService]
    });

    service = TestBed.inject(MediaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch dev hours', () => {
    const dummyData = [1, 2, 3];

    service.getDevHours().subscribe(data => {
      expect(data.length).toBe(3);
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne(service.devHoursUrl);
    expect(req.request.method).toBe('GET');
    req.flush({data: dummyData});
  });

  it('should fetch proxy size', () => {
    const dummyData = [4, 5, 6];

    service.getProxySize().subscribe(data => {
      expect(data.length).toBe(3);
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne(service.proxySizeUrl);
    expect(req.request.method).toBe('GET');
    req.flush({data: dummyData});
  });
});