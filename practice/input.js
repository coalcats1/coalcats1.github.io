const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
let vx = 10;
let vy = 10;
let g = 1;
function animate(){
	y=y+g;
	//clear
	ctx.clearRect(0,0,800,800);
	//position

	//draw
	ctx.fillRect(x,y,50,50);
	requestAnimationFrame(animate);
}
animate();

//eventHandler
function handleKeyDown(e){
	e.preventDefault();
	console.log(e.key);
	if(e.key === "ArrowDown"){
		y=y+vy
	}
	if(e.key ==="ArrowUp"){
		y=y-vy
	}
	if(e.key ==="ArrowRight"){
		x=x+vx
	}
	if(e.key ==="ArrowLeft"){
		x=x-vx
	}
	if(e.key === "s"){
                y=y+vy
        }
        if(e.key ==="w"){
                y=y-vy
        }
        if(e.key ==="d"){
                x=x+vx
        }
        if(e.key ==="a"){
                x=x-vx
        }
}

//event listener
document.addEventListener('keydown', handleKeyDown);
