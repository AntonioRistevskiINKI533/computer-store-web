/*
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { ContentObserver } from '@angular/cdk/observers';

@Injectable({ providedIn: 'root' })
export class IdInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor(
    private session: SessionService
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercepted");
    this.session.getAuthenticatedUserData().subscribe((data) => {
      if (data !== null) {
        request = request.clone({
          headers:
            request.headers.set('Authorization',
              'UserId ' +
              data.id)
        });
      }
    });
 
    this.requests.push(request);

    return next.handle(request);

  }
}
*/