import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MembersComponent} from '../../components/members/members.component';
import {SessionsComponent} from '../../components/sessions/sessions.component';
import {AppComponent} from '../../app.component';
import {HomeComponent} from '../../components/home/home.component';
import {InstructorsComponent} from '../../components/instructors/instructors.component';
import {CurrentSessionsComponent} from '../../components/current-sessions/current-sessions.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'members', component: MembersComponent},
  {path: 'sessions', component: SessionsComponent},
  {path: 'instructors', component: InstructorsComponent},
  {path: 'currentSessions', component: CurrentSessionsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule {
}
