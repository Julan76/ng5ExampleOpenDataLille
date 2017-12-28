import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/observable/of';

@Injectable()
export class TourismService {

  private tourismUrl="https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=points-de-vue-tourisme";

  constructor( private http: HttpClient) { }

  getTourismData():Observable<Object> {
    return this.http.get(this.tourismUrl)
      .pipe(
        catchError(this.handleError('Tourism not working', []))
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
