const fs = require("fs").promises;

async function openFile() {
  try {
    const csvHeader = "name,quantity,price";
    await fs.writeFile("groceries.csv", csvHeader);
  } catch (error) {
    console.error(`Got an error trying to write to a file:  ${eroor.message}`);
  }
}

async function addGroceryItem(name, quantity, price) {
  try {
    const csvLine = `\n${name}, ${quantity}, ${price}`;
    await fs.writeFile("groceries.csv", csvLine, { flag: "a" });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

(async function () {
  await openFile();
  await addGroceryItem("egg", 12, 1.5);
  await addGroceryItem("nutella", 1, 4);
})();
