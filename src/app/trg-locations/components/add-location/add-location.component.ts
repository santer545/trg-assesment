import { ConfirmDialogComponent } from '@app-shared/components/confirm-dialog/confirm-dialog.component';
import { Component, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationData } from '@app/models/location.model';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'trg-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLocationComponent {
  private translationService = inject(TranslateService);
  dialog = inject(MatDialog);

  @Input() locations!: LocationData[];

  @Output() updatedData = new EventEmitter<LocationData[]>();

  handleAddData(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        id: this.locations?.length,
        title: this.translationService.instant('location.create'),
        action: this.translationService.instant('location.add'),
      },
    });

    dialogRef.afterClosed().subscribe((location: LocationData) => {
      if (location) {
        this.updatedData.emit([...this.locations, location]);
      }
    });
  }
}
