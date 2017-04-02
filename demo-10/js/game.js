// JavaScript Document
var simg = '' //储存图片地址
var bimg = '' //存储图片地址
var _index //存储序列号
$("div.title img.close").click(function() {
  //当鼠标点击时执行的事件
  $("div#xc").hide(); //隐藏div
});
$("div.con img.album").click(function() {
  $("div#xc").show(); //显示div
})
//点击切换背景图片
$("div#xc ul li").click(function() {
  _index = $(this).index(); //获取序列号
  $("div#xc").hide(); //隐藏div
  simg = $(this).find("img").attr("src"); //获取小图片的地址
  bimg = simg.replace("s_", ""); //把小图地址转变成大图地址
  $("div#bigimg img").attr("src", bimg).css("opacity", 0).animate({
    "opacity": 1
  }, 500); //使大图地址得到新值;添加css样式并且执行动画
});
//点击右切换按钮
$("img.forward").click(function() {
  _index++;
  if (_index > 8) {
    _index = 0
  } //当序列号大于8，回到第一张
  simg = $("div#xc ul li").eq(_index).find("img").attr("src"); //获取小图片的地址
  bimg = simg.replace("s_", ""); //把小图地址转变成大图地址
  $("div#bigimg img").attr("src", bimg).css("opacity", 0).animate({
    "opacity": 1
  }, 500); //使大图地址得到新值;添加css样式并且执行动画
});
//点击左切换按钮
$("img.back").click(function() {
  _index--;
  if (_index < 0) {
    _index = 8
  } //当序列号小于0，回到最后一张
  simg = $("div#xc ul li").eq(_index).find("img").attr("src"); //获取小图片的地址
  bimg = simg.replace("s_", ""); //把小图地址转变成大图地址
  $("div#bigimg img").attr("src", bimg).css("opacity", 0).animate({
    "opacity": 1
  }, 500); //使大图地址得到新值;添加css样式并且执行动画
});
