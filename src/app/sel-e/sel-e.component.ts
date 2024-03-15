import { Component } from '@angular/core';
import {Chart, ChartConfiguration, ChartOptions, registerables} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-sel-e',
  standalone: true,
    imports: [
        BaseChartDirective
    ],
  templateUrl: './sel-e.component.html',
  styleUrl: './sel-e.component.scss'
})
export class SelEComponent {
  public ChartLabel =
    [1,2,3];



  public ChartData: ChartConfiguration<'pie'>['data'] = {
    labels:[
      1,2,3
    ],
    datasets:[{


      data:[30,30,40],
      backgroundColor: [
        'rgb(155,155,155)',
        'rgb(94,101,187)',
        'rgb(2,9,91)'
      ],
      borderWidth: 1

    },]


  }
  public lineChartOptions: ChartOptions<'pie'> = {

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
