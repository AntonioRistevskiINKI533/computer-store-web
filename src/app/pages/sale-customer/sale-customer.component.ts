import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerSaleSumsViewService } from 'src/app/services/customer-sale-sums-view.service';
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
  selector: 'app-sale-customer',
  templateUrl: './sale-customer.component.html',
  styleUrls: ['./sale-customer.component.scss']
})
export class SaleCustomerComponent implements OnInit {

  @ViewChild('searchNgForm') searchNgForm: NgForm;
  searchForm: FormGroup;

  displayedColumns: string[] = ['name', 'email', 'sumOfPurchases', 'sumOfUnits', 'sumOfTotalPurchasePrice'];
  dataSource = new MatTableDataSource<SupplierPurchaseSumsViewData>();
  totalItems: number

  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string | undefined
  surname: string | undefined

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private _customerSaleSumsViewService:CustomerSaleSumsViewService, 
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
      surname: [''],
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }

  getAll(column: string = "sumOfTotalSalePrice"){
    this._customerSaleSumsViewService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.name, this.surname).subscribe((data) => {
      this.dataSource = new MatTableDataSource<SupplierPurchaseSumsViewData>(data.items!);
      this.totalItems = data.totalItems!;

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
        
        if (column == "profit") {
          this.chartOptions.series![0].data.push(data.items![i].profit as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfTotalSalePrice") {
          this.chartOptions.series![0].data.push(data.items![i].sumOfTotalSalePrice as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfSales") {
          this.chartOptions.series![0].data.push(data.items![i].sumOfSales as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }
        else if (column == "sumOfUnits") {
          this.chartOptions.series![0].data.push(data.items![i].sumOfUnits as number & { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; } & [number, number | null] & [number, (number | null)[]]);
        }

        this.chartOptions.xaxis!.categories!.push([data.items![i].name+" "+data.items![i].surname]);
      }
      
      this.chart.resetSeries()
    });
  }
}