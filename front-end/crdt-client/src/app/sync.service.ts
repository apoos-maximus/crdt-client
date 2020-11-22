import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SyncService {

  contentUrl = "https://jsonplaceholder.typicode.com/users";
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
  
  constructor(private http : HttpClient) { }

  /**
   * getContents
  : Observable  */
    private getContents() {
     return this.http.get(this.contentUrl);
  }

    public showContents(){
      const observableResponse = this.getContents();
      console.log(observableResponse);
    }

}