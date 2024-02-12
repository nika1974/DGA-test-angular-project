import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, finalize} from 'rxjs';
import {LoaderService} from '../services/loader.service';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {
  constructor(
    private loaderSrvc: LoaderService
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'c6b5ac88f7msh192c3d2e63a0e92p17799djsn375994122d42';
    // ghost loader ამდე შევქმენი ესეთი გლობალური ლოადერი, მაგრამ
    // შემდეგ გადავწყვიტე ეს დამეკომენტარებია და მხოლოდ ghost loader
    // გამომეყენებინა. რომ ამოაკომენტაროთ ქვევითა ორი კომენტარი
    // იმუშავებს გლობალური ლოადერი

    // this.loaderSrvc.setLoading(true, req.url);

    if (!token) {
      return next.handle(req);
    }

    const clonedRequest = req.clone({
      headers: req.headers.set('X-RapidAPI-Key', token),
    });

    return next.handle(clonedRequest)
      .pipe(
        finalize(() => {
          // this.loaderSrvc.setLoading(false, req.url);
        })
      );
  }
}
