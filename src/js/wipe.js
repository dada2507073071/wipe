var cas = document.getElementById('cas');
var context= cas.getContext("2d");
var _w = cas.width;
var _h = cas.height;
var t = 0;
var radius = 20;
var moveX = 0;
var moveY = 0;
var moveZ = 0;
var moveW = 0;
var isMouseDown = false;//表示鼠标的状态，是否按下，默认未按下false，按下为true；
function drawLine(context){
	if (isMouseDown) {
		context.save();
		context.beginPath();
		context.lineCap = "round";
		context.moveTo(moveX,moveY);
		context.lineWidth=radius*2;
		context.lineTo(moveZ,moveW);
		context.stroke();
		context.restore();
	}
}
function drawRect(context){
	context.fillStyle="#666";
	context.fill();
	context.fillRect(0,0,_w,_h);
	context.globalCompositeOperation = "destination-out";
}

// function drawPornt(context,moveX,moveY){
// 	context.save();
// 	context.beginPath();
// 	// context.translate(150,250);
// 	context.arc(moveX,moveY,radius,0,2*Math.PI);
// 	context.fillStyle="red";
// 	context.fill();
// 	context.restore();
// };
	cas.addEventListener("mousedown",function(evt){
		var event = evt || window.event;
		isMouseDown = true;
		//获取鼠标在视口的坐标，传递参数到drawPornt
		moveX = event.clientX;
		moveY = event.clientY;
		// drawLine(context,moveX,moveY);
	},false);
	cas.addEventListener("mousemove",fn1,false);
	function fn1(evt){
			var event = evt || window.event;
			moveZ = event.clientX;
			moveW = event.clientY;
			drawLine(context,moveX,moveY,moveZ,moveW);
			//每次结束点变成下一次的开始点
			moveX = moveZ;
			moveY = moveW;
	}
	cas.addEventListener('mouseup',function(evt){
		// cas.removeEventListener("mouseup",fn1,false);
		// isMouseDown还原为false
		isMouseDown = false;
		if(getTransparencyPercent(context)>50){
			// alert("超过了50%的面积");
			alert("这是我曾血拼打下的江山，曾经追她穷如狗，现在看她嫌她丑，扔之可惜，牵之傻逼!!!");
			// drawRect(context);
			clearRect(context);
		}
	},false);
	function clearRect(context){
		context.clearRect(0,0,_w,_h);
	}
	function getTransparencyPercent(context){
		var imgData = context.getImageData(0,0,_w,_h);
		for(var i=0;i<imgData.data.length;i+=4){
			var a = imgData.data[i+3];
			if ( a === 0){
				t++;
			}
		}	
		var percent = (t / (_w*_h) )*100;
		console.log("透明点个数：" + t + "个");
		console.log("占总面积"+ Math.ceil(percent)+"%");
		return Math.ceil(percent);
	}
	window.onload = function(){
	drawRect(context);
	// drawPornt(context);
};

