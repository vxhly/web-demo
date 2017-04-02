// JavaScript Document
var i = 0; //存放li的下标
var time = 0; //存放定时器
$("div.box div.nav ul li").click(function() {
  i = $(this).index(); //获取当前点击的li的序列号
  auto();
});
//封装点击轮播效果方法
function auto() {
  $("div.nav ul li").eq(i).addClass("bd").siblings().removeClass("bd");
  $("div.pic ul li").eq(i).fadeIn(300).siblings().fadeOut(300); //fadeIn()在单位时间内淡入，fadeOut()在单位时间内淡出
  $("div.pic ul li").eq(i).find(".img1").css({
    left: "-760px"
  }); //find()查询当前的li下的标签
  $("div.pic ul li").eq(i).find(".img2").css({
    display: "none",
    left: "-15px"
  });
  $("div.pic ul li").eq(i).find(".img1").animate({
    left: "0px"
  }, 500, function() {
    //这里是前一个动画执行完后，执行的动画
    $("div.pic ul li").eq(i).find(".img2").css({
      display: "block"
    });
    $("div.pic ul li").eq(i).find(".img2").animate({
      left: "0px"
    }, 500);
  });
};
//封装自动轮动方法
function junmper() {
  i++;
  if (i > 4) {
    i = 0;
  };
  auto();
};
time = setInterval("junmper()", 3700); //setInterval()是定时函数，实现单位时间内重复调用自定义方法
window.onload = auto; //当页面加载后立即调用方法
$("div.nav ul li").hover(function() {
  //鼠标移到这里执行的事件
  clearInterval(time); //清除自动轮播
}, function() {
  //鼠标移出这里执行的事件
  time = setInterval("junmper()", 3700); //setInterval()是定时函数，实现单位时间内重复调用自定义方法
});
