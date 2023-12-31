import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DateSaleSumsViewData } from 'src/app/clients/system-api/UserApiClient.gen';
import { DateSaleSumsViewService } from 'src/app/services/date-sale-sums-view.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-sale-date',
  templateUrl: './sale-date.component.html',
  styleUrls: ['./sale-date.component.scss']
})
export class SaleDateComponent implements OnInit {

  @ViewChild('searchNgForm') searchNgForm: NgForm;
  searchForm: FormGroup;

  displayedColumns: string[] = ['date', 'dayOfWeek', 'profit', 'sumOfSales', 'sumOfUnits', 'sumOfTotalSalePrice'];
  dataSource = new MatTableDataSource<DateSaleSumsViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dateFrom: Date | undefined
  dateTo: Date | undefined

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private _dateSaleSumsViewService:DateSaleSumsViewService, 
    private _formBuilder:FormBuilder,
    ) 
    { 
      this.chartOptions = {
        series: [],
        chart: {
          height: 350,
          //width: 3000,
          type: "line"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5,
          curve: "straight",
          dashArray: [0, 8, 5]
        },
        title: {
          text: "Page Statistics",
          align: "left"
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return (
              val +
              " - <strong>" +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              "</strong>"
            );
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          labels: {
            trim: false
          },
          categories: []
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function(val: string) {
                  return val + " (mins)";
                }
              }
            },
            {
              title: {
                formatter: function(val: string) {
                  return val + " per session";
                }
              }
            },
            {
              title: {
                formatter: function(val: any) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: "#f1f1f1"
        }
      };
    }

  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      dateFrom: [''],
      dateTo: [''],
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }

  getAll(){
    if (this.dateFrom != null && this.dateFrom != undefined){
      this.dateFrom = new Date(this.dateFrom);
    }

    if (this.dateTo != null && this.dateTo != undefined){
      this.dateTo = new Date(this.dateTo);
    }

    this._dateSaleSumsViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.dateFrom, this.dateTo).subscribe((data) => {
      this.dataSource = new MatTableDataSource<DateSaleSumsViewData>(data.items!);
      this.totalItems = data.totalItems!;

      this.chartOptions.xaxis = {
        labels: {
          trim: false
        },
        categories: []
      }

      this.chartOptions.series! = [ { name: "Профит", data: [] }, { name: "Трансакции", data: [] }, { name: "Единици", data: [] }, { name: "Приход", data: [] } ]

      for (var i = 0; i < this.dataSource.data.length; i++) {
        this.chartOptions.xaxis?.categories.push(this.dataSource.data[i].date?.toDateString());
        this.chartOptions.series![0].data.push(this.dataSource.data[i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        this.chartOptions.series![1].data.push(this.dataSource.data[i].sumOfSales as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        this.chartOptions.series![2].data.push(this.dataSource.data[i].sumOfUnits as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        this.chartOptions.series![3].data.push(this.dataSource.data[i].sumOfTotalSalePrice as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
      }

      this.chart.render();
    });
  }
}