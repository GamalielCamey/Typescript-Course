//$ RETURN TYPE

//? the return type of the add function is inferred by TS to be a number

function add(n1: number, n2: number) {
  return n1 + n2;
}

//? In case of this function the return type would be void because the function is not actually returning any value, its just printing something in to the console. this type is assigned by inferrence

function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 6));

//$ FUNCTIONS AS TYPES

let combineValues: (a: number, b: number) => number;
//*adding a description on the type of values the function can recive as arguments, this would prevent the posibility of passing a function that does not work the way we want for example wihtout the arrow function (let combinedValues: Function) would be acceptable but this would accept any function wich wouldnt have much sense

combineValues = add;

/*
combineValues = printResult; //! we get an error because this function does not use the arguments specified in the combineValues declaration
*/

console.log(combineValues(8, 8));

//$ FUNCTION CALLBACKS

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//? here we are telling the callback that the argument its going to recive will be of type number and it only has one argument, by defining the return type of the callback function, you are instructing that nothing will be done with that result.

//! if you return something in the function it would still work even if it doesnt expect the argument to return anything

addAndHandle(10, 20, (result) => {
  console.log(result);
});
