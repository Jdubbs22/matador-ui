import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../sessions.service';

class Sessions {
}

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  constructor(private  sessionsService: SessionsService) { }
  sessions: Sessions[] = [];
  ngOnInit() {
  }

}
