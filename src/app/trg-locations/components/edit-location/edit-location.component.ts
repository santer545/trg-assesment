import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDataDialogComponent } from '@app-shared/components/edit-data-dialog/edit-data-dialog.component';
import { LocationData } from '@app/trg-locations/models/location.model';

@Component({
  selector: 'trg-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditLocationComponent {
  public dialog = inject(MatDialog);
  @Input() location!: LocationData;
  @Input() locations!: LocationData[];
  @Output() updatedData = new EventEmitter<LocationData[]>();

  handleEditData(): void {
    const dialogRef = this.dialog.open(EditDataDialogComponent, {
      width: '350px',
      data: this.location,
    });

    dialogRef.afterClosed().subscribe((location: LocationData) => {
      if (location) {
        const locationsClone = [...this.locations];
        locationsClone[location.id] = location;
        this.updatedData.emit(locationsClone);
      }
    });
  }
}
