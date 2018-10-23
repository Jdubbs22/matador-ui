import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../../components/members/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private httpClient: HttpClient) {

  }

  getMembers() {

    return new Promise<Member[]>(resolver =>  this.httpClient.get('/api/members')
      .subscribe((data) => {
        return resolver(data);
      }));
  }
}
