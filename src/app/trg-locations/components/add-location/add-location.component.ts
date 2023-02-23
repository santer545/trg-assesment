import { AddDataDialogComponent } from '@app-shared/components/add-data-dialog/add-data-dialog.component';
import { Component, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationData } from '@app/trg-locations/models/location.model';
import { MatTableDataSource } from '@angular/material/table';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'trg-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLocationComponent {
  dialog = inject(MatDialog);

  @Input() locations!: LocationData[];

  @Output() updatedData = new EventEmitter<LocationData[]>();

  handleAddData(): void {
    const dialogRef = this.dialog.open(AddDataDialogComponent, {
      width: '350px',
      data: this.locations,
    });

    dialogRef.afterClosed().subscribe((location: LocationData) => {
      if (location) {
        this.updatedData.emit([...this.locations, location]);
      }
    });
  }
}
