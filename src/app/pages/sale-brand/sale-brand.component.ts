import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BrandSaleSumsAndProfitViewData } from 'src/app/clients/system-api/UserApiClient.gen';
import { BrandSaleSumsAndProfitViewService } from 'src/app/services/brand-sale-sums-and-profit-view';

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
  selector: 'app-sale-brand',
  templateUrl: './sale-brand.component.html',
  styleUrls: ['./sale-brand.component.scss']
})
export class SaleBrandComponent implements OnInit {

  @ViewChild('searchNgForm') searchNgForm: NgForm;
  searchForm: FormGroup;

  displayedColumns: string[] = ['name', 'profit', 'sumOfSales', 'sumOfUnits', 'sumOfTotalSalePrice'];
  dataSource = new MatTableDataSource<BrandSaleSumsAndProfitViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string | undefined

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private _brandSaleSumsAndProfitViewService:BrandSaleSumsAndProfitViewService, 
    private _formBuilder:FormBuilder,
    ) 
    { 
      this.chartOptions = {
        series: [],//[44, 55, 13, 43, 22],
        chart: {
          width: 1200,
          height: 480,
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
    this.getAllForPieChart("profit");
  }

  getAll(){
    this._brandSaleSumsAndProfitViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.name).subscribe((data) => {
      this.dataSource = new MatTableDataSource<BrandSaleSumsAndProfitViewData>(data.items!);
      this.totalItems = data.totalItems!;

      //for (var i = 0; i < this.dataSource.data.length; i++) {
      //  this.chartOptions.series!.push(this.dataSource.data[i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
      //  this.chartOptions.labels!.push(this.dataSource.data[i].name);
      //}

      //this.chart.render();
    });
  }

  getAllForPieChart(column: string){
    this._brandSaleSumsAndProfitViewService.getAll(0, 9999999, "").subscribe((data) => {

      this.chartOptions.series! = [];
      this.chartOptions.labels! = [];

      for (var i = 0; i < data.items!.length; i++) {

        if (column == "profit") {
          this.chartOptions.series!.push(data.items![i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfSales") {
          this.chartOptions.series!.push(data.items![i].sumOfSales as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfTotalSalePrice") {
          this.chartOptions.series!.push(data.items![i].sumOfTotalSalePrice as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfUnits") {
          this.chartOptions.series!.push(data.items![i].sumOfUnits as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }

        this.chartOptions.labels!.push(data.items![i].name);
      }
      
      this.chart.render();
    });
  }
}