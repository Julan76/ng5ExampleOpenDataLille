import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';



@Injectable()
export class WorkforceService {

  private workForceUrl="https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=datae-test&facet" +
    "=nom_de_l_etablissement&facet=type_d_etablissement&facet=secteur_d_activite&facet=domaine_de_formation&facet=date_de_la_donnee_annee";

  constructor( private http: HttpClient) { }

  getWorkforceData():Observable<Object> {
    return this.http.get(this.workForceUrl)
      .pipe(
        catchError(this.handleError('Workforce not working', []))
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
