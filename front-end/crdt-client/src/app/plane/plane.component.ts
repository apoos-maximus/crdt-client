import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }

}