// Connect coffee_data.js to the index.js file
const coffeeMenu = require("./coffee_data.js");

//
// 2. Print an array of all drinks on the menu
// Just drink names
// Map Function
const printNames = (item) => item.name;
const coffeeNames = coffeeMenu.map(printNames);

// Log the array
console.log(`Prompt 2:\nThe array for all drinks on the menu:`);
console.log(`[${coffeeNames}]\n`);

//
// 3. Print array of drinks that cost 5 and under
// Use filter method to check if item.price <= 5
const fiveAndUnder = coffeeMenu.filter((item) => {
  return item.price <= 5;
});

// Log the array
console.log(
  `Prompt 3:\nThe array for all drinks on the menu that are $5.00 and under:`
);
console.log(`[${fiveAndUnder.map(printNames)}]\n`);

//
// 4. Prints an array of drinks that are priced at an even number
// Use filter method to check if item % 2 === 0
const evenPrices = coffeeMenu.filter((item) => !(item.price % 2));

// Log the array
console.log(
  `Prompt 4:\nThe array for all drinks on the menu that are priced at an even number: `
);
console.log(`[${evenPrices.map(printNames)}]\n`);

//
// 5. Print the total cost if they were to order one of every drink.
// Use reduce method to calculate total of all coffeeMenu.price
const initialValue = 0;
const totalCost = coffeeMenu.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue
);

// Log the array
console.log(
  `Prompt 5:\nThe total cost if you were to order one of every drink is:`
);
console.log(`$${totalCost}\n`);

//
// 6. Print an array of all drinks that are seasonal
// Filter array if item.seasonal = true
let seasonalDrinks = coffeeMenu.filter((item) => item.seasonal);

// Log the array
console.log(`Prompt 6:\nThe array of all the drinks that are seasonal:`);
console.log(`[${seasonalDrinks.map(printNames)}]\n`);

//
// 7. Prints all the seasonal drinks with the words "with imported beans" after the item name.
// run seansonal drinks through map(printNames) to get array of names
// forEach(item) in array of names, console log item + "with imported beans"
console.log("Prompt 7:");
seasonalDrinks
  .map(printNames)
  .forEach((item) => console.log(`${item} with imported beans`));
