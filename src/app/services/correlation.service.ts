import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CorrelationService {
  private readonly _test1 = 'https://node-express-service-luiscocotleuv.cloud.okteto.net/test1';
  private readonly _test2 = 'https://node-express-service-luiscocotleuv.cloud.okteto.net/test2';
  private readonly _test3 = 'https://node-express-service-luiscocotleuv.cloud.okteto.net/test3';
  private readonly _test4 = 'https://node-express-service-luiscocotleuv.cloud.okteto.net/test4';

  constructor(private http: HttpClient) {}

  getTest1(): Observable<{proxy_size: number[], actual_added: number[]}> {
    return this.http.get<{proxy_size: number[], actual_added: number[]}>(this._test1);
  }

  getTest2(): Observable<{proxy_size: number[], actual_added: number[]}> {
    return this.http.get<{proxy_size: number[], actual_added: number[]}>(this._test2);
  }

  getTest3(): Observable<{proxy_size: number[], actual_added: number[]}> {
    return this.http.get<{proxy_size: number[], actual_added: number[]}>(this._test3);
  }

  getTest4(): Observable<{proxy_size: number[], actual_added: number[]}> {
    return this.http.get<{proxy_size: number[], actual_added: number[]}>(this._test4);
  }
}