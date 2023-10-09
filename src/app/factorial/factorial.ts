export function factorial(x: number): number {
    if (x < 0 || x > 15) {
      return 0;
    }
    let result = 1;
    for (let i = 2; i <= x; i++) {
      result *= i;
    }
    return result;
  }
  