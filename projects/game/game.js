let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here

//If you need, add any "helper" functions here
setTimeout(() => {
	clear();
	print("\nYou Have Become");
	gameActive = false;
}, 7 * 60 * 1000);  
setTimeout(() => {
	room1();
},3*60*1000);

//Make one function for each location
function room1(){
	clear();
        print("\nhurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt");
        print("Press Enter");
	function processInput(input){
		if(input.toLowerCase() === ""){
			Void();
		}else{
			Void();
		}
	}
	waitForInput(processInput);
}

function Void() {
    clear();
    print("\nYou are in the Void!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tcult meeting"+"\n\tStorm"+"\n\tShip");
    
    function processInput(input){
        if (input.toLowerCase() === "cult meeting") {
            cult_meeting();
        }else if(input.toLowerCase() === "storm"){
                storm();
	}else if(input.toLowerCase() === "ship"){
		Ship();
	}else{
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
    print("\nYou have the urge to move, something is eating at you. You see a shard of stained glass do you enter? Where do you want to go next? Say one of these choices:" +
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
	print("\nIt is as you expect, meteors rain upon the world and, in the distance a wall of fire sweeps across the land turning rock into lava.");
	print("\nThe heat causes something to glimmer, a shard of glass.");
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
function storm(){
	clear();
	print("\nYou're on a hill, a massive thunder strom covers the shy over head.");
	print("\nYou turn around trying to find your barings. You see someone in the distance running and waving at you.");
	print("\nLightning splits the sky overhead, you don't notice your temporary hearing loss. The lightning alluminated something in the ground, a glass shard");
	print("\nYou need to get moving, something is happening, but you can't put your finger on it. Where to next?" +
		"\n\tVoid"+"\n\tThe Lake of Sorrow");
	function processInput(input){
		if(input.toLowerCase() === "void"){
			Void();
		}else if(input.toLowerCase() === "the lake of sorrow"){
			sorrow();
		}else{
			stayHere();
			waitThenCall(storm);
		}
	}
	waitForInput(processInput);
}
function sorrow(){
	clear();
	print("\nYou look over a perfectly still lake, you wade into the water, only to find that it is too smooth.");
	print("\nSomething bubles up inside you an immense regret.");
	print("\nA large disk rests in the liquide, you need to go, keep moving. There is nothing here for you, not anymore.");
	print("\nWhere do you go now?" + 
		"\n\tVoid"+"\n\tStorm");
	function processInput(input){
		if(input.toLowerCase() === "storm"){
			storm();
		}else if(input.toLowerCase() === "void"){
			Void();
		}else{
			stayHere();
			waitThenCall(sorrow);
		}
	}
	waitForInput(processInput);
}
function Ship(){
	clear();
	print("\nYou are in the haul of a ship, the planks creek as the boat rocks gently in the waves.");
	print("\nYou open a familiar door, it swings open revealing a neat desk.");
	print("\nYou think that one of the papers is important, there is just something about it.");
	print("\nAs you reach for it you feel an impending dread, fear takes over and turns inot panic. You flee the room.");
	print("\nYou see a shard of glass with maybe something swimming behind it. Do you enter? Your options are:"+
		"\n\tVoid"+"\n\tWater");
	function processInput(input){
		if(input.toLowerCase() === "void"){
			Void();
		}else if(input.toLowerCase() === "water"){
			Water();
		}else{
			stayHere();
			waitThenCall(Ship);
		}
	}
	waitForInput(processInput);
}
function Water(){
    clear();
    print("\nYour underwater, deep underwater, you strugle to adapt to the pressure.");
    print("\nThe sudden lack of air makes it difficult for you to breath. You franticly try to swim to an out of reach surface.");

    setTimeout(() => {
        clear();
        print("\nYou lose consciousness.");
        print("\nPress enter");

        function processInput(input){
            Void();
        }
        waitForInput(processInput);
    }, 10 * 1000);
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
