function aclean(arr) {
  const lower = arr.map(element => {
      return element.toLowerCase();
  });
  let sortedArr = lower.map(item => item.split('').sort().join(''));
  let setArr = new Set(sortedArr);
  let reducedObj = {};
  for (let setItem of setArr) {
      let indexArr = sortedArr.reduce((acc, cur, index) => {
          if (setItem === cur) {
              acc.push(index);
          }
          return acc;
      }, []);
      reducedObj[setItem] = indexArr;
  }
  let finalArr = [];
  for (let reduceItem in reducedObj) {
      finalArr.push(arr[reducedObj[reduceItem][0]]);
  }
  return finalArr;
}

console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));


