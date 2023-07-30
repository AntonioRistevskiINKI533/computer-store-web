import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DateSaleSumsViewData } from 'src/app/clients/computer-store-client/ComputerStoreClient.g';
import { DateSaleSumsViewService } from 'src/app/services/date-sale-sums-view.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'dayOfWeek', 'profit', 'sumOfSales', 'sumOfUnits', 'sumOfTotalSalePrice'];
  dataSource = new MatTableDataSource<DateSaleSumsViewData>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dateSaleSumsViewService:DateSaleSumsViewService){ }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dateSaleSumsViewService.getAll(1,10,10).subscribe((data) => {
      this.dataSource = new MatTableDataSource<DateSaleSumsViewData>(data);
    });
  }
}