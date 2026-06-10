const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// border
ctx.strokeStyle = "black";
ctx.lineWidth = 8;
ctx.rect(0,0,1375,800);
ctx.stroke();

// head line
ctx.beginPath();
ctx.moveTo(0,85);
ctx.lineTo(1375,85);
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.stroke();

// head background
ctx.fillStyle = "#ffffff";
ctx.fillRect(0,0,1375,85); 

// text
ctx.font = "48px TimesNewRoman";
ctx.fillStyle = "#000000";
ctx.fillText("Home", 600, 70);

// Draw boxes
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.rect(975,150,385,625);	// picture of me 
ctx.rect(450,150,475,450);	// text about me
ctx.rect(25,625,935,150);	//links and stuff
ctx.rect(25,150,400,450);	//picture of me
ctx.stroke();
ctx.fill();
