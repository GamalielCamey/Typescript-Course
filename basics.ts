//$ NUMBERS & STRINGS

function add(n1, n2) {
  return n1 + n2;
}

const number1 = "5";
const number2 = 4.5;
const number3 = 5;

//! this will throw a logical error error because JS uses concatenate when ading strings to a number
const result = add(number1, number2);

//? console.log(result);

//* using Typescript to set a default type for the arguments in the same function

function add2(n1: number, n2: number) {
  console.log(typeof n1, typeof n2); //? This is only to check the type inside the function as an example
  return n1 + n2;
}

// this will throw an error because the function add2 doesnt take strings as an argument
//!! Check out that in the browser you still get the logical error! typescript only works on development (you see the errors in the console)

//? const result2 = add2(number1, number2); THIS IS THE ERROR EXAMPLE

const result3 = add2(number2, number3);

//* TYPESCRIPT Only works during development!!! not on runtime!!! the static Types of the language are converted to dynamic as used in Javascript when they are compiled to JS

//$ WORKING WITH NUMBERS, STRINGS & BOOLEANS

const printResult = true;
const phrase = "Result is:";

function add3(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

add3(number2, number3, printResult, phrase);

//$ TYPE ASSIGNMENT & TYPE INFERENCE

//* assigning a type manually to a variable

let number4: number;
number4 = 6;

let stringExample1: string;

stringExample1 = "Hey I'm the string";

//* if you dont assign it manually, Typescript inferes the type of the variable you assign first

let stringExample2 = "Another example";

// stringExample2 = 3; //! this would throw an error because typescript assigns the string value to the variable we declared first
