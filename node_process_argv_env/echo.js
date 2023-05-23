const arg = process.argv.slice(2);

// inspect one environment variable at a time.
// console.log(process.env[arg[0]]);
// node echo.js HOME


// print multiple environment variables
arg.forEach(i => {
  let envValue = process.env[i];
  if (!envValue) {
    console.error(`Could not find "${i}" in environment`);
  } else {
    console.log(envValue);
  }
})
