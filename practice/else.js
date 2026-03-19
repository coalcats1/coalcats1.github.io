console.log("test");

function addToBody(text){
	document.body.innerHTML += "<p>" + text + "</p>";
}
/*
let yourname = prompt("What is your name?");
console.log("Hi "+ yourname);
addToBody("Hi " + yourname);
*/

let tempature =prompt("What is the tempature outside");

tempature = Number(tempature)

if(tempature <= 32){
	addToBody("It's freezing! Stay inside");

}else if(tempature >= 80){
	addToBody("Go to the beach");
}else{
	addToBody("take a walk");
}
addToBody("have a nice day"); 
