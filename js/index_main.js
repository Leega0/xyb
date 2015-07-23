/*入口脚本*/
require.config({
    baseUrl: "js/",
    paths:{
			"jquery":"lib/jquery",
			"highcharts":"lib/highcharts",
			"slider":"plugins/jquery.bxslider.min",
			"countdown":"plugins/jquery.countdown",
		  },
	shim:{
		'highcharts':['jquery'],
		'slider':['jquery'],
		'countdown':['jquery']
	}
});
require(["jquery","slider","countdown","highcharts"],function($){
	// banner
  	$('.bxslider').bxSlider({
  		mode:'fade',
      	controls:false,
      	preloadImages:'all',
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
                ul.find("li:last").prependTo(ul) ;
                ul.find("li:first").animate({opacity:1}, 500);
                ul.find("li:last").animate({opacity:0}, 500);       
        },3000);
     }).trigger("mouseleave");
    //
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
    //
    //获取数据
			$.getJSON('js/chartdata.json',null, function(data) {
			$('#main_chart').highcharts({
				chart: {
					type: 'area',
					style:{
						color:'#ddd'
					}
				},
				title: {
					text: ' '
				},
				subtitle: {
					text: '年化收益',
					align: 'left',
					x: 0,
					style:{
						color:'#bbbbbb'
					}
				},
				xAxis: {
					categories: data['categories'],
					lineColor: '#ebebeb',
					tickmarkPlacement:'on',
					tickColor:'#ebebeb',
					tickInterval:1,
					tickWidth: 0,
                	gridLineWidth: 1

				},
				yAxis: {
					title: {
						text: ''
					},
					tickInterval:5,
					tickPositions: [5, 6, 7, 8, 9],
					labels: {
						formatter: function() {
							return this.value +''
						}
					}
				},
				plotOptions:{
					series:{
						color:'#d5eafd',
						lineColor:'#399df5',
						marker:{
							enabled:false,
							radius:3,
							fillColor:'#ffffff',
							lineWidth:1,
							lineColor:'#399df5'
						}
					}
				},
				tooltip: {
					crosshairs: true,
					shared: false,
					shadow:false,
					style:{
						padding:5
					},
					formatter: function() {  
                    return '<span style="color:#fff">'+ this.y +'</span>';  
            		},  
					backgroundColor:"#3ea3fe",
					borderWidth : 0,
					borderRadius : 6
				},
				navigation: {
					buttonOptions: {
						enabled: false
					}
				},
				credits:{
				     enabled:false // 禁用版权信息
				 },
				 legend:{
				 	enabled:false 
				 },
				 series: [{
				 	name: data['series']['name'],

				 	data:data['series']['data']

				 }]
});
		});
//
})
