$("#gesturepwd").GesturePasswd({
  backgroundColor: "#252736", //背景色
  color: "#FFFFFF", //主要的控件颜色
  roundRadii: 25, //大圆点的半径
  pointRadii: 6, //大圆点被选中时显示的圆心的半径
  space: 30, //大圆点之间的间隙
  width: 240, //整个组件的宽度
  height: 240, //整个组件的高度
  lineColor: "#00aec7", //用户划出线条的颜色
  zindex: 100 //整个组件的css z-index属性
});

$("#gesturepwd").on("hasPasswd", function(e, passwd) { //当用户手势指示完毕，组件会触发一个hasPasswd事件，表示已取得用户所输入的密码。该事件会带有一个sting类型的参数，为用户的密码。
  var result;
  if (passwd == "1235789") {
    result = true;
  } else {
    result = false;
  }
  if (result == true) {
    $("#gesturepwd").trigger("passwdRight"); //trigger方法触发被选元素的指定事件类型
    setTimeout(function() {
      //密码验证正确后的其他操作，打开新的页面等。。。
      alert("密码正确！")
    }, 500); //延迟半秒以照顾视觉效果
  } else {
    $("#gesturepwd").trigger("passwdWrong");
    setTimeout(function() {
      //密码验证正确后的其他操作，打开新的页面等。。。
      alert("密码错误！")
    }, 500); //延迟半秒以照顾视觉效果
  }
});
