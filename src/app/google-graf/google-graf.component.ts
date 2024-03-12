import { Component , OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SgrafService} from "../sgraf.service";
import {Chart, registerables} from "chart.js";
import {NgForOf} from "@angular/common";
import _default from "chart.js/dist/plugins/plugin.legend";
import labels = _default.defaults.labels;

@Component({
  selector: 'app-google-graf',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './google-graf.component.html',
  styleUrl: './google-graf.component.scss'
})
export class GoogleGrafComponent {

  Grafinfo: any = [];

  Googlechar:any;
  constructor(private service: SgrafService) {

    Chart.register(...registerables);

  }


  ngOnInit() {
    this.service.GetDataJson().subscribe(data => {
      this.Grafinfo = data;
      this.GrafUp( this.Grafinfo);
    })
  }


  public GrafUp(GrafDataGoogle:any): void {
    if(this.Googlechar) {this.Googlechar.destroy();}
    const  Googlecanvas: any=document.getElementById('StrafickG01');
    this.Googlechar = new Chart(Googlecanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: [
          "Google",
          "Safari",
          "Firefox"
        ],
        datasets: [{
          data: GrafDataGoogle.Grafdata,

          backgroundColor: [
            'rgb(155,155,155)',
            'rgb(94,101,187)',
            'rgb(2,9,91)'
          ],
          borderWidth : 1
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

