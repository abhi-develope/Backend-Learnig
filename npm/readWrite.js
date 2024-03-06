// read from an external file

const fs = require('fs')
// console.log(typeof fs);

// read in the sync way

/*

console.log("Before starting to read");

const content = fs.readFileSync("input.txt")

console.log("Output content is " + content);

console.log("last Line");

*/

// reading in async way

/*

console.log("Before starting to read");

const content = fs.readFile("input.txt",(err,content)=>{

    if(err){
        return console.log(err);
    }
    console.log("Content of the file is :" +content);
})



console.log("last Line");


*/


// write the code in external file in synchronous way

/*

console.log("before");
fs.writeFileSync('output.txt', 'Hello World!')
console.log("After");

*/



// write the code in external file in Asynchronous way
console.log("before");

fs.writeFile('output2.txt', "Hello student again!", err =>{
    if(err){
        return console.log(err);

    }
    console.log('written Successfully');
})

console.log("After");

