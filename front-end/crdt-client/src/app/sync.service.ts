import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { UserContent } from './UserContent';


@Injectable({
  providedIn: 'root'
})
export class SyncService {

  RootUrl = "https://jsonplaceholder.typicode";
  syncBackend = "http://localhost:8080/crdt-client";
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
  
  constructor(private http : HttpClient) { }

    public getContents() {
      // return this.http.get(this.RootUrl + '/users');
      const httpHeaders = new HttpHeaders( {
      });
      return this.http.get<UserContent>(this.syncBackend + '/content', {headers : httpHeaders});
  }

}