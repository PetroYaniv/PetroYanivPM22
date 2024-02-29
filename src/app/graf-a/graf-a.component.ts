import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-graf-a',
  standalone: true,
  imports: [],
  templateUrl: './graf-a.component.html',
  styleUrl: './graf-a.component.scss'
})
export class GrafAComponent {
  title = 'angular-chart';

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
   // var area = document.getElementById("Graf01").getContext("2d");
   // var urChart = new Chart(area, {
    const lineCanvasEle: any = document.getElementById('Graf01')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [{


          backgroundColor: 'rgba(76,255,112,0.9)',
          borderColor: 'rgba(127,255,76,0.9)',
          data: [4, 5, 0, 2, 1, 5, 3, 6, 1, 11, 6, 9, 7, 8, 10],

        }]
      },
      options: {
        scales: {

          x: {
            display: false,

            grid: {
              display: false,
            }
          },
          y: {
            display: false,
            grid: {
              display: false,
            }
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }

    })
  }
}
