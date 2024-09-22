import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-document-dialog',
  template: `
  <div class = "popup">
  <button  mat-raised-button class="close-button" (click)="closeDialog()">Close</button>
  <iframe [src]="sanitizedDocumentLink" width="100%" height="500">Hello</iframe>
  </div>
  `,
  styleUrls: ['./document-dialog.component.css']
})
export class DocumentDialogComponent {
  sanitizedDocumentLink:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { documentLink: string },
              private sanitizer: DomSanitizer, private dialogRef: MatDialogRef<DocumentDialogComponent> ) {
    this.sanitizedDocumentLink =  this.sanitizer.bypassSecurityTrustResourceUrl(data.documentLink)
    console.log(this.sanitizedDocumentLink)
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
