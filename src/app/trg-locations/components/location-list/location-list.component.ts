import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { LocationData } from '@app/models/location.model';

@Component({
  selector: 'trg-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent implements AfterViewInit, OnChanges {
  @Input() locations!: LocationData[];
  displayedColumns: string[] = ['name', 'lng', 'ltd', 'action'];
  dataSource!: MatTableDataSource<LocationData>;

  @ViewChild(MatTable) table!: MatTable<LocationData[]>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<LocationData>(this.locations);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (data, header) => {
      if (data.name.match(/(\d+)/g) && header === 'name') {
        return Number(data.name.match(/(\d+)/g));
      }
      return data[header as keyof LocationData];
    };
  }

  handleAddLocations(updatedData: LocationData[]): void {
    this.dataSource.data = [...updatedData];
  }

  handleEditLocations(updatedData: LocationData[]): void {
    this.dataSource.data = [...updatedData];
  }
}
