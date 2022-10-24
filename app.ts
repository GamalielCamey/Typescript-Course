//$ UNKNOWN TYPE

let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "Gama";

/*
userName = user;  //! we get an error because even though the las assignment of userinput is a string, unknown type does not assure that you will allways get a string son it crashes with the userName declaration. NOTE if you put type any instead of unknown it would overdrive any validation wich is not good

*/

if (typeof userInput === "string") {
  userName = userInput;
}

//? so unknown can be assigned to avariable wich we dont know its value yet but can still be validated wich doesnt happen with any

//$ NEVER TYPE

//? we assign the never type explicitly to tell the code that this function should NEVER return anything so you tel the code to stop or crash if it does wich doesnt happen with void type

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError("An error has ocurred", 500);
