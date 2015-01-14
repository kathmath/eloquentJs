/*TRIES*/


for (var number = 1; number <= 100; number ++ ) {
	if (number % 3 == 0 && number % 5 == 0) console.log("fizzbuzz");
	else if (number % 3 == 0) console.log("fizz");
	else if (number % 5 == 0) console.log("buzz");
	else if console.log(number);
}

//hmm SyntaxError: Unexpected identifier

for (var number = 1; number <= 100; number ++ ) {
	if (number % 3 == 0 && number % 5 == 0) 
		console.log("fizzbuzz");
	else if console.log(number);
}

for (var number = 1; number <= 100; number ++ ) {
	if (number = 3) console.log("fizz");
	else if console.log(number);
}

//oops final statment has to be else



/* SOLUTION */

//fizz + buzz
for (var number = 1; number <= 100; number ++ ) {
	if (number % 3 == 0)
		console.log("fizz");
	else if (number % 5 == 0)
		console.log("buzz");
	else 
		console.log(number);
	}

//fizz + buzz + fizzbuzz 
for (var number = 1; number <= 100; number ++ ) {
	if (number % 3 == 0 && number % 5 == 0)
		console.log("fizzbuzz");
	else if (number % 3 == 0)
		console.log("fizz");
	else if (number % 5 == 0)
		console.log("buzz");
	else 
		console.log(number);
	}

//check
for (var number = 1; number <= 100; number ++ ) {
	if (number % 3 == 0 && number % 5 == 0)
		console.log("fizzbuzz " + number);
	else if (number % 3 == 0)
		console.log("fizz " + number);
	else if (number % 5 == 0)
		console.log("buzz " + number);
	else 
		console.log(number);
	}