function sort() {
  let numbers = [];
  for (let i1 = 0; i1 < arguments.length; i1++){
      for (let i2 = 0; i2 < arguments[i1].length; i2++){
          numbers.push(arguments[i1][i2]);
      }
  }
  return numbers.sort( (a, b)=> { return b-a });
}

console.log(sort([5, 8, 26, 14], [9, 1, 2], [27, 4]));