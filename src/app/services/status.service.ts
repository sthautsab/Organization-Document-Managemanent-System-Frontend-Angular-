import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MainView} from '../model/mainView';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { DocumentStatus } from '../model/DocumentStatusInEveryDepartment';
import { UpdateStatus } from '../model/updateStatus';
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http:HttpClient) { }

  getMainView(): Observable<{ searchedDocument: MainView[] }>{
    const params = new HttpParams().set('DartaNo', '')
    .set('DocumentTitle', '')
    .set('Organization','')
    .set('StateName', '')
    .set('District','')
    .set('VDCName','')
    .set('Status','')
    return this.http.get<{searchedDocument :MainView[]}>(environment.apiUrl+"/mainViewWithDocumentSearch",{params: params})
  }

  getDocumentStatusForAllDepartmentByDocumentId(id: number):Observable<{documentStatus: DocumentStatus}>{
    const param = new HttpParams().set('documentId', id)
    return this.http.get<{documentStatus: DocumentStatus}>(environment.apiUrl +"/getDocumentStatusForAllDeparmentsByDocumentId", {params:param})
  }

  updateStatus(status: UpdateStatus):Observable<UpdateStatus> {
    return this.http.post<UpdateStatus>(environment.apiUrl+"/updateDcumentStatusForDepartment", status);
  }
}
