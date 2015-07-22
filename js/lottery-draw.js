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
                         area: ['640', 'auto'],
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
                         area: ['640', 'auto'],
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
function marque(id,time){

    var $swap = $(id);  //滚动区域
    
    var movetotop;  //滚动的变量
    
    $swap.hover(function() {

        clearInterval(movetotop);  //鼠标进入指定的区域停止动画

        },function(){
            
            movetotop=setInterval(function() {  //定义一个滚动时间间隔的方法

                   var li_height = $swap.find('li').height();

                   $swap.find('li:first').animate({marginTop:-li_height + 'px'},time,function() {                                  

                    $swap.find('li:first').css('marginTop',0).appendTo($swap);  //获取到li的高度，向上滚动一个高度，并且用回调函数把css样式调回到原始的初始状态 

                                    });

                   },1000);
            
        }).trigger('mouseleave');

}
$(function(){
    marque(big_award,900);
    marque(now_award,600);
})//文本滚动 