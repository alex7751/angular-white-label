import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import _each from 'lodash/fp/each'

@Injectable()
export class RequestService {

  private host: string = 'http://test.test.com/api';
  private apiKey: string;

  private headers: HttpHeaders = new HttpHeaders();
  private params: HttpParams = new HttpParams();

  private baseHeaders: Object = {
    test1: '123',
    test2: 'abc'
  };

  private baseParams: Object = {
    test1: '123',
    test2: 'abc'
  };

  constructor(public http: HttpClient) {
    _each((v, k) => this.params.set(k, v))(this.baseParams);
    _each((v, k) => this.headers.set(k, v))(this.baseHeaders);
  }

  get(endpoint: string, headers = {}, params={}) {

    const options = {
      headers: {},
      params: {}
    }
    return this.http.get(this.host + endpoint, options)
  }
  post() { }
  put() { }
  delete() { }

}
