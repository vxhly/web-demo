// JavaScript Document
/*禁止本来右键的功能：oncontextmenu;禁止选择：onselectstart；禁止拖放：ondragstsrt；禁止copy：oncopy*/
//禁止浏览器自带的右键菜单功能
document.oncontextmenu = function() {
  return false;
};
//启用自定义的右键菜单功能
$(document).mousedown(function(e, X) {
  var key = e.which; //获取鼠标按下去的状态，1为左键，2为滚轮键；3为右键
  if (key == 3) {
    _top = ($(window).height() - e.clientY) < $("#menu").height() ? (e.clientY - $("#menu").height()) : e.clientY; //获取鼠标点击时Y轴的位置
    _left = ($(window).width() - e.clientX) < $("#menu").width() ? (e.clientX - $("#menu").width()) : e.clientX;; //获取鼠标点击时X轴的位置
    $("#menu").show().css({
      left: _left,
      top: _top
    }); //将右键菜单定位到鼠标的位置
  }
});
$(document).click(function() {
  $("#menu").hide();
});
$("#menu ul li").click(function() {
  var _index = $(this).index();
  if (_index == 0) {

  } else if (_index == 1) {

  } else if (_index == 2) {

  } else if (_index == 3) {
    location.reload([false]);
  } else if (_index == 4) {

  } else if (_index == 5) {
    $("#bg").addClass("opt");
  } else {

  }

});
$("#bg .title .close").click(function() {
  $("#bg").removeClass("opt");
});
$("#bg ul li").click(function() {
  var simg = $(this).find("img").attr("src"); //获取路径
  var bimg = simg.replace("s_", ""); //截取路径
  $("body").css({
    "background": "url(" + bimg + ")"
  });
});
