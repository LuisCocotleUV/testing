import { Component } from '@angular/core';
import { LinearRegressionService } from '../services/linear-regression.service';

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
    let XY:number[]=[];
    let x2:number[]=[];
    let y2:number[]=[];
    let sumx:number=0;
    let sumy:number=0;
    let sumXY:number=0;
    let sumx2:number=0;
    let sumy2:number=0;
    for(let i=0;i<array1.length;i++){
        XY[i]=array1[i]*array2[i];
        x2[i]=array1[i]*array1[i];
        y2[i]=array2[i]*array2[i];
    }

    for(let i=0;i<array1.length;i++){
        sumx=sumx+array1[i];
        sumy=sumy+array2[i];
        sumXY=sumXY+XY[i];
        sumx2=sumx2+x2[i];
        sumy2=sumy2+y2[i];
    }
    
    sumx=sumx/10;
    sumy=sumy/10;
    let b1:number=(((sumXY)-(10*sumx*sumy))/((sumx2)-(10*(sumx**2))));
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
