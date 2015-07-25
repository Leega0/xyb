$(function(){
	// banner
  	$('.bxslider').bxSlider({
  		mode:'fade',
      controls:false,
  		auto:true,
  		responsive:true
  	});
  	// countdown

  	var ts1 = '2015-07-01 17:40:02';
  	var ts2 = '2015-08-10 11:00:00.0';
  	var da =ts1.replace("年","-").replace("月","-").replace("日","").replace(/-/g,"/").split(/\/|\:|\ /);
  	systemTime = new Date(da[0], da[1] - 1, da[2], da[3], da[4], da[5]);
  	var da2 =ts2.replace("年","-").replace("月","-").replace("日","").replace(/-/g,"/").split(/\/|\:|\ /);
  	activitiDate = new Date(da2[0], da2[1] - 1, da2[2], da2[3], da2[4], da2[5]);
  	if(systemTime < activitiDate){ 
  		$('#timedown').countdown({
  			timestamp: activitiDate,
  			timeNow: systemTime,
  			callback: function(days, hours, minutes, seconds) {
  				if(days<=0&&hours <= 0 && minutes <= 0 && seconds <= 0) {
  					$('.a_now').show();
  					$('.a_before').hide();
  					$('.a_after').hide();
  				}	
  			}
  		});
  		$('.a_now').hide();
  		$('.a_before').show();
  		$('.a_after').hide();
  	} else if (systemTime > activitiDate) {
  		$('.a_now').show();
  		$('.a_before').hide();
  		$('.a_after').hide();
  	};
  	if (false) {
  		$('.a_now').hide();
  		$('.a_before').hide();
  		$('.a_after').show();
  	}
// 用户评论滚动效果
var scrtime;
    $("#reviews").hover(function(){
         clearInterval(scrtime);
    },function(){
        scrtime = setInterval(function(){
              var ul = $("#reviews ul");
                var liHeight = ul.find("li:last").height();
                ul.animate({marginTop : liHeight+40 +"px"},1000,function(){
                  ul.find("li:last").prependTo(ul)
                  ul.find("li:first").hide();
                  ul.css({marginTop:0});
                  ul.find("li:first").fadeIn(1000);
                });        
        },3000);
     }).trigger("mouseleave");
  });
// 用户评论
$("#write_review").focus(function(){
   $(".text-num-last").show(300);
   //获取输入字数
   $(this).keyup(function() {
      //获取输入框内的文字长度
      var numL = $(this).val().length;
      _val=$(this).val(); 
      if (numL <= 120) {
        numL = 120 - numL;
        $("#text_num").html(numL)
      }
      else if(numL>121){
        $(this).val(_val.substring(0,120)); 
         //$(".text-num-last").html('不能再写多啦~'+'<i class="ui-icon-triangle-red-bottom"></i>')
      }
   });
});
$("#write_review").blur(function(){
  $(".text-num-last").hide(300);
});