export function media (array:number[]) {
  var total=0, result, numDatos, item;
  numDatos = array.length;
  for (item = 0; item < numDatos; item++){
      total += array[item];
  }
  result = total/numDatos;

  return result;
}