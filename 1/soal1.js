function topSalary(salaries) {
  const sortedSalariesByVal = Object.entries(salaries).sort(([, v1], [, v2]) => v1 - v2);

  return sortedSalariesByVal[sortedSalariesByVal.length - 1][0]
}

let salaries = {
  "John": 100,
  "Pate": 300,
  "Mare": 250,
}

console.log(topSalary(salaries));