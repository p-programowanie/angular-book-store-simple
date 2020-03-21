import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { SessionService } from './session.service';

@Injectable()
export class AuthorizationService {
  private jwt!: string;
  private refreshJwt!: string;
  private isAuthorizedSubject = new BehaviorSubject<boolean>(false);

  constructor(private sessionService: SessionService) { }

  get token() {
    return this.jwt;
  }

  get isAuthorized$() {
    return this.isAuthorizedSubject.asObservable();
  }

  login(credentials: { login: string; password: string }) {
    return of(null).pipe(
      delay(1500),
      tap(_ => {
        this.isAuthorizedSubject.next(true);
        this.jwt = `ey123456`;
        this.refreshJwt = `ey123456`;
        this.sessionService.setSessionData({
          user: {
            id: 1,
            name: `john`,
            email: `jogn@blue.com`
          }
        });
      }),
      map(_ => true)
    );
  }

  refreshToken() {
    return of(null).pipe(
      delay(1500),
      tap(_ => {
        this.jwt = `ey123456_new`;
        this.refreshJwt = `ey123456_new`;
      }),
      map(_ => true)
    );
  }

  addAuthorizeHeader(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.jwt}`
      }
    });
  }
}
