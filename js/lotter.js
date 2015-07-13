/** 
 *  
 * jQuery scrollQ plugin li上下滚动插件
 * @name jquery-scrollQ.js 
 * line 显示li行数 
 * scrollNum 每次滚动li行数
 * scrollTime 滚动速度 单位毫秒
 * 
 */  
// (function($){  
//     var status = false;  
//     $.fn.scrollQ = function(options){  
//         var defaults = {  
//             line:6,  
//             scrollNum:1,  
//             scrollTime:2000
//         }
// 		var options=jQuery.extend(defaults,options);
// 		var _self = this;
// 		return this.each(function(){  
// 			$("li",this).each(function(){
// 				$(this).css("display","none");
// 			})
// 			$("li:lt("+options.line+")",this).each(function(){
// 				$(this).css("display","block");
// 			})
// 			function scroll() {
// 				for(i=0;i<options.scrollNum;i++) {
// 					var start=$("li:first",_self);
// 					start.fadeOut(100);
// 					start.css("display","none");
// 					start.appendTo(_self);
// 					$("li:eq("+(options.line-1)+")",_self).each(function(){
// 						$(this).fadeIn(500);
// 						$(this).css("display","block");
// 					})
// 				}
// 			}
// 			var timer;
// 			timer = setInterval(scroll,options.scrollTime);
// 			_self.bind("mouseover",function(){
// 				clearInterval(timer);
// 			});
// 			_self.bind("mouseout",function(){
// 				timer = setInterval(scroll,options.scrollTime);
// 			});
			
// 		});
//     }
// })(jQuery); 
// $(function(){
// 	 $("#big_award").scrollQ(); 
// 	 $("#now_award").scrollQ({
// 	 	scrollTime:1000
// 	 }); 
// });
function marque(id,time){

	var $swap = $(id);  //滚动区域
	
	var movetotop;  //滚动的变量
	
	$swap.hover(function() {

        clearInterval(movetotop);  //鼠标进入指定的区域停止动画

        },function(){
			
			movetotop=setInterval(function() {  //定义一个滚动时间间隔的方法

                   var li_height = $swap.find('li').height();

                   $swap.find('li:first').animate({marginTop:-li_height + 'px'},time,function() {                                  

                    $swap.find('li:first').css('marginTop',0).appendTo($swap);  //获取到li的高度，向上滚动一个高度，并且用回调函数把css样式调回到原始的初始状态 

                                    });

                   },1000);
			
		}).trigger('mouseleave');

}
$(function(){
	marque(big_award,900);
	marque(now_award,600);
})