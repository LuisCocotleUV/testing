import { Component } from '@angular/core';
import { SimpsonService } from '../services/simpson.service';
import { simpson, twoX, xSquared, oneOverX, t } from '../common/simpson_rule';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  data1: {x0: number, x1: number, num_seg: number, ERROR: number, f_x: string} = {x0: 0, x1: 0, num_seg: 0, ERROR: 0, f_x: ''};
  data2: {x0: number, x1: number, num_seg: number, ERROR: number, f_x: string} = {x0: 0, x1: 0, num_seg: 0, ERROR: 0, f_x: ''};
  data3: {x0: number, x1: number, num_seg: number, ERROR: number, f_x: string} = {x0: 0, x1: 0, num_seg: 0, ERROR: 0, f_x: ''};

  constructor(private simpsonService: SimpsonService) {}

  loadTest1() {
    this.simpsonService.getTest1().subscribe(data => {
      this.data1 = data;
      console.log(this.calculateSimpson(this.data1));
    });
  }

  loadTest2() {
    this.simpsonService.getTest2().subscribe(data => {
      this.data2 = data;
      console.log(this.calculateSimpson(this.data2));
    });
  }

  loadTest3() {
    this.simpsonService.getTest3().subscribe(data => {
      this.data3 = data;
      console.log(this.calculateSimpson(this.data3));
    });
  }

  calculateSimpson(data: {x0: number, x1: number, num_seg: number, ERROR: number, f_x: string}) {
    let f: (x: number) => number;
    switch (data.f_x) {
      case '2x':
        f = twoX;
        break;
      case 'x^2':
        f = xSquared;
        break;
      case '1/x':
        f = oneOverX;
        break;
      case 't':
        f = t;
        break;
      default:
        throw new Error('Función desconocida');
    }
    return simpson(data.x0, data.x1, data.num_seg, data.ERROR, f);
  }
}
