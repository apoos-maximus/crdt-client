import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value : String;

  @Output () 
  value_out: EventEmitter<String> = new EventEmitter<String> ();
  
  onClickHandler = function () {
    console.log(this.value + " is value !");
    this.value_out.emit(this.value);
  }
  constructor () {
  }

  ngOnInit(): void {
    this.value = "login-info-here !";
  }

}
