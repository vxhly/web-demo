	/**
	 * Lottery.jq.v1.0.js
	 * @anthor   欧鹏程
	 * @version  1.0
	 * @log  v1.0  基于jquery基础，编写的插件
	 */

	var Lottery = function(num, txt, array, sleep, display) {
	  /*
	    @param  num     => 需要生成随机数的个数
	    @param  txt     => 默认生成的文本
	    @param  array   => 循环的数组
	    @param  display => 存放随机数的盒子
	  */
	  this.num = num;
	  this.txt = txt;
	  this.array = array;
	  this.sleep = sleep;
	  this.display = display;

	  var result = this.result(); // 生成默认的代码
	}

	Lottery.prototype.result = function() {
	  var num = this.num;

	  for (var j = 0; j < num; j++) {
	    var span = $('<span>' + this.txt + (j + 1) + '</sapn>');
	    this.display.append(span);
	  }
	}

	Lottery.prototype.draw = function() {
	  var display = this.display;
	  var array = this.array;
	  var num = this.num > array.length ? array.length : this.num;
	  var temp = [];
	  for (var i = 0; i < num; i++) {
	    var rand = Math.floor(Math.random() * array.length);
	    var str = ',' + temp.join(",") + ',';
	    if (str.indexOf("," + rand + ",") == -1) {
	      temp.push(rand);
	    } else {
	      i--;
	      continue;
	    }
	  }
	  return temp;
	}

	Lottery.prototype.start = function() {
	  // 开始随机
	  var me = this;
	  if (me.array.length === 0) {
	    alert('全部人员已经抽取完毕, 没得抽了.');
	    return;
	  } else if (!me.interval) {
	    me.interval = setInterval(function() {
	      var result = me.result = me.draw(); // 生成随机数

	      var _span = me.display.find('span');
	      for (var i = 0; i < _span.length; i++) {
	        _span.eq(i).text(me.array[result[i]]); // 向页面输出随机数
	      }

	    }, me.sleep);
	  }
	}

	Lottery.prototype.stop = function() {
	  // 停止随机
	  if (!!this.interval) {
	    clearInterval(this.interval); // 清楚定时器
	    this.interval = null;

	    var ranNum = new Array();
	    for (var i = 0; i < this.result.length; i++) {
	      ranNum.push(this.array[this.result[i]]);
	    }

	    // 刷新数组
	    var temp = new Array();
	    var str = ',' + this.result.join(',') + ',';
	    for (var i = 0; i < this.array.length; i++) {
	      if (str.indexOf(',' + i + ',') == -1) {
	        temp.push(this.array[i]);
	      }
	    }
	    this.array = temp;

	    return ranNum;
	  }
	}
