import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CitySaleSumsViewData, ProductSaleSumsAndProfitViewData } from 'src/app/clients/system-api/UserApiClient.gen';
import { CitySaleSumsViewService } from 'src/app/services/city-sale-sums-view.service';

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
  selector: 'app-sale-city',
  templateUrl: './sale-city.component.html',
  styleUrls: ['./sale-city.component.scss']
})
export class SaleCityComponent implements OnInit {

  @ViewChild('searchNgForm') searchNgForm: NgForm;
  searchForm: FormGroup;

  displayedColumns: string[] = ['name', 'profit', 'sumOfSales', 'sumOfUnits', 'sumOfTotalSalePrice'];
  dataSource = new MatTableDataSource<CitySaleSumsViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string | undefined

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private _citySaleSumsViewService:CitySaleSumsViewService, 
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
    this._citySaleSumsViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.name).subscribe((data) => {
      this.dataSource = new MatTableDataSource<CitySaleSumsViewData>(data.items!);
      this.totalItems = data.totalItems!;

      //for (var i = 0; i < this.dataSource.data.length; i++) {
      //  this.chartOptions.series!.push(this.dataSource.data[i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
      //  this.chartOptions.labels!.push(this.dataSource.data[i].name);
      //}

      //this.chart.render();
    });
  }

  getAllForPieChart(column: string){
    this._citySaleSumsViewService.getAll(0, 9999999, "").subscribe((data) => {

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