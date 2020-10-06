import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProjekterDataSource, ProjekterItem } from './projekter-datasource';

@Component({
  selector: 'app-projekter',
  templateUrl: './projekter.component.html',
  styleUrls: ['./projekter.component.css']
})
export class ProjekterComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProjekterItem>;
  dataSource: ProjekterDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'beskrivelse', 'teknologier', 'status'];

  ngOnInit() {
    this.dataSource = new ProjekterDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
