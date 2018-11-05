import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Instructor} from '../model/instructor';
import {Session} from '../model/session';
import * as http from 'http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getInstructorList(): Observable<Instructor[]> {
    return Observable.create(observer => {
      this.http.get('/api/instructors')
        .subscribe( response => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  getOpenSession(instructorId: Number): Observable<Session[]>{
    return Observable.create(observer => {
      const url = `/api/sessions/openSession?instructId=${instructorId}`;
      this.http.get(url)
        .subscribe( res => {
          observer.next(res);
          observer.complete();
        });
    });
  }

//  :TODO
//  write function assign member to session
//  call to '/api/sessions/assignMember? params ..
//
  assignMemberToSession(memberId: Number, SessionId: Number){
  //  const url = ???
  //  this.http.
  }
}
