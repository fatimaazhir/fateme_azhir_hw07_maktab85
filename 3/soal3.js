function unique(arr) {
  uniqueArray = arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos;
  })
  return uniqueArray;
}

console.log(unique(["ali", "jafar", "ali"]));