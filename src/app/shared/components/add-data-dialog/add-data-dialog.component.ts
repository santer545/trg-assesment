import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocationData } from '@app/trg-locations/models/location.model';

@Component({
  selector: 'trg-add-data-dialog',
  templateUrl: './add-data-dialog.component.html',
  styleUrls: ['./add-data-dialog.component.scss'],
})
export class AddDataDialogComponent {
  location: LocationData = {
    id: Date.now(),
    name: '',
    xCoord: 0,
    yCoord: 0,
  };
  constructor(public dialogRef: MatDialogRef<AddDataDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
