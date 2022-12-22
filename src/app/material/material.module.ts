import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button'
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field'
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input'
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select'
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs'
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete'
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu'
import{MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator'
import{MatLegacyProgressSpinnerModule as MatProgressSpinnerModule}from '@angular/material/legacy-progress-spinner'
import{MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips'
@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    DragDropModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }