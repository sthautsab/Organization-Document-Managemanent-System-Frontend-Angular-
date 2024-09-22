import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {MaterialsModule} from './materials/materials.module'

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'





import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegisterDocumentComponent } from './components/register-document/register-document.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { BodyComponent } from './components/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewStatusComponent } from './components/view-status/view-status.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { Department1Component } from './components/departments/department1/department1.component';
import { FormsModule } from '@angular/forms';
import { DocumentDialogComponent } from './components/view-status/document-dialog.component';
import { StatusPopupComponent } from './components/popups/status-popup/status-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    RegisterDocumentComponent,
    SublevelMenuComponent,
    BodyComponent,
    DashboardComponent,
    ViewStatusComponent,
    DepartmentsComponent,
    Department1Component,
    DocumentDialogComponent,
    StatusPopupComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
