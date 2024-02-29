import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-grafc',
  standalone: true,
  imports: [],
  templateUrl: './grafc.component.html',
  styleUrl: './grafc.component.scss'
})
export class GrafcComponent {

  title = 'angular-chart';

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

    const lineCanvasEle: any = document.getElementById('Graf03')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: [0 + '%', 100 + '%'],
        datasets: [{


          label: "Today",
          // pointRadius:  0,
          // fill: true,
          backgroundColor: 'rgba(17,211,79,0.9)',
          borderColor: 'rgba(17,211,79,0.9)',
          data: [67, 0],
          barThickness: 6,
          //padding: 60,

        }, {
          barThickness: 6,
          label: "Yesterday",
          //pointRadius: 0,
          //fill: true,
          backgroundColor: 'rgba(6,224,253,0.9)',
          borderColor: 'rgba(6,224,253,0.9)',
          data: [0, 78],

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
        indexAxis: 'y',
        plugins: {
          legend: {


            display: false,
          }

        }
      }

    })
  }
}
