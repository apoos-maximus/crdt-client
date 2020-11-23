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
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };
  
  constructor(private http : HttpClient) { }

  public getContents() {
    const httpHeaders = new HttpHeaders();
    return this.http.get<UserContent>(this.syncBackend + '/content', {headers : httpHeaders});
  }

  public setContents(resource) {
    console.log("called");
    return this.http.post<UserContent>(this.syncBackend + '/content', resource, this.options);  
  }

}