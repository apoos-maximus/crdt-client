import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input () value : String;
  
  /**
   * getValue
   */
  public getValue() {
    return this.value;
  }

  onClickHandler = function () {
    console.log(this.getValue() + " is value !");
  }
  constructor () {
  }

  ngOnInit(): void {
    this.value = "login-info-here !";
  }

}
