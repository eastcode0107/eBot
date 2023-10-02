const readlineSync = require('readline-sync');

function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

function remind_name() {
	console.log("Please, remind me your name.");
	let name = readlineSync.question();
	console.log("What a great name you have, " + name + "!");
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = readlineSync.question();
	let rem5 = readlineSync.question();
	let rem7 = readlineSync.question();

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(readlineSync.question());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

function test() {
    console.log("Let's test your programming knowledge.");
    console.log("Why do we use methods?");
    console.log("1. To repeat a statement multiple times.");
    console.log("2. To decompose a program into several small subroutines.");
    console.log("3. To determine the execution time of a program.");
    console.log("4. To interrupt the execution of a program.");

    let answer = readlineSync.question();

    while(answer != 3){
      console.log("Please, try again.");
      answer = readlineSync.question();
    } 

}

function end() {
	console.log("Congratulations, have a nice day!");
}


greet('eBot', '2023')  // change it as you need
remind_name();
guess_age();
count();
test();
end();
