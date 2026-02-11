const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//background

//face 1
ctx.fillStyle = "#ffe2c6";
ctx.beginPath();
ctx.ellipse(
	400,300,//point
	150,//x 
	175,//y
	0,//rotation
	0,//begining
	2*Math.PI//end
);
ctx.fill();
//hair 2
ctx.fillStyle = "#aa660e";
ctx.beginPath();
ctx.arc(400,275,150,Math.PI,11*Math.PI/6);
ctx.fill();
ctx.beginPath();
ctx.arc(400,275,150,3*Math.PI/2,2*Math.PI);
ctx.fill();
//ears 2 
ctx.fillStyle = "#ffe2c6";
ctx.beginPath();
ctx.ellipse(
	550,315,
	20,
	40,
	0,
	0,
	2*Math.PI
);
ctx.fill();
ctx.beginPath();
ctx.ellipse(
	250,315,
	20,
	40,
	0,
	0,
	2*Math.PI
);
ctx.fill();
//eye whites 2
ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(
	325,305,
	40,
	20,
	0,
	0,
	2*Math.PI
);
ctx.fill();
ctx.beginPath();
ctx.ellipse(
	475,305,
	40,
	20,
	0,
	0,
	2*Math.PI
);
ctx.fill();
//irs 2
ctx.fillStyle = "seagreen";
ctx.strokeStyle = "#a0d6b4";
ctx.lineWidth="4";
ctx.beginPath();
ctx.arc(325,305,16,0,2*Math.PI);
ctx.fill();
ctx.stroke();                                                                                                                                                              
ctx.beginPath();
ctx.arc(475,305,16,0,2*Math.PI);                                                                      
ctx.fill();
ctx.stroke(); 
//pupile 4
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(325,305,10,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(475,305,10,0,2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(
	478,301,
	6,
	2,
	Math.PI/6,
	0,
	2*Math.PI
);
ctx.fill();
ctx.beginPath();
ctx.ellipse(
	328,301,
	6,
	2,
	Math.PI/6,
	0,
	2*Math.PI
);
ctx.fill();
//smile 1
ctx.beginPath();
ctx.ellipse(
	400,400,
	60,
	25,
	0,
	2*Math.PI,
	Math.PI
);
ctx.fill();
//nose 2
ctx.fillStyle = "black";
ctx.beginPath();
ctx.ellipse(
	420,325,
	29,
	1,
	4*Math.PI/9,
	0,
	2*Math.PI
);
ctx.fill();
ctx.beginPath();
ctx.ellipse(
	411,352,
	15,
	1,
	0,
	0,
	2*Math.PI
);
ctx.fill();
//arm laft

//arm right

//hand left 

//hand right

//shirt

//neck

//10 fingers


