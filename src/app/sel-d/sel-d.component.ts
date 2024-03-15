import { Component } from '@angular/core';
import {Chart, ChartConfiguration, ChartOptions, registerables} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-sel-d',
  standalone: true,
    imports: [
        BaseChartDirective
    ],
  templateUrl: './sel-d.component.html',
  styleUrl: './sel-d.component.scss'
})
export class SelDComponent {
  public ChartLabel =
    [1,2,3,4,5,6,7,8];



  public ChartData: ChartConfiguration<'line'>['data'] = {
    labels:[
      1,2,3,4,5,6,7,8
    ],
    datasets:[{

      pointRadius: 0,
      fill: true,
      backgroundColor: 'rgba(17,211,79,0.9)',
      borderColor: 'rgba(17,211,79,0.9)',
      data: [0,4, 2,6, 6.5, 10, 0],

    }, {

      pointRadius: 0,
      fill: true,
      backgroundColor: 'rgba(6,224,253,0.9)',
      borderColor: 'rgba(6,224,253,0.9)',
      data: [0,4, 3,12, 6.5, 2,8, 0],

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
