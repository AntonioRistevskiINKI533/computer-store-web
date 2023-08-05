import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DateSaleSumsViewData } from 'src/app/clients/system-api/UserApiClient.gen';
import { DateSaleSumsViewService } from 'src/app/services/date-sale-sums-view.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @ViewChild('searchNgForm') searchNgForm: NgForm;
  searchForm: FormGroup;

  displayedColumns: string[] = ['date', 'dayOfWeek', 'profit', 'sumOfSales', 'sumOfUnits', 'sumOfTotalSalePrice'];
  dataSource = new MatTableDataSource<DateSaleSumsViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dateFrom: Date | undefined
  dateTo: Date | undefined

  constructor(
    private _dateSaleSumsViewService:DateSaleSumsViewService, 
    private _formBuilder:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      dateFrom: [''],
      dateTo: [''],
      //dateFrom: ['', Validators.required],
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.getAll();
  }

  getAll(){
    this._dateSaleSumsViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.dateFrom, this.dateTo).subscribe((data) => {
      this.dataSource = new MatTableDataSource<DateSaleSumsViewData>(data.items!);
      this.totalItems = data.totalItems!;
    });
  }
}