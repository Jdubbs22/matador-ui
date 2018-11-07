import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../sessions.service';
import {RestApiService} from '../../services/rest-api.service';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {Member} from '../../model/member';

class Sessions {
}

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  constructor(private  sessionsService: SessionsService,
              private restApi: RestApiService,
              private activatedRoute: ActivatedRoute) { }
  sessions: Sessions[] = [];

  ngOnInit() {
    this.updateSession();
  }

  reserve(sessionId: Number) {
    console.log(' I want to reseve session ' + sessionId);
   //  this.restApi.callAssign Member to Session
  //  memberId = 1
     this.restApi.assignMemberToSession(1, sessionId)
       .subscribe(res => {
         console.log(res);
         this.updateSession();
       });
  }


  updateSession() {
    const instrId = this.activatedRoute.snapshot.queryParams['instructorId'];
    this.restApi.getOpenSession(instrId)
      .subscribe( data => {
        this.sessions = data;
      });
  }
}
