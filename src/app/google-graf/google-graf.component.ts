import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SgrafService} from "../sgraf.service";
import {Chart, ChartConfiguration, ChartOptions, ChartType, ChartTypeRegistry, registerables} from "chart.js";
import {NgForOf} from "@angular/common";
import _default from "chart.js/dist/plugins/plugin.legend";
import labels = _default.defaults.labels;
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-google-graf',
  standalone: true,
  imports: [
    NgForOf,
    BaseChartDirective
  ],
  templateUrl: './google-graf.component.html',
  styleUrl: './google-graf.component.scss'
})
export class GoogleGrafComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart : BaseChartDirective | null = null;
  Grafinfo: any = [];
  public DataToChart = [];
  public ChartTypeD : ChartType = 'doughnut';
  Googlechar:any;
  constructor(private service: SgrafService) {



  }


  ngOnInit() {
    this.service.GetDataJson().subscribe(data => {
      this.Grafinfo = data;
      this.ChartData.datasets[0].data = this.Grafinfo.Grafdata;
      this.GrafUp( this.Grafinfo.Grafdata);
    })
  }
  public ChartData : ChartConfiguration<'doughnut'>['data'] = {
    labels: [
      "Google",
      "Safari",
      "Firefox"
    ],
    datasets: [{
      data: [30,40,30],

      backgroundColor: [
        'rgb(155,155,155)',
        'rgb(94,101,187)',
        'rgb(2,9,91)'
      ],
      borderWidth : 1
    }]

  }

  public lineChartOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: false,
      }
    }

  }

  public GrafUp(GrafDataGoogle:any) {
    this.DataToChart = GrafDataGoogle
    console.log(this.ChartData.datasets[0].data)
  }



}

