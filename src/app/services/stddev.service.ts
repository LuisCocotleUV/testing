import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StddevService {
  private readonly _baseURL: string = 'https://node-express-service-luiscocotleuv.cloud.okteto.net';

  constructor(private http: HttpClient) {}

  get baseURL() {
    return this._baseURL;
  }

  getDevHours(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/hours`).pipe(
      map(response => response.data)
    );
  }

  getProxySize(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/size`).pipe(
      map(response => response.data)
    );
  }
}
