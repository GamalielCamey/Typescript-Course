//$ RETURN TYPE
//? the return type of the add function is inferred by TS to be a number
function add(n1, n2) {
    return n1 + n2;
}
//? In case of this function the return type would be void because the function is not actually returning any value, its just printing something in to the console. this type is assigned by inferrence
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 6));
//$ FUNCTIONS AS TYPES
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
