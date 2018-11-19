<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>刮刮乐</title>
	<style>
		html,body{
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		}
	/*	#cas{
			border: 1px solid #000;
			background: url(images/wipe1.jpg) center 0 no-repeat;
			background-size: cover;
		}*/
		/*#canvas{
			border: 1px solid #000;
			position: relative;
			width: 300px;
			height: 200px;
			left: 377px;
			bottom: 667px;
			font-size: 30px;
			color: red;
		}*/
	</style>
</head>
<body>
	<canvas id="cas" width="375" height="667"></canvas>

<!-- 	<div id="canvas">
		在主分支上的修改,在yhx01分支上的修改！
	</div> -->
</body>
</html>
<script src="js/wipe.js" type="text/javascript"></script>
<script>
var wipeConfig={
	id:'cas',
	coverType: 'image',//取值类型color、image
	color:"",
	imgUrl : "images/wipe2.jpg",//前面的覆盖图
	backImgUrl:"images/2.jpg", //背景图片
	width:"375", //canvas宽
	height:"667", //canvas高
	radius:"20", //涂抹笔的半径
	transpercent:50,
	callback:wipedCallback	//用户自定回调函数的名称
}
var cas01 = new Wipe(wipeConfig);
// console.log(cas01);
// console.log("" && "ok");
function wipedCallback(percent){
	if (percent > 50) {
		console.log("透明面积超过50%，查看底图");
	};
};

</script>
