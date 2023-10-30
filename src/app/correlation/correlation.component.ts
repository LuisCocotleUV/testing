import { Component, OnInit } from '@angular/core';
import { CorrelationService } from '../services/correlation.service';
import { sumX, sumYY, sumXY } from '../common/calculate';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent {
  data1: {proxy_size: number[], actual_added: number[]} = {proxy_size: [], actual_added: []};
  data2: {proxy_size: number[], actual_added: number[]} = {proxy_size: [], actual_added: []};
  data3: {proxy_size: number[], actual_added: number[]} = {proxy_size: [], actual_added: []};
  data4: {proxy_size: number[], actual_added: number[]} = {proxy_size: [], actual_added: []};

  constructor(private correlationService: CorrelationService) {}

  loadTest1() {
    this.correlationService.getTest1().subscribe(data => {
      this.data1 = data;
      console.log(this.coeficiente(this.data1.proxy_size, this.data1.actual_added));
    });
  }

  loadTest2() {
    this.correlationService.getTest2().subscribe(data => {
      this.data2 = data;
      console.log(this.coeficiente(this.data2.proxy_size, this.data2.actual_added));
    });
  }

  loadTest3() {
    this.correlationService.getTest3().subscribe(data => {
      this.data3 = data;
      console.log(this.coeficiente(this.data3.proxy_size, this.data3.actual_added));
    });
  }

  loadTest4() {
    this.correlationService.getTest4().subscribe(data => {
      this.data4 = data;
      console.log(this.coeficiente(this.data4.proxy_size, this.data4.actual_added));
    });
  }

  coeficiente(array1:number[],array2:number[]){
    let n = array1.length;
    let sumx = sumX(array1);
    let sumy = sumX(array2);
    let sumOfXY = sumXY(array1, array2); // Cambiado a 'sumOfXY'
    let sumx2 = sumYY(array1);
    let sumy2 = sumYY(array2);

    let correlacion:number=(((n*sumOfXY)-(sumx*sumy))/Math.sqrt(((n*sumx2)-(sumx**2))*((n*sumy2)-(sumy**2))));
    return parseFloat(correlacion.toFixed(4));
  }

  r2(r:number){
    return parseFloat((r**2).toFixed(4));
  }
}