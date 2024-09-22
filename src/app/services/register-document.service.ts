import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Document} from '../model/document'

@Injectable({
  providedIn: 'root'
})
export class RegisterDocumentService {

  constructor(private http: HttpClient) { }

  // postDocument(document:any):Observable<any>{
  //   console.log(document);
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post<any>('https://localhost:44384/api/logintogetaccesstoken', document,{headers})
  // }

  postDocument(document:Document):Observable<Document>{
    console.log(document);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Document>('http://192.168.10.92/odms/api/InsertDocumentRegistration', document);
  }
}
