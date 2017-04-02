// JavaScript Document
var d = 0,z = 0;//d储存当前的li序列号，z储存之前的li的序列号
function auto(){
	d++;
	if(d > 5){d = 0;}
	$("div#pic ul.img li").removeClass("left").removeClass("right");//执行动画前先清除遗留的样式
	$("div#pic ul.img li").eq(z).removeClass("big").addClass("right").delay(500).animate({left:"5000px"},300,function(){
		//移除之前图片的样式，并添加新样式delay（）设置一个停留的时间；这是执行左移动动画之后执行的方法
		$("div#pic ul.img li").eq(d).css("left","-5000px").addClass("right");//给当前图片添加样式
		$("div#pic ul.img li").eq(d).animate({left:"0px"},400,function(){
			//这是执行左移动动画之后执行的方法
			setTimeout(function(){
				//setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式
				$("div#pic ul.img li").eq(d).removeClass("right").addClass("big");//找到当前图片，给其添加及移除样式
				},500);
			});
		});
		z = d;//之前图片变成当前图片
		$("div#nav div.txt").text(d+1+'/6');//改变文本内容
	};
function left(){
	z = d - 1;
	if(z < 0){z = 5;}
	$("div#pic ul.img li").removeClass("left").removeClass("right");//执行动画前先清除遗留的样式
	$("div#pic ul.img li").eq(d).removeClass("big").addClass("left").delay(500).animate({left:"-5000px"},300,function(){
		//移除当前图片的样式，delay（）设置一个停留的时间；这是执行左移动动画之后执行的方法
		$("div#pic ul.img li").eq(z).css("left","5000px").addClass("left");//给z之前图片添加样式
		$("div#pic ul.img li").eq(z).animate({left:"0px"},400,function(){
			//这是执行左移动动画之后执行的方法
			setTimeout(function(){
				//setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式
				$("div#pic ul.img li").eq(z).removeClass("left").addClass("big");//找到当前图片，给其添加及移除样式
				},500);
			});
		});
		d = z;//当前图片变成之前图片
		$("div#nav div.txt").text(z+1+'/6');//改变文本内容
	};
var _click = 0,int;
$("div#nav div.right").click(function(){
	_click++;
	if(_click == 2){
		int = setInterval("auto()",3000);//setInterval()是定时函数，实现单位时间内重复调用自定义方法
	}else if(_click >= 2){
		_click = 0;
	}
	});
$("div#nav div.left").click(function(){
	clearInterval(int);//清除自动轮播
	})