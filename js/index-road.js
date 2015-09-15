// 所有模块都通过 define 来定义
define(function(require){
	var jQuery = require('jquery');
	require('bxslider');
	$('.bxslider').bxSlider({
			mode:'fade',
			controls:false,
			auto:true,
			responsive:true
		});
	require('countdown');
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
  	};
  	require('highcharts');
  	// 表格
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
//用户
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
    //reveiw
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
//menu
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
		$(".menber-list").stop().slideDown();
	}, function() {
		$(".menber-list").stop().slideUp();
	});
	    function w_screen(){
    if($(window).width() <= 1280){
      $("#index_popbar").hide();
    }else if($(window).width() > 1280){
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
	return jQuery;
})