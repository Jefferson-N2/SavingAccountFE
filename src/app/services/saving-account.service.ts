import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SavingAccountService {
  API_URL: string = environment.API_URL;
  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string, params = new HttpParams()): Observable<any> {
    debugger
    url = this.API_URL + url;

    return this.httpClient.get(url, { params });

  }


  post(url: string, data?: any, params = new HttpParams()) {
    url = this.API_URL + url;
    return this.httpClient.post(url, data, { params });
  }

  put(url: string, data?: any, params = new HttpParams()) {
    url = this.API_URL + url;
    return this.httpClient.put(url, data, { params });
  }

  delete(url: string, params = new HttpParams()) {
    url = this.API_URL + url;
    return this.httpClient.delete(url, { params });
  }
}
