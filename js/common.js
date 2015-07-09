$(function(){
	// 顶部菜单栏展开
	$(".myhome-account").hover(function() {
		$(".home-account-list").show()
	}, function() {
		$(".home-account-list").hide()
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
//判断浏览器是否支持placeholder属性
//   supportPlaceholder='placeholder'in document.createElement('input'),
//  
//   placeholder=function(input){
//  
//     var text = input.attr('placeholder'),
//     defaultValue = input.defaultValue;
//  
//     if(!defaultValue){
//  
//       input.val(text).addClass("phcolor");
//     }
//  
//     input.focus(function(){
//  
//       if(input.val() == text){
//    
//         $(this).val("");
//       }
//     });
//  
//   
//     input.blur(function(){
//  
//       if(input.val() == ""){
//        
//         $(this).val(text).addClass("phcolor");
//       }
//     });
//  
    //输入的字符不为灰色
//     input.keydown(function(){
//   
//       $(this).removeClass("phcolor");
//     });
//   };
 
  //当浏览器不支持placeholder属性时，调用placeholder函数
//   if(!supportPlaceholder){
//  
//     $('input').each(function(){
//  
//       text = $(this).attr("placeholder");
//  
//       if($(this).attr("type") == "text"){
//  
//         placeholder($(this));
//       }
//     });
//   }
// 详情页tab切换
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
$('.btn-xtb-invest').on('click', function() {
  layer.open({
      type:2,
      title:false,
      shadeClose:true,
      area: ['500px','580px;'],
      content:['layer-buy-xtb.htm','no']
    })
});
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