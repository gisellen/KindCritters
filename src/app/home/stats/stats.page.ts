import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { registerables } from 'chart.js';
import Chart from 'chart.js/auto';
import {DateTime} from 'luxon';

Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  barChart: any;
  constructor() { }

  ngAfterViewInit() {
    this.barChartMethod();
  }

  barChartMethod(){
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100}; 
    console.log(DateTime.now().plus(1))

    this.barChart = new Chart(this.barCanvas.nativeElement, { //TODO: set graph to previous 7 days
      type: 'bar',
      data: {
        labels: [ // Date Objects
          DateTime.now().plus({days: -6}).toLocaleString(),
          DateTime.now().plus({days: -5}).toLocaleString(),
          DateTime.now().plus({days: -4}).toLocaleString(),
          DateTime.now().plus({days: -3}).toLocaleString(),
          DateTime.now().plus({days: -2}).toLocaleString(),
          DateTime.now().plus({days: -1}).toLocaleString(),
          DateTime.now().plus({days: 0}).toLocaleString(),
        ],
        datasets: [{
          label: 'Completed',
          data: [200, 50, 30, 15, 20, 34, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderRadius: 10,
          borderColor: [
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0)'
          ],
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          x: {

            time: {
              // Luxon format string
              tooltipFormat: 'DD T'
            },
            title: {
              display: true,
              text: 'Date'
            },
            grid: {
              display: false
            },
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    })
  }
}
