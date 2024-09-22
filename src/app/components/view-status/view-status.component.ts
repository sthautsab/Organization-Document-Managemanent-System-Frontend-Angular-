import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MainView } from 'src/app/model/mainView';
import { StatusService } from 'src/app/services/status.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {DocumentDialogComponent} from './document-dialog.component'
import { environment } from 'src/environments/environment';
import { StatusPopupComponent } from '../popups/status-popup/status-popup.component';
import { DocumentStatus } from 'src/app/model/DocumentStatusInEveryDepartment';


@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']

})
export class ViewStatusComponent implements OnInit {
  baseUrl : string = "http://192.168.1.69/odms";

  documentStatus:DocumentStatus[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['DId', 'DartaNo', 'DocumentTitle', 'Organization', 'MobileNo', 
   'StateName', 'District', 'VDCName', 'Status', 'DocumentPath', 'SupportingDocuments','ViewAction'];

  public data:MainView[] | any = [];

   seperate!:MatTableDataSource<MainView>;
 
  constructor(private status:StatusService, private dialog: MatDialog, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.getData(); 
  }

  applyFilter(event : any){
    this.seperate.filter = event.target.value.trim().toLowerCase();
    // console.log(this.seperate.filter)
  }

  getData(){
    this.status.getMainView().subscribe({
      next: (res) => {
        this.data = res.searchedDocument;
        this.seperate = new MatTableDataSource(this.data);
        this.seperate.paginator = this.paginator;
      // console.log(this.seperate)
    },
      error: () => alert("error occured while fetching table data")
    })
  }

  openDialog(documentPath : String){
    
    const path = environment.baseUrlForDocumentDialog + documentPath;
    this.dialog.open(DocumentDialogComponent, {
      data: {documentLink: path}
    });
  }

  openActivityPopup(element: MainView){
    
     const id= element.DId ;
     if(id){
    this.status.getDocumentStatusForAllDepartmentByDocumentId(id).subscribe({
      next: response => {
        // console.log(response.documentStatus);
        this.documentStatus.push(response.documentStatus) ;
        this.dialog.open(StatusPopupComponent, {
          data:{
            document: this.documentStatus
          }
        });
        this.documentStatus = [];
        this.cdr.detectChanges();
      },
      error:() => alert("error in document status fetching")
    })
  }
   
  }

}
