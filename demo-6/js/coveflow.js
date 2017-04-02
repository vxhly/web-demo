/**
@像itunes一样的照片列表
@作者towebapp.com
@version 0.1.1
http://towebapp.com/

Copyright 2012-2014 "towebapp.com"
Dual licensed under the MIT and GPL licenses.
*/

;(function($){
		   
    $.fn.extend({
				
    	coveflow:function (opts) {	
		
		this.options = {
			width:480,
			scale:.6,
			startIndex:-1,
			step:100,
			flat:100,
			duration:500,
			onActivateIndex:function(){},
			onIndexChange:function(){},
			onIndexChanging:function(){},
			onIndexChanged:function(){},
		};
		
		$.extend( true, this.options, opts );
		
		var options=this.options,
			self=this,
			startIndex=options.startIndex,
			wrapper	= $(this),
		    elem	= wrapper.find('div'),
			elng  = elem.length,
			index = -1,
			oindex=-1;
		
		this.init=function(){
			if(startIndex==-1){
				startIndex=Math.floor(elng/2);
			}else if(startIndex>elng-1){
				ostartIndex=elng-1;
			};
			$(elem).live('click',function(){
				self.setIndex(elem.index($(this)));	
				if($.isFunction(options.onActivateIndex)){
					options.onActivateIndex(elem.index($(this)));
				}
			});
			this.setIndex(startIndex);
			
		};
		
		this.setIndex=function(num){
			if(index!=num){
				oindex=index;
				index=num;
				update(num);
				if($.isFunction(options.onIndexChange)){
					options.onIndexChange(index,oindex);
				}
			}
		};
		
		var update=function(num){
			if(num>oindex){
				move(oindex+1);
			}else{
				move(oindex-1);
			}
		};
		var move=function(num){
			if(num!=index){
				var timing='linear';
				var duration='200ms';
				setTimeout(function(){
							if(num>oindex){
								move(num+1);
							}else{
								move(num-1);
							}			
				},200);
			}else{
				var timing='ease-out';
				var duration=options.duration+'ms';
				setTimeout(function(){
						if($.isFunction(options.onIndexChanged)){
						options.onIndexChanged(num);
					}								
				},options.duration);
			};
			$(elem).css({
								  '-webkit-animation-duration':duration,
								  '-webkit-animation-timing-function':timing
								 });
			$(elem).find('li').css({
								  '-webkit-animation-duration':duration,
								  '-webkit-animation-timing-function':timing
								 });
			$(elem[num]).addClass('flat').removeClass('turnRight').removeClass('turnLeft').css({zIndex:elng,
								  '-webkit-transform':'translateX('+(-options.width)/2+'px) scale(1)'
								 });
			
			for(i=0;i<num;i++){
					var left=-(options.width)/2-options.flat-(num-i)*options.step;
					$(elem[i]).addClass('turnLeft').removeClass('turnRight').removeClass('flat').css({zIndex:i+1,
								  '-webkit-transform':'translateX('+left+'px)   scale('+options.scale+')'
								 });
				};
			for(i=elng-1;i>num;i--){
					var left=-(options.width)/2+options.flat+(i-num)*options.step;
					$(elem[i]).addClass('turnRight').removeClass('turnLeft').removeClass('flat').css({zIndex:elng-i,
								  '-webkit-transform':'translateX('+left+'px) scale('+options.scale+')'
								 });
				};
			if($.isFunction(options.onIndexChanging)){
					options.onIndexChanging(num);
				}
			
		};
		this.init();
	  }
   });
	
	
})(jQuery);

//$('#coveflow').coveflow({onIndexChanged:function(index){alert(index)}});