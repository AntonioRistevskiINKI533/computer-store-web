import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SupplierPurchaseSumsViewService } from 'src/app/services/supplier-purchase-sums-view';
import { SupplierPurchaseSumsViewData } from 'src/app/clients/system-api/UserApiClient.gen';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-purchase-supplier',
  templateUrl: './purchase-supplier.component.html',
  styleUrls: ['./purchase-supplier.component.scss']
})
export class PurchaseSupplierComponent implements OnInit {

  @ViewChild('searchNgForm') searchNgForm: NgForm;
  searchForm: FormGroup;

  displayedColumns: string[] = ['name', 'email', 'sumOfPurchases', 'sumOfUnits', 'sumOfTotalPurchasePrice'];
  dataSource = new MatTableDataSource<SupplierPurchaseSumsViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string | undefined

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private _supplierPurchaseSumsViewService:SupplierPurchaseSumsViewService, 
    private _formBuilder:FormBuilder,
    ) 
    { 
      this.chartOptions = {
        series: [
          {
            name: "distibuted",
            data: []//[21, 22, 10, 28, 16, 21, 13, 30]
          }
        ],
        chart: {
          height: 450,
          type: "bar",
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#546E7A",
          //"#26a69a",
          //"#D10CE8"
        ],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: [
            ["John", "Doe"],
            ["Joe", "Smith"],
            ["Jake", "Williams"],
            "Amber",
            ["Peter", "Brown"],
            ["Mary", "Evans"],
            //["David", "Wilson"],
            //["Lily", "Roberts"]
          ],
          labels: {
            style: {
              colors: [
                "#008FFB",
                "#00E396",
                "#FEB019",
                "#FF4560",
                "#775DD0",
                "#546E7A",
                //"#26a69a",
                //"#D10CE8"
              ],
              fontSize: "12px"
            }
          }
        }
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
    this.getAllForPieChart("sumOfTotalSalePrice");
  }

  getAll(){
    this._supplierPurchaseSumsViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.name).subscribe((data) => {
      this.dataSource = new MatTableDataSource<SupplierPurchaseSumsViewData>(data.items!);
      this.totalItems = data.totalItems!;

      //for (var i = 0; i < this.dataSource.data.length; i++) {
      //  this.chartOptions.series!.push(this.dataSource.data[i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
      //  this.chartOptions.labels!.push(this.dataSource.data[i].name);
      //}

      //this.chart.render();
    });
  }

  getAllForPieChart(column: string){
    this._supplierPurchaseSumsViewService.getAll(0, 9999999, "").subscribe((data) => {

      this.chartOptions.series![0].data = [];
      this.chartOptions.xaxis! = {
        categories: [
          //["John", "Doe"],
          //["Joe", "Smith"],
          //["Jake", "Williams"],
          //"Amber",
          //["Peter", "Brown"],
          //["Mary", "Evans"],
          //["David", "Wilson"],
          //["Lily", "Roberts"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              //"#26a69a",
              //"#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }

      for (var i = 0; i < data.items!.length; i++) {
        
        if (column == "sumOfTotalPurchasePrice") {
          this.chartOptions.series![0].data.push(data.items![i].sumOfTotalPurchasePrice as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfPurchases") {
          this.chartOptions.series![0].data.push(data.items![i].sumOfPurchases as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfUnits") {
          this.chartOptions.series![0].data.push(data.items![i].sumOfUnits as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }

        this.chartOptions.xaxis!.categories!.push([data.items![i].name]);
      }
      
      this.chart.resetSeries()
    });
  }
}