  import { Component } from '@angular/core';
  import { from } from 'rxjs';
  import { PlaneComponent } from './plane/plane.component';
  import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crdt-client';
  pln : any;
  logn : any;
}
