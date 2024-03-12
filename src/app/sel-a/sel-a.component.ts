import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-sel-a',
  standalone: true,
  imports: [],
  templateUrl: './sel-a.component.html',
  styleUrl: './sel-a.component.scss'
})
export class SelAComponent {

  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit(): void {

    const lineCanvasEle: any = document.getElementById('Sel01')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: [1,2,3,4,5,6,7,8,9],
        datasets: [{

         // fill: true,
          backgroundColor: 'rgba(39,210,18,0.9)',
          borderColor: 'rgba(39,210,18,0.9)',
          data: [2, 1, 3, 4, 5, 3, 4,2,4],

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
