/*
    Possibilities: Website, Mobile App, Desktop App, Server, Operating System, and Artifical Intelligence
    Goal: Interactive Websites
    Standard implementation: ECMASCRIPT
    Runtime: Natively runs in browser. With Node, can also run on service
    Scripting Language: Execute code on the fly - It's an interpreted language (line by line) vs. compiled
    JS Engine: Uses JIT (just in time compilation) to convert to machine code
    Declaring variables: let const var - dynamically typed language
    Data Types: string, number, bigint, boolean, undefined, symbol, null
    Garbage Collection

    OOP vs FP*** object oriented vs functional

    Non Blocking Event Loop: The event loop is a fundamental concept in JavaScript's concurrency model, responsible for managing 
    asynchronous operations and ensuring non-blocking behavior in JavaScript programs. 
    It is what allows JavaScript to handle multiple tasks efficiently without blocking the execution of other code.

    Callback Function / Event Loop
    Try Catch, Then Catch, await async
    class static super extends

    Share code with modules, export default / package manager

    Frontend Frameworks enable declarative code / Data Binding

    Bundling - Module Bundler - To package for Browser
    Dynamic imports

    Typescript/ESLint for Static Analysis

    //Data Transformation and Manipulation:
    //Reformatting JSON data using map
    //Cleaning and filtering datasets using filter

    //Text Processing and Analysis
    //Sentiment analysis , Natural Language Processing

    //Graph Traversal and Algorithms
    //Functional Programming Paradigm: Currying, Pure, Immutable

    // Reformatting JSON data using map
*/

//Lexical Environment: global, local, and block
let a = "global";

const myFunction = () => {
  let a = "local";

  if (true) {
    let a = "block";

    /*
        JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of 
        functions, variables, classes, or imports to the top of their scope, prior to execution of the code
    */
    var b = "hoisted";
    console.log("Inside Block (a): ", a);
  }

  console.log("Outside Block (a): ", a);
  console.log("Outside Block (b): ", b);
};

//console.log("Outside Function (a): ", a);
//myFunction();

//Functions are objects and can be used as expressions that can receive parameters and return values
const add = function (a: number, b: number) {
  return a + b;
};

function higherOrder(addFunc: (a: number, b: number) => number) {
  console.log("Inside High Order (2,5):", addFunc(2, 5));
}

//higherOrder(add);

/*
    Call Stack (Browser's Short Term Memory): The call stack is a region of memory used for keeping track of function calls in the current execution context. 
    Whenever a function is called, a stack frame containing information about the function call, such as arguments and local variables, 
    is pushed onto the call stack. When a function completes execution, its stack frame is popped from the call stack, allowing the 
    execution to return to the previous context. The call stack operates on a last-in, first-out (LIFO) basis, meaning that the most 
    recently called function is the first one to be executed.

    Heap: The heap is a region of memory where objects (including variables and function closures) are stored. 
    In JavaScript, objects are allocated memory space in the heap when they are created using constructors or literals. 
    The heap is a large, unstructured region of memory where objects are allocated dynamically. Memory allocated in the heap can be 
    accessed by any part of the code and is managed by the JavaScript runtime environment's garbage collector.

*/

//Function can be nested to created a closure that encapsulates data and logic from the rest of the program
const heapExample = () => {
  let counter = 20;

  return () => {
    console.log(counter);
  };
};

const heapFunc = heapExample();
//heapFunc();

//THIS & Objects
function whatIsThis() {
  console.log(this);
}

//whatIsThis(); //Returns window

const person = {
  whatIsThisArrow: () => {
    console.log(this); //doesn't exist in arrow function
  },
  whatIsThis: function () {
    console.log(this); //will return person object
  },
};

//person.whatIsThis();

const num = 23;
const obj = new Object();

const someFunc = (num, obj) => {};

//num: primitive passed by value, copy created of original varibale
//obj: stored in heap and passed by reference, may lead to mutation
someFunc(num, obj);

//object literal OR object contructor
const human = {
  dna: "",
  name: "",
};

const humanObj = new Object();

//OBJECT ORIENTED PROGRAMING , INHERITANCE

//getters, setters, constructor, methods
//Object-Oriented Programming (OOP), Encapsulation, Inheritance,
class Human {
  private dna: string;
  private name: string;

  constructor(init: { dna: string; name: string }) {
    this.dna = init.dna;
    this.name = init.name;
  }

  get getName(): string {
    return this.name;
  }

  set setName(val: string) {
    this.name = val;
  }

  /*
        In JavaScript classes, the static keyword is used to define static methods or properties that belong to the class itself, 
        rather than to instances of the class
  */
  //static makes global to class name vs. instance
  static isHuman(human: Human) {
    if (human.dna == "HUMAN") return true;
  }

  walk(): void {
    console.log("walking");
  }
}

const myHuman = new Human({ dna: "HUMAN", name: "Sam" });
console.log(Human.isHuman(myHuman));
