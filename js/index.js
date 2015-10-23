$(function(){
	// banner
  slider = $('.bxslider').bxSlider({
    mode:'fade',
      controls:false,
      auto:true,
      responsive:true
      });
  slider.reloadSlider();
  function onSliderLoad() {
    //点击后继续自动播放
    $(".bx-pager-item a").click(function() {
     var thumbIndex = $('.bx-pager-item a').index(this);
     slider.goToSlide(thumbIndex);
     var _jGtime=slider.startAuto();
     setTimeout(_jGtime, 800);
     $('.bx-pager-item a').removeClass('active');
     $(this).addClass('active');
       return false;
  }); 
   }
   //onSliderLoad();
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
        },5000);
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