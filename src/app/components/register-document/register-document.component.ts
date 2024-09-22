import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Document } from '../../model/document';
import { RegisterDocumentService } from 'src/app/services/register-document.service';


@Component({
  selector: 'app-register-document',
  templateUrl: './register-document.component.html',
  styleUrls: ['./register-document.component.css'],

})
export class RegisterDocumentComponent implements OnInit {
  model : any;
  registerDocument!:FormGroup;
  document!:Document ;
  test!:Document;
  fileName!:string;
   login:any = {
    "UserName" : "utsab",
    "Password": "shrestha"
  }
  

  constructor(private fb: FormBuilder, private register:RegisterDocumentService){}
  ngOnInit(): void {
    this.registerDocument = this.fb.group({
      DId:[''],
      DocumentTitle: ['', [
        Validators.required
      ]],
      Organization:['', Validators.required],
      DartaNo:[''],
      StateId:'',
      DistrictId:'',
      VDCMUNId:'',
      WardNo:'',
      Tole:'',
      Email:['', [
        Validators.required,
        Validators.email
      ]],
      Phone:['', [
        Validators.maxLength(10),
        Validators.minLength(10)
      ]],
      MobileNo:['',[
        Validators.maxLength(10),
        Validators.minLength(10)
      ]],
      EntryDate:'',
      UserId:'',
      DocumentPath:[null],
      IsActive:'false',
      Remarks:'',
    })
  }

  get DocumentTitle(){
    return this.registerDocument.get('DocumentTitle') as FormControl;
  }
  get Organization(){
    return this.registerDocument.get('Organization') as FormControl;
  }
  get Email(){
    return this.registerDocument.get('Email') as FormControl;
  }
  get Phone(){
    return this.registerDocument.get('Phone') as FormControl;
  }
  get MobileNo(){
    return this.registerDocument.get('MobileNo') as FormControl;
  }

  onFilePicked(event:any){
   const file:File = event.target.files[0];
   if(file){
    this.fileName = file.name;
    this.registerDocument.patchValue({
  
    })
   }
  }
  submit(): void{
    // const formValue = this.registerDocument.value;
    // this.document.DId = formValue.DId,
    // this.document.DartaNo = formValue.DartaNo,
    // this.document.DocumentTitle = formValue.DocumentTitlem,
    // this.document.Organization = formValue.Organization,
    // this.document.StateId = formValue.StateId,
    // this.document.DistrictId = formValue.DistrictId,
    // this.document.VDCMUNId= formValue.VDCMUNId,
    // this.document.WardNo= formValue.WardNo,
    // this.document.Tole= formValue.Tole,
    // this.document.Email= formValue.Email,
    // this.document.Phone= formValue.Phone,
    // this.document.MobileNo= formValue.MobileNo,
    // this.document.UserId= formValue.UserId,
    // this.document.DocumentPath= formValue.DocumentPath,
    // this.document.IsActive= formValue.IsActive,
    // this.document.Remarks= formValue.Remarks

    this.document = {...this.registerDocument.value}

    this.test = {
     
      "DartaNo": 2,
      "DocumentTitle": "kitta",
      "Organization": "bhumi bivag",
      "StateId": 5,
      "DistrictId": 3,
      "VDCMUNId": 1,
      "WardNo": 10,
      "Tole": "nasal",
      "Email": "gggmu@gmail.com",
      "Phone": "9876543219",
      "MobileNo": "2384796",
      "EntryDate": new Date("2020-10-10"),
      // "EntryDate": "2020-10-10T00:00:00",
      "UserId": 34,
      "DocumentPath": "dsf/fsdf/fsd4.pdf",
      "IsActive": false,
      "Remarks": "hyy"
  }
 

  // this.register.postDocument(this.login).subscribe(
  //   {
  //     next: (res) => console.log(res),
  //     error: (error: any)=>console.log(error)
  //   }
  // )

  this.register.postDocument(this.document).subscribe({
    next: (res) => console.log(res),
    error: (error:any) => alert(error)
  })  
  }
}
