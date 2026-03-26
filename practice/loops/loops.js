let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

for(let y = 0; y<=200; y+=100){
	for(let x = 0; x< 800; x+=100){
		ctx.fillRect(x, y, 50, 20);
	}
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

for(y=100; y<800; y+=100){
	for(x=0; x<800; x+=100){
		if(x<y){
			ctx.fillRect(x,y,50,20);
		}
	}
}
canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

for(y=0; y<800; y+=100){
        for(x=0; x<800; x+=100){
                if(x!=y){
                        ctx.fillRect(x,y,50,20);
                }
        }
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

for(y=0; y<=800; y+=200){
        for(x=0; x<=800; x+=200){
		ctx.fillRect(x,y,100,100);
        }
}
for(y=100; y<=800; y+=200){
	for(x=100; x<=800; x+=200){
		ctx.fillRect(x,y,100,100);
	}
}

