const fs = require('fs').promises;

async function moveFile(source, destination) {
  try {
    await fs.rename(source, destination);
    console.log(`Moved file from ${source} to ${destination}`);
  } catch (error) {
    console.log(`Got an error trying to move the file: ${error.message}`);
  }
}

// we also changed its name
moveFile('greetings-2.txt', 'test-data/salutations.txt');
