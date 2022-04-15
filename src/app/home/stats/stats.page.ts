import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { registerables } from 'chart.js';
import Chart from 'chart.js/auto';

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
    let start = new Date(), 
        end = new Date();
    start.setDate(start.getDate() - 7 );
    start.setHours(0, 0, 0, 0);
    console.log(start)

    this.barChart = new Chart(this.barCanvas.nativeElement, { //TODO: set graph to previous 7 days
      type: 'bar',
      data: {
        datasets: [{
          label: '7 Day stats',
          data: [200, 50, 30, 15, 20, 34],
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
          borderWidth: 1
        }],
      },
    })
  }
}
