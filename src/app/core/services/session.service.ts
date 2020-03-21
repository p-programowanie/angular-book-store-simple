import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from './../models/session.model';

@Injectable()
export class SessionService {
  private sessionDataSubject = new BehaviorSubject<Partial<Session>>({});

  get sessionData$() {
    return this.sessionDataSubject.asObservable();
  }

  setSessionData(value: Partial<Session>) {
    this.sessionDataSubject.next(value);
  }
}
