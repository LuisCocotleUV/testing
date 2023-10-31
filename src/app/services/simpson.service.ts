import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SimpsonService {
  private readonly _test1 = 'https://node-express-service-luiscocotleuv.cloud.okteto.net/simpson_test1';
  private readonly _test2 = 'https://node-express-service-luiscocotleuv.cloud.okteto.net/simpson_test2';
  private readonly _test3 = 'https://node-express-service-luiscocotleuv.cloud.okteto.net/simpson_test3';

  constructor(private http: HttpClient) {}

  getTest1(): Observable<{x0: number, x1: number, num_seg: number, ERROR: number, f_x: string}> {
    return this.http.get<{x0: number, x1: number, num_seg: number, ERROR: number, f_x: string}>(this._test1);
  }

  getTest2(): Observable<{x0: number, x1: number, num_seg: number, ERROR: number, f_x: string}> {
    return this.http.get<{x0: number, x1: number, num_seg: number, ERROR: number, f_x: string}>(this._test2);
  }

  getTest3(): Observable<{x0: number, x1: number, num_seg: number, ERROR: number, f_x: string}> {
    return this.http.get<{x0: number, x1: number, num_seg: number, ERROR: number, f_x: string}>(this._test3);
  }
}
