import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from "ng-apexcharts";
import { DayOfWeekSaleSumsViewData } from 'src/app/clients/system-api/UserApiClient.gen';
import { DayOfWeekSaleSumsViewService } from 'src/app/services/day-of-week-sale-sums-view.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-sale-day-of-week',
  templateUrl: './sale-day-of-week.component.html',
  styleUrls: ['./sale-day-of-week.component.scss']
})
export class SaleDayOfWeekComponent implements OnInit {

  displayedColumns: string[] = ['name', 'profit', 'sumOfSales', 'sumOfUnits', 'sumOfTotalSalePrice'];
  dataSource = new MatTableDataSource<DayOfWeekSaleSumsViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private _dayOfWeekSaleSumsViewService:DayOfWeekSaleSumsViewService, 
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
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
    this.getAllForPieChart("profit");
  }

  getAll(){
    this._dayOfWeekSaleSumsViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize).subscribe((data) => {
      this.dataSource = new MatTableDataSource<DayOfWeekSaleSumsViewData>(data.items!);
      this.totalItems = data.totalItems!;

      //for (var i = 0; i < this.dataSource.data.length; i++) {
      //  this.chartOptions.series!.push(this.dataSource.data[i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
      //  this.chartOptions.labels!.push(this.dataSource.data[i].name);
      //}

      //this.chart.render();
    });
  }

  getAllForPieChart(column: string){
    this._dayOfWeekSaleSumsViewService.getAll(0, 9999999).subscribe((data) => {

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

        var dayName = ""

        switch (data.items![i].dayOfWeek){
          case 1:
            dayName = "Понеделник"
            break;
          case 2:
            dayName = "Вторник"
            break;
          case 3:
            dayName = "Среда"
            break;
          case 4:
            dayName = "Четврток"
            break;
          case 5:
            dayName = "Петок"
            break;
          case 6:
            dayName = "Сабота"
            break;
          case 7:
            dayName = "Недела"
            break;
        }

        this.chartOptions.labels!.push(dayName);
      }
      
      this.chart.render();
    });
  }
}