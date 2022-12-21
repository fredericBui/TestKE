function find_all(sumDigitValue, amountDesiredDigit) {
  var totalPossibleNumbers;
  var minNumber;
  var maxNumberWidth;
  var sum = 0;
  var tab = [];
  for (var i = 0; i < amountDesiredDigit; i++) {
    tab.push(1);
  }
  tab.forEach((element) => {
    sum += element;
  });

  console.log(tab);
  console.log(sum);
}

find_all(3, 3);

//find_all(10, 3)
//=> [8, 118, 334]
