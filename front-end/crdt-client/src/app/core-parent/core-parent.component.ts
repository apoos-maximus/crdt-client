import { Component, OnInit } from '@angular/core';
import { PlaneComponent } from '../plane/plane.component';
import { LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-core-parent',
  templateUrl: './core-parent.component.html',
  styleUrls: ['./core-parent.component.css']
})
export class CoreParentComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

}
