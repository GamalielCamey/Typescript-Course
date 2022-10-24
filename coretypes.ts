//$ OBJECT TYPES

/*
const person = {
  name: "Gamaliel",
  age: 35,
};
*/

//? in Typescript language this would create an objec type that has a key - type pair instead of a key - value pair as in JS that woult look like this. (the types in this case are assigned by inference)

/* 
const person: {} = {
  name : string,
  age: number
}
*/

//? to assign the types explicitly to a specialized object type we declare the person object like this
//? thge ideal way would be to just declare the values inside the object and let typescript inferre the types but this is just for the example.

const person: {
  name: string;
  age: number; //*this would not be compiled in the JS file because its only readable by TS
} = {
  name: "Gamaliel",
  age: 35,
};

//$ ARRAY TYPES

const personA = {
  name: "Gamaliel",
  age: 35,
  hobbies: ["gaming", "coding", "cooking"], //* TS automatically inferres the string[] type
};

//? if I want to explicitly create the Array type I do it like this

let favouriteHobbies: string[]; //* the arry only accept strings, if I want it to accept other values I use any[]

for (const hobby of personA.hobbies) {
  console.log(hobby.toUpperCase()); //*this can be done because TS treats each value of the array as a string
}

//$ TUPLE

//? an array with a fixed lenght of 2 values is a special TS cosntruct

const personB: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //* when using a tuple the types must be explicitly assigned
} = {
  name: "Gamaliel",
  age: 35,
  hobbies: ["gaming", "coding", "cooking"], //* TS automatically inferres the string[] type
  role: [1, "Author"], //* this is the tuple
};

//? the tuple is useful to limit the values and lenght you can add to an array, be careful because it cannot prevent errors when using the push method.

//$  ENUM

/*
const ADMIN = 0
const READ_ONLY = 1
const USER = 2
*/

enum Role {
  ADMIN,
  READ_ONLY,
  USER,
}

//? ENUM will assign the type to the value we use puting an index to each value inside the ENUM, the index can be assigned Manually or automatically.

/* enum Role {
  ADMIN = 5,
  READ_ONLY = 8,
  USER = 100,
}
*/

const personC = {
  name: "Gamaliel",
  age: 35,
  hobbies: ["gaming", "coding", "cooking"],
  role: Role.USER,
};

if (personC.role === Role.USER) {
  console.log("this a User");
}

//? ENUM is a powerfull TS construct that lets you add identifiers that are human readable and have some mapped value behind the scenes

//$ ANY TYPE

//? when assining any[] type you allow TS to skip all restrictions TS gives you so you should avoid its use, if used you need to add some validations to avoid runtime errors.
