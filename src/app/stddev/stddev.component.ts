import { Component, OnInit } from '@angular/core';
import { StddevService } from '../services/stddev.service';
import { calcularMedia } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  template: ''
})
export class StddevComponent implements OnInit {
  devHoursStddev: number = 0;
  proxySizeStddev: number = 0;

  constructor(private stddevService: StddevService) {}

  ngOnInit(): void {
    this.stddevService.getDevHours().subscribe(data => {
      this.devHoursStddev = this.calcularDesviacionEstandar(data);
    });

    this.stddevService.getProxySize().subscribe(data => {
      this.proxySizeStddev = this.calcularDesviacionEstandar(data);
    });
  }

  private calcularDesviacionEstandar(data: number[]): number {
    const n = data.length;
    const mean = calcularMedia(data);
    const sumSquaredDiff = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    return Math.sqrt(sumSquaredDiff / (n - 1));
  }
}