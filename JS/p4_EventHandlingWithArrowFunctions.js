console.log("Handeling event with arrow functions in JS");

const myHead = document.getElementById("heading");

myHead.addEventListener("click", (e) => {
    console.log(this);// this is window object since arrow function is executed in global scope
});

myHead.addEventListener("click", function(e){
    console.log(this);// this refers to the element on which the event is attached
});