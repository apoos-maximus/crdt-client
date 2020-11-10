import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value : String;

  constructor (private sessionService : SessionService) {
  }

  onClickHandler = function () {
    console.log(this.value + " is value !");
    this.sessionService.sendMessage(this.value);
  }
  
  ngOnInit(): void {
    this.value = "login-info-here !";
  }

}
