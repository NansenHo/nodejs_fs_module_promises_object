// The process object is a global Node.js object 
// that contains functions and data all related to the currently running Node.js process.

// The argv property is an array of stings containing all the command line arguments given to a program.
console.log(process.argv);
console.log(process.argv.slice(2));
