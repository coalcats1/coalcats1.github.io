const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const balls = [];

for(let i=0;i<100;i=i+1){

const ball = {
	x:Math.random()*800,
	y:Math.random()*800,
	dx:Math.random()*20,
	dy:-1*Math.random()*20
}
balls.push(ball);
}
const ballRadius = 10;

let da = 2;
let db = -2;

let a = Math.random()*800;
let b = Math.random()*800;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 3;
const brickColumnCount = 7;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 30;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;


function drawBricks(){
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
	    ctx.fillRect(
		    brickOffsetLeft+c*(brickWidth+brickPadding),
		    brickOffsetTop+r*(brickHeight+brickPadding),
		    brickWidth,
		    brickHeight,
	    );
      //TODO: use the variables above to write the code that draws the bricks.
      //this should be a single function call to ctx.fillRect();
    }
  }
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);


function drawBall() {
  for(const ball of balls) {
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
  }
}
function drawBall2() {
  ctx.beginPath();
  ctx.arc(a, b, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawBall2();
  drawPaddle();
  drawBricks();
for(const ball of balls){
  if (ball.x +ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ballRadius || ball.y + ball.dy > canvas.height - ballRadius) {
    ball.dy = -ball.dy;
  }
}
  if (a + da > canvas.width - ballRadius || a + da < ballRadius) {
    da = -da;
  }
  if (b + db < ballRadius || b + db > canvas.height - ballRadius) {
    db = -db;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  

for(const ball of balls){
  ball.x += ball.dx;
  ball.y += ball.dy;
}
  a += da;
  b += db;

  requestAnimationFrame(draw);
}

draw()

