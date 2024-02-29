import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-grafb',
  standalone: true,
  imports: [],
  templateUrl: './grafb.component.html',
  styleUrl: './grafb.component.scss'
})
export class GrafbComponent {


  title = 'angular-chart';

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

    const lineCanvasEle: any = document.getElementById('Graf02')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
        datasets: [{

          backgroundColor: 'rgba(255,76,76,0.9)',
          borderColor: 'rgba(255,76,76,0.9)',
          data: [6,4,8,7,0,3,4,10,8,7,8,7,5],

        }]
      },
      options: {
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

    })
    }
}
