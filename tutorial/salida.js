"use strict";
exports.__esModule = true;
console.log('Hello World');
//types
var myString = 'Hello world';
myString = 22 + '';
var myNumber = 22;
var myBool = true || false;
var myVar = 'hello';
myVar = false;
//Arrays
var StringArray = ['', '', ''];
StringArray = [1, 2, 3];
var NumberArray = [1, 2, 3];
var BooleanArray = [true, false];
var AnyArray = [1, 2, true, 'hello'];
//tuple
var strNumTuple;
strNumTuple = ['Hello', 22];
//void, undefined, null
var myVoid = undefined;
var myNull = undefined;
var myUndefined = undefined;
//Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    else if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return;
};
function getName(firstname, lastName) {
    return firstname + " " + lastName;
}
getName('Jesus');
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
});
//Clases
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    return User;
}());
var John = new User('John');
