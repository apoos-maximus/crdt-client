import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  private _loginMessageSource = new Subject<String>();
  loginMessage$ = this._loginMessageSource.asObservable();

  constructor() {
  }
  
  sendMessage(message: String ) {
    this._loginMessageSource.next(message);
  }
  getSessionID() {
    return "lol-123-lol-123 !";
  }
}
