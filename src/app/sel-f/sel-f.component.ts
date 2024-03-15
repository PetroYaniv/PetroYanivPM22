import { Component } from '@angular/core';
import {Chart, ChartConfiguration, ChartOptions, registerables} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-sel-f',
  standalone: true,
    imports: [
        BaseChartDirective
    ],
  templateUrl: './sel-f.component.html',
  styleUrl: './sel-f.component.scss'
})
export class SelFComponent {
  public ChartLabel =
    [1,2,3,4,5,6,7,8,9];



  public ChartData: ChartConfiguration<'bar'>['data'] = {
    labels:[
      1,2,3,4,5,6,7,8,9
    ],
    datasets:[{

      backgroundColor: 'rgba(76, 132, 255, 0.9)',
      borderColor: 'rgba(76, 132, 255, 0.9)',
      data: [4, 2, 6, 7, 8, 5,6,4,7],

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
