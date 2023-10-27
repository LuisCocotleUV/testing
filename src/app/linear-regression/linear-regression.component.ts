import { Component } from '@angular/core';
import { LinearRegressionService } from '../services/linear-regression.service';
import { sumX, sumYY, sumXY } from '../common/calculate';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
})

export class LinearRegressionComponent {
  proxy_size: number[] = [];
  actual_added: number[] = [];

  constructor(private linearRegressionService: LinearRegressionService) {
    this.getData();
  }

  getData() {
    this.linearRegressionService.getTest1().subscribe(data => {
      this.proxy_size = data.proxy_size;
      this.actual_added = data.actual_added;
      const b1 = this.b1(this.proxy_size, this.actual_added);
      const b0 = this.b0(this.proxy_size, this.actual_added, b1);
      console.log(`b1: ${b1}, b0: ${b0}`);
    });
  }

  b1(array1:number[],array2:number[]){
    let XY = sumXY(array1, array2);
    let x2 = sumX(array1.map(x => x * x));
    let y2 = sumYY(array2);
    let sumx = sumX(array1) / array1.length;
    let sumy = sumX(array2) / array2.length;

    let b1:number=(((XY)-(array1.length * sumx * sumy))/((x2)-(array1.length * (sumx**2))));
    return parseFloat(b1.toFixed(4));
  }

  b0(array1:number[],array2:number[],b1:number){
    let sumx:number=0;
    let sumy:number=0;
    for(let i=0;i<array1.length;i++){
        sumx=sumx+array1[i];
        sumy=sumy+array2[i];
    }
    sumx=sumx/10;
    sumy=sumy/10;

    let b0:number=sumy-(b1*sumx);

    return parseFloat(b0.toFixed(3));
  }

  yk(b1:number,b0:number,xk:number){
    let result:number=b0+(b1*xk);
    return parseFloat(result.toFixed(3));
  }
}