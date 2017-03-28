// JavaScript Document
var arr = ["rot","tb","sca"];//定义一数组存放class名
var a,b;
$("#wrap ul li").hover(function(){
	//当鼠标移动上去时执行以下事件
	while(b==a)//保证前后两次生成的随机数不一致
	{
	a = Math.floor(Math.random()*3);//生成0-2之间的随机数,Math.random()只生成0-1之间的数, Math.floor()或parseInt取整数
	}
	/*alert(a);*//*打印生成的随机数*/
	$(this).addClass(arr[a]);//当鼠标移动上去时添加class=“tb”
	b=a;
},function(){
	//当鼠标离开时执行以下事件
	$(this).removeClass(arr[a]);//当鼠标离开时去掉class=“tb”
});