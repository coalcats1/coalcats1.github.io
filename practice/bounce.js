const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
let vx = 2;
let vy = 4;
let g = 1;
function animate(){
	x=x+vx;
	y=y+vy;
	vy=vy+g;
	ctx.clearRect(0,0,800,800);
	ctx.fillRect(x,y,100,100);
	requestAnimationFrame(animate);
	if(x >= 700 || x <= 0){
		vx= -vx;
	}
	if(y >= 700 || y <= 0){
		vy= -vy;
	}
}
animate();


