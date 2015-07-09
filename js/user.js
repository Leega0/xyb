var $userTab = $('.user-tabs'),
$userTabItem = $('.user-tabs-item', $userTab),
$userMoudle = $('.user-account-moudle');
userTabInit();
userListInit();
function userTabInit() {
    $userTabItem.first().addClass('user-tabs-active').siblings('.user-tabs-active').removeClass('user-tabs-active');
    $userTabItem.on('click', function() {
        $(this).addClass('user-tabs-active').siblings('.user-tabs-active').removeClass('user-tabs-active');
        userListInit();
    });
}
function userListInit() {
    var index = $('.user-tabs-active').index();
    $userMoudle.eq(index).css({
        display: 'block'
    }).siblings('.user-account-moudle').css({
        display: 'none'
    })
}
// 红包解冻比例
function drawProcess() {
    // 选出页面上所有class为process的canvas元素,然后迭代每一个元素画图(这里用Jquery的选择器选的)
    $('canvas.user-redbg-progress').each(function() {
            // 第一部先拿到canvas标签中间的文字,就是那个61%(这里的stringTrim方法是我自己的方法,去前后空格的方法很多的,这里就不贴出来了)
        var text = $(this).text();
        var process = text.substring(0, text.length-1);
                
            // 一个canvas标签
        var canvas = this;
            // 拿到绘图上下文,目前只支持"2d"
        var context = canvas.getContext('2d');
    // 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了
        context.clearRect(0, 0, 90, 90);
        
    // ***开始画一个灰色的圆
        context.beginPath();
           // 坐标移动到圆心
        context.moveTo(45, 45);
            // 画圆,圆心是24,24,半径24,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
        context.arc(45, 45, 45, 0, Math.PI * 2, false);
        context.closePath();
            // 填充颜色
        context.fillStyle = '#fc8378';
        context.fill();
            // ***灰色的圆画完
        
        // 画进度
        context.beginPath();
            // 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形
        context.moveTo(45, 45);
            // 跟上面的圆唯一的区别在这里,不画满圆,画个扇形
        context.arc(45, 45, 45, 0, Math.PI * 2 * process / 100, false);
        context.closePath();
        context.fillStyle = '#2c97f4';
        context.fill();

        // 画内部空白
        context.beginPath();
        context.moveTo(45, 45);
        context.arc(45, 45, 27, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = 'rgba(255,255,255,1)';
        context.fill();
        
    // // 画一条线
    //  context.beginPath();
    //  context.arc(45, 45, 18.5, 0, Math.PI * 2, true);
    //  context.closePath();
 //            // 与画实心圆的区别,fill是填充,stroke是画线
    //  context.strokeStyle = '#ddd';
    //  context.stroke();
        
            //在中间写字
        context.font = "bold 18px Arial";
        context.fillStyle = '#2c97f4';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.moveTo(45, 45);
        context.fillText(text, 45, 45);
    });
}
