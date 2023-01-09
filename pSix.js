let numbers = process.argv.slice(2);
let newVal = Math.min(...numbers);
console.log( `The minimum of [${ numbers }] is ${ newVal }` );