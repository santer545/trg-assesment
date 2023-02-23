import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationData } from '@app/models/location.model';

@Component({
  selector: 'trg-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  isActionDisabled = false;
  location: LocationData = {
    id: this.data.id || 0,
    name: '',
    lng: 0,
    ltd: 0,
  };
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      title: string;
      action: string;
      location: LocationData;
    }
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
