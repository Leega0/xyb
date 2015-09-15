var $shadow = null,
        $lotterBtn = $('.prize-lotter-btn'),
        isMove = false,
        count = 0,
        startLotter,
        cycle = 0,
        speed = 70;

    function goNext(number) {
        $shadow.appendTo($('.prize-lotter-item:eq('+number+')'));
    }

    function lotter() {
        if(count == 13) {
            count = 0;
            cycle++;
        } else {
            count++;
        }

        if(cycle > 1) {
            clearInterval(startLotter);
            if(speed > 150 && count < (lotterNum - 3)) {
                speed = 360;
            } else {
                speed += 20;
            }
            
           if(speed > 350 && count == lotterNum) {
                goNext(count);
                setTimeout(function() {
                    count = 0,cycle = 0,speed = 70;
                isMove = false;
             if(pPhy==1){
                    phyPox = $.layer({
                         type: 1,   //0-4的选择,
                         title: false,
                         border: [0],
                         closeBtn: [0],
                         area: ['590', 'auto'],
                         shadeClose: false,
                         closeBtn: [0, true], //去掉默认关闭按钮
                         bgcolor: '',
                         page: {dom : '#phyPox'}
                     });
                    
                    $('#phyPox').find('img').attr('src',pUrl);
                    $('#phyPrize').html(prizeName);                    
                }else{
                    normalPox = $.layer({
                         type: 1,   //0-4的选择,
                         title: false,
                         border: [0],
                         closeBtn: [0],
                         area: ['590', 'auto'],
                         shadeClose: false,
                         closeBtn: [0, true], //去掉默认关闭按钮
                         bgcolor: '',
                         page: {dom : '#normalPox'}
                     });
                    $('#normalPox').find('img').eq(0).attr('src',pUrl);
                    $('#normalPrize').html(prizeName);
                    }
                }, 500);
                return false;
            }
            setTimeout(lotter,speed);
        }
        goNext(count);
    }
    
    
      $('#normalPox').find('a.close').bind('click',function(){
          layer.close(normalPox);
          $shadow.remove();
      });   
      $('#phyPox').find('a.close').bind('click',function(){
          layer.close(phyPox);
          $shadow.remove();
      });  
      $("#write_addres").on('click',function(){
                        layer.closeAll();
                        $.layer({
                            type: 1,   //0-4的选择,
                         title: false,
                         border: [0],
                         closeBtn: [0],
                         area: ['640', 'auto'],
                         shadeClose: false,
                         closeBtn: [0, true], 
                         bgcolor: '',
                         page: {dom : '#get_adress'}
                        })
                    }) 
//中奖滚动函数
function awardNav(id,time){ 
    var $this = $(id); 
    var scrollTimer; 
    $this.hover(function(){ 
        clearInterval(scrollTimer); 
    },function(){ 
        scrollTimer = setInterval(function(){ 
            scrollNews( $this ); 
        }, time ); 
    }).trigger("mouseout"); 
} 
function scrollNews(obj){ 
    var $self = obj.find("ul:first"); 
    var lineHeight = $self.find("li:first").height(); 
    $self.animate({ "margin-top" : -lineHeight +"px" },600 , function(){ 
        $self.css({"margin-top":"0px"}).find("li:first").appendTo($self); 
    }) 
}
if($("#big_award").children('li').length>=6){
    awardNav(".renav",2000);

}
if($("#now_award").children('li').length>=6){
    awardNav(".renav2",1000);
}