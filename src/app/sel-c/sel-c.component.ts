import { Component } from '@angular/core';
import {Chart, ChartConfiguration, ChartOptions, registerables} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-sel-c',
  standalone: true,
    imports: [
        BaseChartDirective
    ],
  templateUrl: './sel-c.component.html',
  styleUrl: './sel-c.component.scss'
})
export class SelCComponent {
  public ChartLabel =
    [1,2,3,4,5,6,7,8,9];



  public ChartData: ChartConfiguration<'line'>['data'] = {
    labels:[
      1,2,3,4,5,6,7,8,9
    ],
    datasets:[{

      borderColor: 'rgba(232,145,32,0.9)',
      data: [0, 4, 3, 8, 7, 6, 8,4,3],

    },]


  }
  public lineChartOptions: ChartOptions<'line'> = {

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
