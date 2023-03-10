import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@app-shared/components/confirm-dialog/confirm-dialog.component';
import { LocationData } from '@app/models/location.model';

@Component({
  selector: 'trg-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditLocationComponent {
  private translationService = inject(TranslateService);
  public dialog = inject(MatDialog);
  @Input() location!: LocationData;
  @Input() locations!: LocationData[];
  @Output() updatedData = new EventEmitter<LocationData[]>();

  handleEditData(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: this.translationService.instant('location.update'),
        location: this.location,
        action: this.translationService.instant('actions.edit'),
      },
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
