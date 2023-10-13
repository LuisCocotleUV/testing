import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private readonly _devHoursUrl = 'http://localhost:8080/hours';
  private readonly _proxySizeUrl = 'http://localhost:8080/size';

  constructor(private http: HttpClient) {}

  get devHoursUrl() {
    return this._devHoursUrl;
  }

  get proxySizeUrl() {
    return this._proxySizeUrl;
  }

  getDevHours(): Observable<number[]> {
    return this.http.get<{data: number[]}>(this.devHoursUrl).pipe(
      map(response => response.data)
    );
  }

  getProxySize(): Observable<number[]> {
    return this.http.get<{data: number[]}>(this.proxySizeUrl).pipe(
      map(response => response.data)
    );
  }
}