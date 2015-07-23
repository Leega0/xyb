// hover延时
(function($,g){var h={},id=1,etid=g+'ETID';$.fn[g]=function(e,f){id++;f=f||this.data(etid)||id;e=e||150;if(f===id)this.data(etid,f);this._hover=this.hover;this.hover=function(c,d){c=c||$.noop;d=d||$.noop;this._hover(function(a){var b=this;clearTimeout(h[f]);h[f]=setTimeout(function(){c.call(b,a)},e)},function(a){var b=this;clearTimeout(h[f]);h[f]=setTimeout(function(){d.call(b,a)},e)});return this};return this};$.fn[g+'Pause']=function(){clearTimeout(this.data(etid));return this};$[g]={get:function(){return id++},pause:function(a){clearTimeout(h[a])}}})(jQuery,'mouseDelay');
var polygonNames = {
	'沈阳': 'shenyang',
	'大连': 'dalian',
	'沧州': 'cangzhou',
	'淄博': 'zibo',
	'扬州': 'yangzhou',
	'许昌': 'xuchang',
	'南京': 'nanjing',
	'郑州': 'zhenghzou',
	'石家庄': 'shijiazhuang',
	'洛阳': 'luoyang',
	'南昌': 'nanchang',
	'福建': 'fujian',
	'厦门': 'xiamen',
	'四川': 'sichuan',
	'上海': 'shanghai',
	'西安': 'xian',
	'天津': 'tianjin',
	'北京': 'beijing',
	'深圳': 'shenzhen'
}
var pointPosition = {
	'shenyang': '542|106',
	'dalian': '531|131',
	'cangzhou': '480|155',
	'zibo': '505|168',
	'yangzhou': '531|202',
	'luoyang': '457|204',
	'nanjing': '519|217',
	'zhenghzou': '472|187',
	'shijiazhuang': '454|155',
	'xuchang': '477|211',
	'nanchang': '489|253',
	'fujian': '528|270',
	'xiamen': '518|293',
	'sichuan': '371|240',
	'shanghai': '542|221',
	'xian': '427|198',
	'tianjin': '495|139',
	'beijing': '480|121',
	'shenzhen': '482|317'
}
function offsetXY(e) {
	var pointTip = $('.mapStateTip');
	var mouseX, mouseY, tipWidth = pointTip.outerWidth(),
	tipHeight = pointTip.outerHeight();
	if (e && e.pageX) {
		mouseX = e.pageX;
		mouseY = e.pageY
	} else {
		mouseX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		mouseY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
	}
	mouseX = mouseX - tipWidth / 2 < 0 ? 0 : mouseX - tipWidth / 2;
	mouseY = mouseY - tipHeight - 14 < 0 ? mouseY - 14: mouseY - tipHeight - 14;
	return [mouseX, mouseY]
};
function ChinaMapDis(){
	var map = $('#ChinaMapArea');
	globle_map_hastips = $('.mapStateTip');
	if(globle_map_hastips.length>0) {
		return false;
	} else {
	   $.ajax({
		url:'js/map.json',
		//url: environment.globalPath+'/v2/local/json/citydis.json',
		dataType: 'json',
		type: 'GET',
		beforeSend: function() {
			
		},
		success: function(data) {
		    var point = '';
		$('body').append('<div class="mapStateTip"><div class="items"></div><b class="arrows-down"></b></div>');
		$.each(data, function(key, val){
			var pinyin = polygonNames[key];
			var position = pointPosition[pinyin];
			point += '<a href="javascript:;" style="left:'+position.split('|')[0]+'px; top:'+position.split('|')[1]+'px" data-rel="'+pinyin+'">'+key+''+'</a>'
		});
		map.html(point);
		var pointTip = $('.mapStateTip');
		var cont = pointTip.find('.items');
		map.find('a').mouseDelay(false,null).hover(function(e){
			var self = $(this);
			var _offsetXY = new offsetXY(e);
			self.parent().addClass('map-'+self.attr('data-rel'));
			//self.parent().attr('style', 'background:url('+environment.basePath+'/v2/local/img/maps/'+self.attr('data-rel')+'.jpg)');
			cont.html(self.text());
			var tmpTop = self.offset().top - pointTip.height()/2-24;
			var tmpLeft = self.offset().left - pointTip.width()/2;
			pointTip.css({
				// left: _offsetXY[0],
				// top: _offsetXY[1],
				left:tmpLeft,
				top:tmpTop

			}).show();
		}, function(){
			var self = $(this);
			setTimeout(function(){
				self.parent().removeClass('map-'+self.attr('data-rel'));
				//self.parent().attr('style', '');
				pointTip.hide();
			},100)
		});
		if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
			$(document).on('mousemove', function(e){
				var _offsetXY = new offsetXY(e);
				pointTip.css({
					left: _offsetXY[0],
					top: _offsetXY[1]
				})
			})
		};
		},
		error: function() {
			
		}
	  });
	}
};