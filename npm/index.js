// const add = require("./myModules.js")
// console.log(add);
// console.log(add(5,6));

const result = require("./myModules")

console.log(typeof result);
console.log(result);


console.log(result.add(5,6));
console.log(result.prod(5,6));
