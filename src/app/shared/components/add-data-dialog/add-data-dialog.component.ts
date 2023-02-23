import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationData } from '@app/trg-locations/models/location.model';

@Component({
  selector: 'trg-add-data-dialog',
  templateUrl: './add-data-dialog.component.html',
  styleUrls: ['./add-data-dialog.component.scss'],
})
export class AddDataDialogComponent {
  isActionDisabled = false;
  location: LocationData = {
    id: this.locations?.length || 0,
    name: '',
    xCoord: 0,
    yCoord: 0,
  };
  constructor(
    public dialogRef: MatDialogRef<AddDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public locations: LocationData[]
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  handleUpdatedData(updatedLocation: Omit<LocationData, 'id'>) {
    this.location = { id: this.location.id, ...updatedLocation };
  }

  handleActionStatus(status: boolean) {
    this.isActionDisabled = status;
  }
}
