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