import { Injectable, TemplateRef } from '@angular/core';
import { PointRelai } from './model/pointrelai';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
  
const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
  })
export class PointRelaisService {

  constructor(private http: HttpClient) {}


  getPRS(): Observable<PointRelai[]>{
    const headers = new HttpHeaders().set("Content-Type", "applcation/json");
    console.log(PointRelai);
    return this.http.get<PointRelai[]>(API_URL,{headers}).pipe( catchError(this.handleError));
  }

  getPRbyId(prId : string) : Observable<PointRelai> {
    const headers = new HttpHeaders().set("Content-Type", "applcation/json");
    return this.http.get<PointRelai>(API_URL + prId, {headers})
    .pipe(catchError(this.handleError));
  }
  
  getPR(id: string): Observable<PointRelai>{

    const url = `${API_URL}/${id}`; 
    return this.http.get<PointRelai>(url).pipe(
      tap(_=> this.log(`fetched pointRelai id = ${id}`)),
      catchError(this.handleErrorBis<PointRelai>(`get point relai id=${id}`))
    );

  }
  
  createPR(pointrelai: PointRelai) : Observable<any>{
    let body = JSON.stringify(pointrelai);
    alert(pointrelai);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(API_URL, body, {headers}).pipe( catchError(this.handleError));
  }

  private handleError(error : Response | any) {
    return Observable.throw(error);
  }

  searchPointRelais(term: string): Observable<PointRelai[]>{
    if(!term.trim()){
      return of([])
    }
    return this.http.get<PointRelai[]>(`${API_URL}/?name=${term}`).pipe(
      tap(_=> this.log(`found pokemons matching ${term}`)),
      catchError(this.handleErrorBis<PointRelai[]>(`search Point Relais`, []))
    );
  }
 
  private log(log:string){
    console.log(log)
  }

  handleErrorBis<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } 
}
