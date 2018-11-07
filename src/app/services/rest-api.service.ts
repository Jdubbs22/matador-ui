import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {Instructor} from '../model/instructor';
import {Session} from '../model/session';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) {
  }

  getInstructorList(): Observable<Instructor[]> {
    return Observable.create(observer => {
      this.httpClient.get('/api/instructors')
        .subscribe(response => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  getOpenSession(instructorId: Number): Observable<Session[]> {
    return Observable.create(observer => {
      const url = `/api/sessions/openSession?instructId=${instructorId}`;
      this.httpClient.get(url)
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
  }

//  :TODO
//  write function assign member to session

  assignMemberToSession(memberId: Number, sessionId: Number): Observable<Session> {
    return Observable.create(observer => {
      const url = `/api/sessions/assignMember?sessionId=${sessionId}&memberId=
      ${1}`;
      this.httpClient.get(url)
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
  }

  deleteMemberFromSession( sessionId: Number) {
    return Observable.create(observer => {
      const url = `/api/sessions/deleteMember?sessionId=${sessionId}`;
      this.httpClient.put(url, null)
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
  }

  /**
   * this function return a list of Session for given memberId
   * @param memberId
   * return Obsevable of list of Session.
   */
  getSessionsByMemberId(memberId: Number): Observable<Session[]> {
    return Observable.create(observer => {
      const url = `/api/sessions/memberSession?memberId=${memberId}`;
      this.httpClient.get(url).subscribe( function (response) {
        observer.next(response);
        observer.complete();
      });
    });
  }

}

function f(v) {
  console.log(v);
}

const g = (v => console.log(v));
