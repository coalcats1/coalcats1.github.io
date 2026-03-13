let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let time = 0;
let timeoutIds = [];
//If you need, add any "helper" functions here
function timer(){
	timeoutIds.push(setTimeout(() => {
	room3();
        },12*1000));
}




setTimeout(() => {
        clear();
        print("\nGame Over");
        print("\nYou Have Become");
        gameActive = false;
}, 10 * 60 * 1000);
setTimeout(() => {
	beyond();
}, 5 * 60 * 1000); 
setTimeout(() => {
	room1();
},3*60*1000);
setTimeout(() => {
	room2();
},4*60*1000);
//Make one function for each location

function room3(){
	clear();
	print("\nYou aren't");
	setTimeout(() => {
		clear();
		start();
	},6*1000);
}

function beyond(){
	clear();
	print("\nYour in a wooden room, an old room, behind you is a door, beyond the door is a forest.");
	print("\nVoice: Reeni where are you.");
	print("\nThe voice gets closer.");
	print("\nYou have two options,"
		+"\n\tRun"+"\n\tDon't Run");
	function processInput(input){
		if(input.toLowerCase() === "run"){
                        Run();
                }else if(input.toLowerCase()=== "don't run"){
                        eaten();
                }else{
			eaten();
		}
        }
	waitForInput(processInput);
}

function room1(){
	clear();
        print("\nhurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt hurt");
        print("\nPress Enter");
	function processInput(input){
		if(input.toLowerCase() === ""){
			Void();
		}else{
			Void();
		}
	}
	waitForInput(processInput);
}
function room2(){
	clear();
	print("\nVoice: Reeni.");
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
    print("\nYou have no idea where you are. the 'room' is filled with a white void. Shards of stained glass large as a man is tall float. \nYou can see something vaugly through them.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tCult Meeting"+"\n\tStorm"+"\n\tShip");
    
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
    print("\nHey where you been Reeni, were doing it! Were gonna contact the them!");
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
	print("\nAs you reach for it you feel an impending dread. you reed it.");
	print("\nDear Reeni, I have thought about your proposal, but I'm afraid I must decline me and Alie have plans for Jharida should he become a problem. I am however conserned the results of his experiments on shalies were... disturbing, Jharida will be delt with, don't contact me again.");
	print("\nOnce done reading you look at your options to continue:"+
		"\n\tVoid"+"\n\tWater");
	function processInput(input){
		if(input.toLowerCase() === "water"){
			Water();
		}else if(input.toLowerCase() === "void"){
			Void();
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
    }, 8 * 1000);
}
function Run(){
	clear();
	print("\nVoice: Wait!");
	print("\nYou don't know where your going as you burst out the door.");
	print("\nVoice: ....");
	print("\nPress Enter");
	function processInput(input){
                if(input.toLowerCase() === ""){
                        beyond2();
                }else{
                        beyond2();
                }
        }
	waitForInput(processInput);
}
function eaten(){
	clear();
	print("\nVoice: There you are, we've been looking all over for you.");
	print("\nReeni: ....");
	print("\nYou recognize their face, they are Imarte.");
	print("\nImarte: What? You look like you just saw a ghost. Come on the others are waiting.");
	print("\nGame Over. Press enter to start again.");
	function processInput(input){
                if(input.toLowerCase() === ""){
                        clear();
			End();
                }else{
                        clear();
			End();
                }
        }
        waitForInput(processInput);
}
function beyond2(){
	clear();
	print("\nYour suddenly in back in the room. You painic looking around. Hide?");
	timer();
	function processInput(input){
		if(input.toLowerCase() === "hide"){
			hide();
		}else{
			hide();
		}
	}
	waitForInput(processInput);
}
function hide(){
	for(let i = 0; i < timeoutIds.length; i++){
                clearTimeout(timeoutIds[i]);
        }
	clear();
	print("\nYou hide behind a tree. It protects you. You sink into the tree.");
	print("\nYou try to scream, but you find yourself unable to move. As the tree swells you hear a voice. You finally remeber where you are, and why.");
	print("\nVoice: IuH7gyug98Yh9YHjjh.");
	print("\nYou can't make out the words, but you know what they are anyway.");
	setTimeout(() => {
		clear();
		print("\nYou died in a land of dead.");
	},13*1000);
}
function End(){
	clear();
	print("\nImarte brings you to a campground, several people sit around a campfire. You reconize them all.");
	print("\nYou forget where you are, or why.");
	print("\nIn this horrifing false world you find peace. Forgeting the cost of staying.");
	print("\nGame over");
	function processInput(input){
                if(input.toLowerCase() === ""){
                        clear();
                        start();
                }else{
                        clear();
                        start();
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
