// JavaScript Document
$(".pic ul li").hover(function() {
  //当鼠标经过li的时候，执行下面事件，hover即css中的一个伪类
  $(this).stop(true).animate({
    width: "789px"
  }, 500).siblings().stop(true).animate({
    width: "100px"
  }, 500)
  //stop(true)在执行当前动画时，停止所有的动画；用500毫秒将li的宽度变为789px，this为当前鼠标经过的li，animate()为执行的事件,siblings()选中剩下的li,使用500毫秒把li的宽度变为100px
});
