export function simpson(x0: number, x1: number, num_seg: number, ERROR: number, f: (x: number) => number) {
    let h = (x1 - x0) / num_seg;
    let x = [];
    let fx = [];
  
    // Calculando los valores de x y f(x)
    for (let i = 0; i <= num_seg; i++) {
      x[i] = x0 + i * h;
      fx[i] = f(x[i]);
    }
  
    // Calculando el resultado
    let res = 0;
    for (let i = 0; i <= num_seg; i++) {
      if (i == 0 || i == num_seg)
        res += fx[i];
      else if (i % 2 != 0)
        res += 4 * fx[i];
      else
        res += 2 * fx[i];
    }
    res = res * (h / 3);
  
    return parseFloat(res.toFixed(4));
  }
  
  export function twoX(x: number) {
    return 2 * x;
  }
  
  export function xSquared(x: number) {
    return x * x;
  }
  
  export function oneOverX(x: number) {
    return 1 / x;
  }
  
  export function t(x: number) {
    return x * x * x; // EJEMPLO: Devolver el cubo de x.
  }
  