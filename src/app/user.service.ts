import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../app/event';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private _http: HttpClient ) { }

  // event creation 
  apiUrl='http://localhost:8080/event';
  createEvent(event: Object): Observable<Object> {
    return this._http.post(`${this.apiUrl}` + `/createEvent`, event);
  }
  
//  event registration 
  serviceUrl='http://localhost:8080/eventRegistration';
  postEvent(event: Object): Observable<Object> {
    return this._http.post<Object>(`${this.serviceUrl}` + `/createEventRegistration`, event);
  }
// user registration
  userUrl='http://localhost:8080/user'
  createtUser(user: Object): Observable<Object> {
    return this._http.post<Object>(`${this.userUrl}` + `/createUser`, user);
  }
 //get listofusers
 listUrl='http://localhost:8080/user/getAll';
 getUser():Observable<User[]> {
    return this._http.get<User[]>(this.listUrl);
 }
 
 //get listofevents
 eventUrl='http://localhost:8080/event/getAll'
 getEvent(): Observable<Event[]> {
    return this._http.get<Event []> (this.eventUrl);
 }

// //  event registration 
//   srvcUrl='http://localhost:8080/eventRegistration';
//   postEvnt(event: Object): Observable<Object> {
//     return this._http.post<Object>(`${this.srvcUrl}` + `/createEventRegistration`, event);
//   }
}
