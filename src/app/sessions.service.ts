
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {promise} from 'selenium-webdriver';
import {Member} from './model/member';
import {Session} from './model/session';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private httpClient: HttpClient) { }
  getSessions() {
    return new Promise<Session[]>(resolver =>  this.httpClient.get('/api/sessions')
      .subscribe((data: Session[]) => {
        return resolver(data);
      }));
  }
}
