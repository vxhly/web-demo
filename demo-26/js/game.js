// JavaScript Document
$("div.nav li.txt").mouseover(function(){
	//当鼠标移动上去时执行的事件
	$(this).addClass("on").siblings().removeClass("on");//当鼠标移动上去时，给当前的li添加样式，给其余的li去除样式
	var le = $(this).position().left - 15;//this获取当前鼠标移动上去的.txt；position().left获取.txt距离它的父元素的左边距；-15使.rad放在.txt的正中间,即改变宽度
	var wid = $(this).width() + (60 - 28);//this获取当前鼠标移动上去的.txt；width()获取当前.txt的宽度;+(60 - 28)使宽度更符合文字的长度
	$("div.nav li.rad").stop().animate({'left':le+'px','width':wid+'px'},500);//实现.rad的移动动画,stop()停止当前在运行的动画
});
$("div.nav").mouseleave(function(){
	//当鼠标移除时，.rad回到最初位置
	$("div.nav li.txt").eq(0).addClass("on").siblings().removeClass("on");//当鼠标移除时，给第一个li添加样式，去除其余的li样式
	$("div.nav li.rad").stop().animate({'left':"-15px",'width':"60px"},500);//实现.rad的移动动画,stop()停止当前在运行的动画
});
$(window).scroll(function(){
	//当窗口滚动时执行的事件
	var dScr = $(document).scrollTop();//获取文档滚动过的高度
	var wHei = $(window).height();//获取窗口滚动过的高度
	var a =parseInt( dScr / wHei );
	//将文档滚动过的高度除以窗口滚动过的高度等到当前的背景的序号;parseInt()去除小数部分
	$("div.left ul li").eq(a).addClass("active").siblings().removeClass("active");//给获取到的序号的li添加样式，给其余的li去除样式
});