$(function(){
	// 顶部菜单栏展开
	$(".myhome-account").hover(function() {
		$(this).addClass('expand')
	}, function() {
		$(this).removeClass('expand')
	});
	// menu 菜单栏展开
	$(".menu-invest").hover(function() {
		$(".menu-invest-list").show()
	}, function() {
		$(".menu-invest-list").stop().hide()
	});
	// footer 菜单栏展开
	$(".group-list").hover(function() {
		$(".menber-list").stop().slideDown();
	}, function() {
		$(".menber-list").stop().slideUp();
	});
    // 返回顶部
    function w_screen(){
    if($(window).width() <= 1280){
      console.log(window.screen.width);
      $("#index_popbar").hide();
    }else if($(window).width() > 1280){
      $("#index_popbar").show();
    }
  }
  w_screen();
  window.onresize=function(){
    w_screen();
    barEdge = ($(document).width()-1200) / 2 - $pobarWidth - 15;
    $popbar.css('right', barEdge);
  }
    var $popbar = $('.ui-popbar'),
        $pobarWidth = $popbar.width(),
        barEdge = ($(document).width()-1200) / 2 - $pobarWidth - 15;
    $popbar.css('right', barEdge);

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
// 礼金展开
  $(".detail-icons").bind('click',function(){
    $(this).toggleClass('icon-minus');
    $(this).next().children('.money-last').toggle();
    $(this).next().children('.gift-cards').toggle();
    $(this).nextAll('.btn-recharge').toggleClass('ui-mt24');
  })
//弹出层
$("#btn_recharge").on("click",function(){
    layer.open({
      type:2,
      title:false,
      shadeClose:true,
      area: ['500px','384px'],
      content:['layer-recharge.htm','no']
    })
});
// 信投宝弹出层
// 债券转让弹出层
$('.btn-bond-invest').on('click', function() {
  layer.open({
      type:2,
      title:false,
      shadeClose:true,
      area: ['500px','580px;'],
      content:['layer-buy-bond.htm','no']
    })
});
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