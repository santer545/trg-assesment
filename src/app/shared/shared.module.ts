import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDataDialogComponent } from './components/add-data-dialog/add-data-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditDataDialogComponent } from './components/edit-data-dialog/edit-data-dialog.component';

@NgModule({
  declarations: [AddDataDialogComponent, EditDataDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    AddDataDialogComponent,
    EditDataDialogComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule {}
