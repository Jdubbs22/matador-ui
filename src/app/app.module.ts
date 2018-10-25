import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MembersComponent } from './components/members/members.component';
import {HttpClientModule} from '@angular/common/http';
import { SessionsComponent } from './sessions/sessions.component';



@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    SessionsComponent,
  ],
  imports: [  // use this to import other modules
    BrowserModule,
    HttpClientModule
  ],
 // declarations: [],  //use this to import components, directives and pipes not assigned to another module
  providers: [],  // an instruction to the DI system on how to obtain a value for a dependency.
  // Most of the time, these dependencies are services that you create and provide.
  bootstrap: [AppComponent]  // entry point fot app code or root
})
export class AppModule { }
