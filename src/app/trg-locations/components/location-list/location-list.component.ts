import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { LocationData } from '../../models/location.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddDataDialogComponent } from '@app-shared/components/add-data-dialog/add-data-dialog.component';
import { EditDataDialogComponent } from '@app-shared/components/edit-data-dialog/edit-data-dialog.component';

@Component({
  selector: 'trg-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent implements AfterViewInit {
  @Input() locations!: LocationData[];
  displayedColumns: string[] = ['name', 'xCoord', 'yCoord', 'action'];
  dataSource!: MatTableDataSource<LocationData>;

  @ViewChild(MatTable) table!: MatTable<LocationData[]>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<LocationData>(this.locations);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, header) =>
      data[header as keyof LocationData];
  }

  handleAddData(): void {
    const dialogRef = this.dialog.open(AddDataDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((location: LocationData) => {
      if (location) {
        this.dataSource.data = [...this.locations, location];
      }
    });
  }

  handleEditData(location: LocationData): void {
    const dialogRef = this.dialog.open(EditDataDialogComponent, {
      width: '350px',
      data: location,
    });

    dialogRef.afterClosed().subscribe((location: LocationData) => {
      if (location) {
        this.locations[location.id] = location;
        this.dataSource.data = [...this.locations];
      }
    });
  }
}
