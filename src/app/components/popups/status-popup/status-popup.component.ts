import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentStatus } from 'src/app/model/DocumentStatusInEveryDepartment';
import { UpdateStatus } from 'src/app/model/updateStatus';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-status-popup',
  templateUrl: './status-popup.component.html',
  styleUrls: ['./status-popup.component.css']
})
export class StatusPopupComponent {

  dialogRef!: MatDialogRef<any>;
  
  departmentId!: number;
  documentId!:number;
  statusId!:number;
  status!:UpdateStatus ;
  dataSource!:DocumentStatus[];
  displayedColumns: string[] = ['DocumentId', 'DepartmentID1', 'DepartmentID2', 'DepartmentID3', 'DepartmentID4'];

  constructor(@Inject(MAT_DIALOG_DATA)  public data :{document: DocumentStatus[]}, private statusService:StatusService){

    // datasource needs to be an array 
    this.dataSource = this.data.document;
  }
  
  updateDocumentStatus(department: string, element: DocumentStatus,  btnName : string){
    // console.log(department)
   
    switch(department){
      case 'DepartmentID1':{
        this.departmentId = 1;
        break;
      }
      case 'DepartmentID2':{
        this.departmentId = 2;
        break;
      }
      case 'DepartmentID3':{
        this.departmentId = 3;
        break;
      }
      case 'DepartmentID4':{
        this.departmentId = 4;
        break;
      }
      default:
        this.departmentId = 0;
        break;
    }
    //since undefined cannot be assigned to documentId
    if(element.DocumentId){
      this.documentId = element.DocumentId;
    }
if(btnName === 'Approve'){
  this.statusId = 2;
}
else if(btnName ==='Reject'){
  this.statusId = 3;
}
    this.status = {
      DepartmentId:this.departmentId,
      DId: this.documentId,
      StatusId : this.statusId
  
    }

    this.statusService.updateStatus(this.status).subscribe({
      next: res => {
        console.log(res);
        this.dialogRef.close();
      }
    })   

  }
}
