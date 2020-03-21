import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, pipe, throwError, UnaryFunction } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from '../models/app-config.model';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private readonly httpForbiddenStatus = 403;

  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private authorizationService: AuthorizationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.appConfig.apiPath)) {
      req = this.authorizationService.addAuthorizeHeader(req);
      return next.handle(req).pipe(
        this.refreshJwtOnForbidden$(req, next)
      );
    }
    return next.handle(req);
  }

  private refreshJwtOnForbidden$ =
    (req: HttpRequest<any>, next: HttpHandler) =>
      pipe<Observable<HttpEvent<any>>, Observable<HttpEvent<any>>>(
        catchError((error: HttpResponse<any>) => {
          if (error.status === this.httpForbiddenStatus) {
            return this.authorizationService.refreshToken().pipe(
              tap(_ => req = this.authorizationService.addAuthorizeHeader(req)),
              switchMap(_ => next.handle(req))
            );
          }
          return throwError(error);
        })
      )
}
