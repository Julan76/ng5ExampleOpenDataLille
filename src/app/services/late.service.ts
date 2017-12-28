import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class LateService {
  private lateUrl="https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=indices-mensuels-de-retard-des-bus&facet=mois";

  constructor( private http: HttpClient) { }

  getLateData():Observable<Object> {
    return this.http.get(this.lateUrl)
      .pipe(
        catchError(this.handleError('Late not working', []))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
