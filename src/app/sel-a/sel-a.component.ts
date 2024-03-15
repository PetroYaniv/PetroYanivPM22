import { Component } from '@angular/core';
import {Chart, ChartConfiguration, ChartOptions, registerables} from 'chart.js';
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-sel-a',
  standalone: true,
    imports: [
        BaseChartDirective
    ],
  templateUrl: './sel-a.component.html',
  styleUrl: './sel-a.component.scss'
})
export class SelAComponent {

  public ChartLabel =
    [1,2,3,4,5,6,7,8,9];



  public ChartData: ChartConfiguration<'bar'>['data'] = {
    labels:[
      1,2,3,4,5,6,7,8,9
    ],
    datasets:[{

      backgroundColor: 'rgba(39,210,18,0.9)',
      borderColor: 'rgba(39,210,18,0.9)',
      data: [2, 1, 3, 4, 5, 3, 4,2,4],

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
