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

  
  createPR(pointrelai: PointRelai) : Observable<any>{
    let body = JSON.stringify(pointrelai);
    alert(pointrelai);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(API_URL, body, {headers}).pipe( catchError(this.handleError));
  }

  private handleError(error : Response | any) {
    return Observable.throw(error);
  }
 
}
