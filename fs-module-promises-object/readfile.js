const fs = require("fs").promises;

async function myReadFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the 
file: ${error.message}`);
  }
}

myReadFile("greetings.txt");
