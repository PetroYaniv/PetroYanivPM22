import { Component } from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-sel-c',
  standalone: true,
  imports: [],
  templateUrl: './sel-c.component.html',
  styleUrl: './sel-c.component.scss'
})
export class SelCComponent {
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit(): void {

    const lineCanvasEle: any = document.getElementById('Sel03')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,9],
        datasets: [{
          borderColor: 'rgba(232,145,32,0.9)',
          data: [0, 4, 3, 8, 7, 6, 8,4,3],

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
