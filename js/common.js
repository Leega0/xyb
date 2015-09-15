$(function(){
	// 顶部菜单栏展开
	$(".myhome-account").hover(function() {
		$(this).addClass('expand')
	}, function() {
		$(this).removeClass('expand')
	});
	// menu 菜单栏展开
	$(".menu-invest").hover(function() {
    $(this).addClass('expand')
		$(".menu-invest-list").stop().fadeIn(300,function(){
      $(this).animate({"marginTop": "-5px"}, 300)
    })
	}, function() {
    $(this).removeClass('expand')
		$(".menu-invest-list").stop().fadeOut(300,function(){
      $(this).animate({"marginTop": "0px"}, 100)
    });
	});
	// footer 菜单栏展开
	$(".group-list").hover(function() {
		$(".menber-list").stop().fadeIn(300)
	}, function() {
		$(".menber-list").stop().fadeOut(300)
	});
    // 返回顶部
    function w_screen(){
    if($(window).width() <= 1200){
      $("#index_popbar").hide();
    }else if($(window).width() > 1200){
      $("#index_popbar").show();
    }
  }
  w_screen();
  window.onresize=function(){
    w_screen();
    // barEdge = ($(document).width()-1200) / 2 - $pobarWidth - 15;
    // $popbar.css('right', barEdge);
  }
  var $scrollto=$("#scrollto");
   $(window).scroll(function(){  
                if ($(window).scrollTop()>100){  
                    $scrollto.show(300);  
                }  
                else  
                {  
                   $scrollto.hide(300);  
                }});//end
   $scrollto.click(function(){  
                $('body,html').animate({scrollTop:0},800);  
                return false;  
            }); 
    var $popbar = $('.ui-popbar')//,
        // $pobarWidth = $popbar.width(),
        // barEdge = ($(document).width()-1200) / 2 - $pobarWidth - 15;
    $scrollto.hide();
    $popbar.css('right', '10px');
    var $wechat = $('.ui-code');
        $wechatImg = $wechat.next('img');

    $wechat.bind('mouseover', function() {
        $wechatImg.css('display', 'block');
    });
    $wechat.bind('mouseleave', function() {
        $wechatImg.css('display', 'none');
    });
//模块加载
$page = $(document).find('.content').find('div[data-page]');
$page_radar = $(document).find('.contentb').find('div[data-page]');
switch ($page.data('page')) {
  case 'detail':
  detailInit();
  break;
}
if($page_radar.data('page')=='radar'){
  radarScore();
}
function detailInit() {
    var $detailTab = $('.detail-tabs'),
        $detailTabItem = $('.detail-tabs-item', $detailTab),
        $detailList = $('.detail-list');

    detailTabInit();
    detailListInit();

    function detailTabInit() {
        $detailTabItem.first().addClass('detail-tabs-active').siblings('.detail-tabs-active').removeClass('detail-tabs-active');
        $detailTabItem.bind('click', function() {
            $(this).addClass('detail-tabs-active').siblings('.detail-tabs-active').removeClass('detail-tabs-active');
            detailListInit();
        });
    }

    function detailListInit() {
        var index = $('.detail-tabs-active').index();
        $detailList.eq(index).css({
            display: 'block'
        }).siblings('.detail-list').css({
            display: 'none'
        })
    }
}
});
$(".ui-input-body").focusin(function(){
      $(this).css({
        borderColor: '#2c98f3',
        boxShadow: '0 0 0 1px #2c98f3'
      });
    });
    $(".ui-input-body").focusout(function(){
      $(this).css({
        borderColor: '#ddd',
        boxShadow: 'none'
      });
    })