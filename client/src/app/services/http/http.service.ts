import { url } from './../consts/allConsts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public http:HttpClient) { }

  serachBooks(searchtext:string):Observable<any>{
    return this.http.get(url + searchtext).pipe(catchError(e => {
      alert(e.status + ' error please try again or refresh this page');
      return e.status
       }
    ));
  }
  
}
