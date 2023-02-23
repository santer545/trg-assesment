import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { LocationData } from '../../../models/location.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'trg-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent implements AfterViewInit {
  @Input() locations!: LocationData[];
  displayedColumns: string[] = ['name', 'lng', 'ltd', 'action'];
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

  handleAddLocations(updatedData: LocationData[]): void {
    this.dataSource.data = [...updatedData];
  }

  handleEditLocations(updatedData: LocationData[]): void {
    this.dataSource.data = [...updatedData];
  }
}
