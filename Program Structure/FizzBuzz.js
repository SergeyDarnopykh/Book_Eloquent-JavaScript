for (let i = 0; i < 100; i++) {
    let number = i + 1,
    isDivisibleBy3 = (number % 3 == 0),
    isDivisibleBy5 = (number % 5 == 0);

     if (isDivisibleBy3 && isDivisibleBy5) {
        console.log('FizzBuzz')
        continue;
    }

     if (isDivisibleBy3) {
        console.log('Fizz');
        continue;
    }

    if (isDivisibleBy5) {
        console.log('Buzz')
        continue;        
    }

    console.log(number);
}