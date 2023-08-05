import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductSaleSumsAndProfitViewData } from 'src/app/clients/system-api/UserApiClient.gen';
import { ProductSaleSumsAndProfitViewService } from 'src/app/services/product-sale-sums-and-profit-view';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.scss']
})
export class SaleProductComponent implements OnInit {

  @ViewChild('searchNgForm') searchNgForm: NgForm;
  searchForm: FormGroup;

  displayedColumns: string[] = ['name', 'profit', 'sumOfSales', 'sumOfUnits', 'sumOfTotalSalePrice'];
  dataSource = new MatTableDataSource<ProductSaleSumsAndProfitViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string | undefined

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private _productSaleSumsAndProfitViewService:ProductSaleSumsAndProfitViewService, 
    private _formBuilder:FormBuilder,
    ) 
    { 
      this.chartOptions = {
        series: [],//[44, 55, 13, 43, 22],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: [],//["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }

  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      name: [''],
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();

    this._productSaleSumsAndProfitViewService.getAll(0, 9999999, "").subscribe((data) => {
      for (var i = 0; i < data.items!.length; i++) {
        this.chartOptions.series!.push(data.items![i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        this.chartOptions.labels!.push(data.items![i].name);
      }
      
      this.chart.render();
    });
  }

  getAll(){
    this._productSaleSumsAndProfitViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.name).subscribe((data) => {
      this.dataSource = new MatTableDataSource<ProductSaleSumsAndProfitViewData>(data.items!);
      this.totalItems = data.totalItems!;

      //for (var i = 0; i < this.dataSource.data.length; i++) {
      //  this.chartOptions.series!.push(this.dataSource.data[i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
      //  this.chartOptions.labels!.push(this.dataSource.data[i].name);
      //}

      //this.chart.render();
    });
  }
}