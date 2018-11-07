import { Component, OnInit } from '@angular/core';
import {Session} from '../../model/session';
import {RestApiService} from '../../services/rest-api.service';

@Component({
  selector: 'app-current-sessions',
  templateUrl: './current-sessions.component.html',
  styleUrls: ['./current-sessions.component.css']
})
export class CurrentSessionsComponent implements OnInit {

  sessions: Session[];
  constructor(private restApi: RestApiService) { }

  ngOnInit() {
    this.updateSession();

  }

  cancel(sessionId: Number) {
    this.restApi.deleteMemberFromSession(sessionId)
      .subscribe( r => {
        this.updateSession();
      });
  }

  updateSession() {
    this.restApi.getSessionsByMemberId(1)
      .subscribe(r => this.sessions = r);
  }
}
