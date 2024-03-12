import { Component } from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-sel-e',
  standalone: true,
  imports: [],
  templateUrl: './sel-e.component.html',
  styleUrl: './sel-e.component.scss'
})
export class SelEComponent {
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit(): void {

    const lineCanvasEle: any = document.getElementById('Sel05')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'pie',
      data: {
        labels: [1,2,3],
        datasets: [{


          data:[30,30,40],
          backgroundColor: [
            'rgb(155,155,155)',
            'rgb(94,101,187)',
            'rgb(2,9,91)'
          ],
          borderWidth: 1

        }]
      },
      options: {

        plugins: {
          legend: {
            display: false,
          }
        }
      }
    })
    }
}
