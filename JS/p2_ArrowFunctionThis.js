console.log("Testing behaviour of this in arrow functions");
console.log("----------------------------------------------");

obj = {
    name: "JS Window Objects",
    someFunction: () => {
        return this;
    }
}

let a = obj.someFunction();

console.log(a);
console.log(obj.someFunction());

// both return window
// since arrow functions "this" is basically the value of the "this" keyword outside the arrow function always.

function myfunction() {
    return () => {
        return this;
    }
}
const x = new myfunction();
console.log(x());
//here x is myfunction() and x() is the arrow function which returns the function , since outside arrow funcion the value of this is myfunction

obj2 = {
    name: "JS Window Objects 2",
    someFunction2() {
        return this;
    }
}

const b = obj2.someFunction2();

console.log(b);
console.log(obj2.someFunction2());

//here we can see that normal function this returns the parent object

obj3 = {
    name: "JS Window Objects 3",
    someFunction3() {
        console.log(this);
    }
}

const c = obj3.someFunction3;

console.log(c());
console.log(obj3.someFunction3());

// here c is taking the function itself, so when c is called , it is called inn global, so it returns window 
//where as obj3.function3 is called inside obj3, so it returns obj3.