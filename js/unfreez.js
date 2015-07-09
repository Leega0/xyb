$('#unfreeze_rate').highcharts({
	chart: {
					type: 'pie',
				},
	title: {
					text: '<span style="color:#2c97f4;font-size:18px">75<em style="font-size:14px">%</em></span>',
					verticalAlign:'middle',
					y:5,
					userHTML:true,
					style:{color:'#2c97f4'}
				},
	credits:{
				     enabled:false // 禁用版权信息
				 },
	 legend:{
	 	enabled:false 
	 },
	 tooltip: {
	 	formatter: function() {  
                    return '<span style="color:#474747">'+ this.y +'%</span>';  
            		},  
					borderWidth : 0,
					borderRadius : 6
	 },
	 plotOptions: {
            pie: {
            	size:90,
            	innerSize:'54',
                colors:[
                	'#fc8378',
                	'#2c97f4'
                ],
                dataLabels:{
                	enabled:false
                }
            }
        },
     series: [{
            data:[
                 ['未解冻',25],
                 ['已解冻',75]
                 ]
        }]

})