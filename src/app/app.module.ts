import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MembersComponent } from './components/members/members.component';
import {HttpClientModule} from '@angular/common/http';
import { SessionsComponent } from './components/sessions/sessions.component';
import {AppRouterModule} from './modules/app-router/app-router.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { CurrentSessionsComponent } from './components/current-sessions/current-sessions.component';
import { CancelSessionComponent } from './components/cancel-session/cancel-session.component';
import { InstructorSessionsComponent } from './components/instructor-sessions/instructor-sessions.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import {RestApiService} from './services/rest-api.service';



@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    SessionsComponent,
    HomeComponent,
    NavbarComponent,
    InstructorsComponent,
    CurrentSessionsComponent,
    CancelSessionComponent,
    InstructorSessionsComponent,
    InstructorComponent,
  ],
  imports: [  // use this to import other modules
    BrowserModule,
    HttpClientModule,
    AppRouterModule
  ],
 // declarations: [],  //use this to import components, directives and pipes not assigned to another module
  providers: [
    RestApiService
  ],  // an instruction to the DI system on how to obtain a value for a dependency.
  // Most of the time, these dependencies are services that you create and provide.
  bootstrap: [AppComponent]  // entry point fot app code or root
})
export class AppModule { }
