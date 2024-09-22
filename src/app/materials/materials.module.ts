import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';


import {MatTableModule} from '@angular/material/table';

const MaterialConstants = [MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule,
ScrollingModule,MatDialogModule]
@NgModule({
  imports: [
   MaterialConstants
  ],
  exports:[
    MaterialConstants
  ]
})
export class MaterialsModule { }
