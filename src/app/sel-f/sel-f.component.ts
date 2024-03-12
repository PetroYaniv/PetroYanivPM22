import { Component } from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-sel-f',
  standalone: true,
  imports: [],
  templateUrl: './sel-f.component.html',
  styleUrl: './sel-f.component.scss'
})
export class SelFComponent {
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit(): void {

    const lineCanvasEle: any = document.getElementById('Sel06')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: [1,2,3,4,5,6,7,8,9],
        datasets: [{


          backgroundColor: 'rgba(76, 132, 255, 0.9)',
          borderColor: 'rgba(76, 132, 255, 0.9)',
          data: [4, 2, 6, 7, 8, 5,6,4,7],

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
