class Support {
  ReversedSequence(number) {
    var sequence = [];
    while (number > 0) {
      sequence.push(number);
      number--;
    }
    return sequence;
  }
}

Support = new Support();

console.log(Support.ReversedSequence(5));
console.log(Support.ReversedSequence(1));
console.log(Support.ReversedSequence(-5));
