export {};
console.log('Hello World');

//types

let myString: string = 'Hello world';
myString = 22 + '';

let myNumber: number = 22;
let myBool: boolean = true || false;
let myVar: any = 'hello';
myVar = false;

//Arrays

let StringArray: any[] = ['', '', ''];
StringArray = [1, 2, 3];
let NumberArray: number[] = [1, 2, 3];
let BooleanArray: boolean[] = [true, false];
let AnyArray: any[] = [1, 2, true, 'hello'];

//tuple
let strNumTuple: [string, number];
strNumTuple = ['Hello', 22];

//void, undefined, null
let myVoid: void = undefined;
let myNull: null = undefined;
let myUndefined: undefined = undefined;

//Functions
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === 'string') {
    num1 = parseInt(num1);
  } else if (typeof num2 === 'string') {
    num2 = parseInt(num2);
  }
  return;
};

function getName(firstname: string, lastName?: string) {
  return `${firstname} ${lastName}`;
}

getName('Jesus');

function myVoidFunction(): void {
  return;
}

//Interfaces
interface ITodo {
  title: string;
  text: string;
}

function showTodo(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`);
}
showTodo({
  title: 'Eat Dinner',
  text: 'lorem',
});

//Clases
class User {
  name: string;
  email: string;
  age: number;

  constructor(name) {
    this.name = name;
  }
  register() {
    console.log(`${this.name} is registered!`);
  }
}
let John = new User('John');
