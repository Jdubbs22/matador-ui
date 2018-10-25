import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {promise} from 'selenium-webdriver';
import {Member} from './components/members/member';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private httpClient: HttpClient) { }
  getSessions() {
    return new Promise<Sessions[]>(resolver =>  this.httpClient.get('/api/sessions')
      .subscribe((data: Sessions[]) => {
        return resolver(data);
      }));
  }
}
