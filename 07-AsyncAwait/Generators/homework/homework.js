function* fizzBuzzGenerator(max) {
  // Tu código acá:
  if (max) {
    for (let i = 1; i <= max; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        yield "Fizz Buzz";
      } else if (i % 5 == 0) {
        yield "Buzz";
      } else if (i % 3 == 0) {
        yield "Fizz";
      } else {
        yield i;
      }
    }
  }
  let num = 1;
  while (!max) {
    if (num % 3 == 0 && num % 5 == 0) {
      yield "Fizz Buzz";
    } else if (num % 5 == 0) {
      yield "Buzz";
    } else if (num % 3 == 0) {
      yield "Fizz";
    } else {
      yield num;
    }
    num++;
  }
}

module.exports = fizzBuzzGenerator;
