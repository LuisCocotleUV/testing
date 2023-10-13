import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  calculateMean(data: number[]): number {
    let sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
  }
}