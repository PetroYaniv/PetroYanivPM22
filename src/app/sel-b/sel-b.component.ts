import { Component } from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-sel-b',
  standalone: true,
  imports: [],
  templateUrl: './sel-b.component.html',
  styleUrl: './sel-b.component.scss'
})
export class SelBComponent {
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit(): void {

    const lineCanvasEle: any = document.getElementById('Sel02')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{


          backgroundColor: 'rgba(225,31,31,0.9)',
          borderColor: 'rgba(225,31,31,0.9)',
          data: [10, 8, 2, 5, 6, 10, 14,17,16,20],

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
