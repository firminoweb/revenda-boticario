import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashbackService {
  url: string;
  queryNotFound: string;

  constructor(public http: HttpClient) {
    this.url = 'https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1/cashback?cpf=';
  }

  getWeather(cpf): Observable<any> {
    return this.http.get(this.url + cpf).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  // Private
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
