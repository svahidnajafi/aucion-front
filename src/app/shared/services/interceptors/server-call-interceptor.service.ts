import {HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProgressBarService} from '../progress-bar.service';
import {catchError, tap} from 'rxjs/operators';
import {MessageProviderService} from '../message-provider.service';

@Injectable({
    providedIn: 'root'
})
export class ServerCallInterceptor implements HttpInterceptor {
    constructor(private progress: ProgressBarService, private message: MessageProviderService) {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        return next.handle(req).pipe(
            tap(event => {
                // console.log(event);
                if (event.type === HttpEventType.Sent) {
                    this.progress.startLoading();
                }
                
                if (event instanceof HttpResponse) {
                    console.log(event);
                    this.progress.completeLoading();
                }
            }),
            catchError(err => {
                this.progress.completeLoading();
                if (err instanceof HttpErrorResponse && err.status !== 404) {
                    this.errorHandler(err);
                    return throwError(err);
                } else {
                    return of(err);
                }
            }));
    }
    
    protected errorHandler(err: any): void {
        if (err instanceof HttpErrorResponse && err.status === 404) {
            this.message.propagate('خطایی در اتصال به سرور رخ داده است.');
        } else if (err instanceof HttpErrorResponse && err.status === 401) {
            this.message.propagate('حساب کاربری شما نیاز به احراز هویت دارد.');
        } else if (err instanceof HttpErrorResponse && err.status === 403) {
            this.message.propagate('حساب کاربری شما مجوز دسترسی به این بخش را ندارد');
        } else if (err instanceof HttpErrorResponse && err.status === 400) {
            this.message.propagate('خطای ناشناخته ای رخ داده است');
        } else {
            this.message.propagate('خطای ناشناخته ای رخ داده است');
        }
    }
}
