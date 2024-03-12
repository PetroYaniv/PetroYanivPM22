import { Component , OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SgrafService} from "../sgraf.service";
import {Chart, registerables} from "chart.js";
import {NgForOf} from "@angular/common";
import _default from "chart.js/dist/plugins/plugin.legend";
import labels = _default.defaults.labels;

@Component({
  selector: 'app-strafick-graf',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './strafick-graf.component.html',
  styleUrl: './strafick-graf.component.scss'

})

export class StrafickGrafComponent {

  Grafinfo: any = [];

  linechar:any;
  constructor(private service: SgrafService) {
    Chart.register(...registerables);

  }


  ngOnInit() {
    this.service.GetDataJson().subscribe(data => {
      this.Grafinfo = data;
      this.reloadContent('y', this.Grafinfo);
    })
  }
    public ButtonClick(my: any) {
      this.reloadContent(my, this.Grafinfo)

    }

    public reloadContent(ym: any, GrafDataym: any) {

      if (ym == 'y') {
        this.GrafUp(GrafDataym.labelsyear, GrafDataym.FirstGrafdatayear, GrafDataym.SecondGrafdatayear)
      }
      if (ym == 'm') {
        this.GrafUp(GrafDataym.labelsmonth, GrafDataym.FirstGrafdata, GrafDataym.SecondGrafdata)
      }

    }

    public GrafUp(GrafDatalabel: any, GrafDataFirst: any, GrafDataSecond: any): void {
      if(this.linechar) {this.linechar.destroy();}
      const  linecanvas: any=document.getElementById('myChart');
      this.linechar = new Chart(linecanvas.getContext('2d'), {
        type: 'line',
        data: {
          labels: GrafDatalabel,
          datasets: [{
            label: "New Visitor",
            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(76, 132, 255, 0.9)',
            borderColor: 'rgba(76, 132, 255, 0.9)',
            data: GrafDataFirst,
            cubicInterpolationMode: 'monotone',
          }, {
            label: "Return Visitor",
            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(0,35,148,0.9)',
            borderColor: 'rgba(0,35,148,0.9)',
            data: GrafDataSecond,
            cubicInterpolationMode: 'monotone',

          }]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              ticks: {
                callback: function (value: any, index, ticks) {
                  if (value % 1 == 0) {

                    if (value > 0) {
                      return value + 'M';
                    } else {
                      return value;
                    }
                  }
                }
              },
              grid: {
                display: false,
              }
            }
          },
          plugins: {

            legend: {
              position: 'top',
              align: 'end',
              labels: {
                usePointStyle: true,
                padding: 50,

              }
            },
          },
        }


      })
    }

}
