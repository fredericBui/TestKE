function factors(number) {
  var tab = [];
  if (number == 1) {
    return tab;
  } else {
    var result = number;
    while (result != 1) {
      for (var i = 2; i < 10; i++) {
        if (number % i == 0) {
          result /= i;
          tab.push(i);
          break;
        }
      }
    }
    return tab;
  }
}

console.log(factors(1));
console.log(factors(3));
console.log(factors(8));
console.log(factors(9));
// console.log(factors(12));
