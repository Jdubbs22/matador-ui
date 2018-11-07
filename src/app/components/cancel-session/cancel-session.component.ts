import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../sessions.service';
import {RestApiService} from '../../services/rest-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cancel-session',
  templateUrl: './cancel-session.component.html',
  styleUrls: ['./cancel-session.component.css']
})
export class CancelSessionComponent implements OnInit {
  constructor(private  sessionsService: SessionsService,
              private restApi: RestApiService,
              private activatedRoute: ActivatedRoute) { }

//  constructor() { }

  ngOnInit() {
  }
  cancel(sessionId: Number) {
    console.log(' I want to delete session ' + sessionId);
    this.restApi.deleteMemberFromSession(sessionId);
  }
}
