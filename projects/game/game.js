let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here

//If you need, add any "helper" functions here
setTimeout(() => {
	clear();
	print("\nYou Have Become");
	gameActive = false;
}, 7 * 60 * 1000)  

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
    print("\nHooded figures huttle around a central ulter. One of them gestures at you and says,");
    print("\nHey were you been, were doing it! Were gonna contact the them!");
    print("\nYou stare blankly at the hooded face hidden in shadows.");
    print("\nYou have the urge to move, something is eating at you. You see a shard of stained glass do you enter. Where do you want to go next? Say one of these choices:" +
        "\n\tVoid"+"\n\tEnd Times");
    
    function processInput(input){
        if (input.toLowerCase() === "void") {
            Void();
        }else if(input.toLowerCase() === "end times"){
		End_Times();
	}else{
            stayHere();
            waitThenCall(cult_meeting);
        }
    }
    waitForInput(processInput);
}
function End_Times(){
	clear();
	print("\nThe end of the world is upon you.");

	print("\nYou know you must keep moving, You know you must keep moving. Where to next? Say one of these choices:" +
		"\n\tVoid"+"\n\tcult meeting");

	function processInput(input){
		if(input.toLowerCase() === "void"){
			Void();
		}else if(input.toLowerCase() === "cult meeting"){
			cult_meeting();
		}else{
			stayHere();
			waitThenCall(End_Times);
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
