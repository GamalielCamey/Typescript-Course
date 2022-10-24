//$ UNION TYPE

//? using the | operator let us add multiple types to an argument

function combine(n1: number | string, n2: number | string) {
  //* we need to add an if to let the code what to do in each case
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);

console.log(combinedAges);

const combinedNames = combine("Gama", "Sol");

console.log(combinedNames);

//? UNION helps add the code a little flexibility but stil be validated.

//$ LITERAL TYPES

//? this type hepls you declare not only the type but also the specific value you want the variable to have for example we use the conversionResult key

function combineLiteral(
  n1: number | string,
  n2: number | string,
  conversionResult: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    conversionResult === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAgesA = combineLiteral(30, 35, "as-number");

const combinedAgesB = combineLiteral("30", "35", "as-number");

console.log(combinedAgesA);
console.log(combinedAgesB);

const combinedNamesB = combineLiteral("Gama", "Sol", "as-text");

console.log(combinedNames);

//$ TYPE ALIASES

//? this allows you to create custom types

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combineAlias(
  n1: Combinable,
  n2: Combinable, //* this helps us set customized types or unions
  conversionResult: ConversionDescriptor
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    conversionResult === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}
