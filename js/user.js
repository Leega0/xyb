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
// 解冻红包比例

