import { Component } from '@angular/core';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  data: number[] = [];

  calculateStdDev(): number {
    let sum = this.data.reduce((a, b) => a + b, 0);
    let mean = sum / this.data.length;
  
    let squareDiffs = this.data.map((value) => Math.pow(value - mean, 2));
    let variance = squareDiffs.reduce((a, b) => a + b, 0) / (this.data.length - 1);
  
    return Math.sqrt(variance);
  }  
}
