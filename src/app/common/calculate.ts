export function sumX(array1: number[]): number {
    let sumx = 0;
    for(let i = 0; i < array1.length; i++){
      sumx += array1[i];
    }
    return sumx;
  }
  
  export function sumYY(array2: number[]): number {
    let sumy2 = 0;
    for(let i = 0; i < array2.length; i++){
      sumy2 += array2[i] * array2[i];
    }
    return sumy2;
  }
  
  export function sumXY(array1: number[], array2: number[]): number {
    let sumXY = 0;
    for(let i = 0; i < array1.length; i++){
      sumXY += array1[i] * array2[i];
    }
    return sumXY;
  }