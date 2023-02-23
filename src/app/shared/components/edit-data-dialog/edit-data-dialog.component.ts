import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationData } from '@app/trg-locations/models/location.model';

@Component({
  selector: 'trg-edit-data-dialog',
  templateUrl: './edit-data-dialog.component.html',
  styleUrls: ['./edit-data-dialog.component.scss'],
})
export class EditDataDialogComponent {
  isActionDisabled = false;
  constructor(
    public dialogRef: MatDialogRef<EditDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public location: LocationData
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  handleUpdatedData(updatedLocation: Omit<LocationData, 'id'>) {
    this.location = { id: this.location.id, ...updatedLocation };
  }

  handleActionStatus(status: boolean) {
    this.isActionDisabled = status;
  }
}
