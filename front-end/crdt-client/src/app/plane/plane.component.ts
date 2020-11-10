import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {
  sessionID : String ;

  setSessionId = function(event) {
    this.sessionID = event;
  }

  constructor(private sessionService : SessionService) {

  }

  ngOnInit() {
    this.sessionService.loginMessage$
      .subscribe (
        message => {
          this.sessionID = message;
        }
      )
  }

}
