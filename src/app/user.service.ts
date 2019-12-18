import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../app/event'
import { User } from './user';
import { Register } from './register';
import { Feedback } from './feedback';

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
  postEvent(register: Object): Observable<Object> {
    return this._http.post(`${this.serviceUrl}` + `/createEventRegistration`, register);
  }

//user registration
  userUrl='http://localhost:8080/user/';
  postUser(event: Object): Observable<Object> {
    return this._http.post(`${this.userUrl}` + `/createUser`, event);
  }
     
  //get listofusers
  listUrl='http://localhost:8080/user/getAll';
  getUser():Observable<User[]> {
     return this._http.get<User[]>(this.listUrl);
  }
  
  //get listofevents
  eventUrl='http://localhost:8080/event/getAll';
  getEvent(): Observable<Event[]> {
     return this._http.get<Event []> (this.eventUrl);
  }

   //get event title
   titleUrl='http://localhost:8080/attendance/event/getAll';
   getEventTitle(): Observable<Event[]> {
      return this._http.get<Event []> (this.titleUrl);
   }

   //get eventRegistration by eventid
   eventidUrl='http://localhost:8080/attendance/getAll';
   getByEventId(): Observable<Register[]> {
      return this._http.get<Register[]> (this.eventidUrl);
   }
   //update attendance
   attendUrl='http://localhost:8080/createAttendance';
   updateAttendance(id: number, value: any): Observable<Object> {
    return this._http.put(`${this.attendUrl}/${id}`, value);
  }
   //  post feedback
  feedbackUrl='http://localhost:8080/eventFeedback';
  postFeedback(feedback: Object): Observable<Object> {
    return this._http.post(`${this.feedbackUrl}` + `/createEventFeedback`, feedback);
  }
   
  //get feedback by eventid
  getfeedbackUrl='http://localhost:8080/EventFeedback/getAll';
  getFeedback(): Observable<Feedback[]> {
    return this._http.get<Feedback[]> (this.getfeedbackUrl);
  }

 
}
