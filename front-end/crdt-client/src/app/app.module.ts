import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PlaneComponent } from './plane/plane.component';
import { FormsModule } from '@angular/forms';
import { CoreParentComponent } from './core-parent/core-parent.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { SessionService } from './session.service';

const routes: Routes = [
  {path:'', redirectTo : 'login', pathMatch: 'full'},  
  {path:'login', component:LoginComponent},
  {path:'editor', component:EditorComponent},
  {path: '**', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponent,
    LoginComponent,
    CoreParentComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
