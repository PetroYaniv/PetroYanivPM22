import { Component } from '@angular/core';
import {Chart, ChartConfiguration, ChartOptions, registerables} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-sel-b',
  standalone: true,
    imports: [
        BaseChartDirective
    ],
  templateUrl: './sel-b.component.html',
  styleUrl: './sel-b.component.scss'
})
export class SelBComponent {

  public ChartLabel =
    [1,2,3,4,5,6,7,8,9,10];



  public ChartData: ChartConfiguration<'bar'>['data'] = {
    labels:[
      1,2,3,4,5,6,7,8,9,10
    ],
    datasets:[{

      backgroundColor: 'rgba(225,31,31,0.9)',
      borderColor: 'rgba(225,31,31,0.9)',
      data: [10, 8, 2, 5, 6, 10, 14,17,16,20],

    },]


  }
  public lineChartOptions: ChartOptions<'bar'> = {

    scales: {
      x: {
        display:false,
        grid: {
          display:false,
        }
      },
      y: {
        display:false,
        grid: {
          display:false,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }

  }

  constructor() {

  }
  ngOnInit(): void {


    }
}
