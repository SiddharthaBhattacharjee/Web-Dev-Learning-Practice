console.log("Handeling event in JS Window Objects");

const myHead = document.getElementById("heading");

myHead.addEventListener("click", function() {
    console.log("Heading Clicked");
});
myHead.addEventListener("mouseover", function(e) {
    console.log("event : " + e);// e is event object (contains info about the event that occured);
});