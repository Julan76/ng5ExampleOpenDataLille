import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class LostService {

  private lostUrl="https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=objets-trouves-dans-les-gares-en-temps-reel&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_type_c";

  constructor( private http: HttpClient) { }

  getLostObjectData():Observable<Object> {
    return this.http.get(this.lostUrl)
      .pipe(
        catchError(this.handleError('Lost not working', []))
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
