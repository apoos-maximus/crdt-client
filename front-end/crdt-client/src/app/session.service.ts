import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  syncBackend = "http://localhost:8080/crdt-client";
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };
  
  private _loginMessageSource = new Subject<String>();
  loginMessage$ = this._loginMessageSource.asObservable();

  constructor(private http : HttpClient) {
  }
  
  sendMessage(message: String ) {
    this._loginMessageSource.next(message);
    return this.http.post<String>(this.syncBackend + '/login' , { "name": message } , this.options);

  }
  getSessionID() {
    return "lol-123-lol-123 !";
  }
}
