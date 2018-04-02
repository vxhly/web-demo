// JavaScript Document
$("a.but").click(function(){
	$("div.scrollcon").slideToggle("slow");
});
$(".scroll ul li").click(function(){
	var simg = $(this).find("img").attr("src");//获取img的图片地址
	var bimg = simg.replace(/-\d*/,"");//替换地址
	$("body").css({"background":"url("+bimg+")"});
});