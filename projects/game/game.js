let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let t = t+1

//If you need, add any "helper" functions here
if(t < 16815){
	gameActive = false;
}

//Make one function for each location
function Void() {
    clear();
    print("\nYou are in the Void!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tcult meeting");
    
    function processInput(input){
        if (input.toLowerCase() === "cult meeting") {
            cult_meeting();
        } else {
            stayHere();
            waitThenCall(Void);
        }
    }
    waitForInput(processInput);
}

function cult_meeting() {
    clear();
    print("\nYou are in cult meeting!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tVoid");
    
    function processInput(input){
        if (input.toLowerCase() === "Void") {
            locationA();
        } else {
            stayHere();
            waitThenCall(cult_meeting);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            Void();
    }
    waitForInput(processInput);
}
