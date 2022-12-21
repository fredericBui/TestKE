class Support {
  MakeNegative(number) {
    if (number > 0) {
      number *= -1;
    }
    return number;
  }
}
Support = new Support();
console.log(Support.MakeNegative(1)); // return -1
console.log(Support.MakeNegative(-5)); // return -5
console.log(Support.MakeNegative(0)); // return 0
