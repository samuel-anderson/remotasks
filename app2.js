// Create an array of numbers
const numbersArray = [1, 2, 3, 4, 4, 5, 5];
const uniqueNumbers = new Set(numbersArray);
console.log([...uniqueNumbers]); // Output: [1, 2, 3, 4, 5]

// Create a Set of strings
const stringSet = new Set(["apple", "banana", "orange"]);

// Create a Map of string keys and number values
//Will always be referenced
const numberMap = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
]);

// Adding elements to the Set and Map
stringSet.add("grape");
numberMap.set("four", 4);

// Accessing elements in the array, Set, and Map
console.log(numbersArray); // Output: [1, 2, 3, 4, 5]
console.log(stringSet); // Output: Set { 'apple', 'banana', 'orange', 'grape' }
console.log(numberMap); // Output: Map { 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4 }

// Getting the size of the Set and Map
console.log(stringSet.size); // Output: 4
console.log(numberMap.size); // Output: 4

console.log(numberMap.set("five", 5));

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...set1, ...set2]);
console.log([...union]); // Output: [1, 2, 3, 4, 5, 6]

// Intersection
const intersection = new Set([...set1].filter((x) => set2.has(x)));
console.log([...intersection]); // Output: [3, 4]

// Difference
const difference = new Set([...set1].filter((x) => !set2.has(x)));
console.log([...difference]); // Output: [1, 2]

const userMap = new Map();

// Add user information
userMap.set("john_doe", { name: "John Doe", age: 30 });
userMap.set("jane_smith", { name: "Jane Smith", age: 25 });

// Retrieve user information
console.log(userMap.get("john_doe")); // Output: { name: 'John Doe', age: 30 }
console.log(userMap.get("jane_smith")); // Output: { name: 'Jane Smith', age: 25 }

const configMap = new Map();

// Set configuration settings
configMap.set("theme", "dark");
configMap.set("language", "en");
configMap.set("fontSize", "16px");

// Retrieve configuration settings
console.log(configMap.get("theme")); // Output: 'dark'
console.log(configMap.get("language")); // Output: 'en'
console.log(configMap.get("fontSize")); // Output: '16px'

const productMap = new Map();

// Add product details
productMap.set(1, { name: "Laptop", price: 999 });
productMap.set(2, { name: "Smartphone", price: 499 });
productMap.set(3, { name: "Tablet", price: 299 });

// Retrieve product details
console.log(productMap.get(1)); // Output: { name: 'Laptop', price: 999 }
console.log(productMap.get(2)); // Output: { name: 'Smartphone', price: 499 }
console.log(productMap.get(3)); // Output: { name: 'Tablet', price: 299 }

//Storing User Information:
//Managing Configuration Settings:
//Organizing Data in a Structured Manner:

//Unique Values, Efficient Membership Tests, Order Preservation, Specialized Operations:

let numTest = 42; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let nul = null; // Null
let und = undefined; // Undefined
let sym = Symbol("foo"); // Symbol

console.log(sym);
