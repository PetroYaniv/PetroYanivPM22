import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SgrafService} from "../sgraf.service";
import {Chart, ChartConfiguration, ChartOptions, registerables} from "chart.js";
import {NgForOf} from "@angular/common";
import _default from "chart.js/dist/plugins/plugin.legend";
import labels = _default.defaults.labels;
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-strafick-graf',
  standalone: true,
  imports: [
    NgForOf,
    BaseChartDirective
  ],
  templateUrl: './strafick-graf.component.html',
  styleUrl: './strafick-graf.component.scss'

})

export class StrafickGrafComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart : BaseChartDirective | null = null;
  Grafinfo: any = [];

  linechar: any;

  constructor(private service: SgrafService) {


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

    if (this.linechar) {
      //this.linechar.destroy();
    }
    if (ym == 'y') {

      this.ChartData.datasets[0].data = GrafDataym.FirstGrafdatayear;
      this.ChartData.datasets[1].data = GrafDataym.SecondGrafdatayear;
      this.ChartData.labels = GrafDataym.labelsyear;


    }
    if (ym == 'm') {
      this.ChartData.datasets[0].data = GrafDataym.FirstGrafdata;
      this.ChartData.datasets[1].data = GrafDataym.SecondGrafdata;
      this.ChartData.labels = GrafDataym.labelsmonth;

    }

  }



  public ChartData : ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [{


      label: "New Visitor",
      pointRadius: 0,
      fill: true,
      backgroundColor: 'rgba(76, 132, 255, 0.9)',
      borderColor: 'rgba(76, 132, 255, 0.9)',
      data: [],
      cubicInterpolationMode: 'monotone',
    }, {
      label: "Return Visitor",
      pointRadius: 0,
      fill: true,
      backgroundColor: 'rgba(0,35,148,0.9)',
      borderColor: 'rgba(0,35,148,0.9)',
      data: [],
      cubicInterpolationMode: 'monotone',


    },]


  }
  public lineChartOptions: ChartOptions<'line'> = {
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
    }


  }

}
