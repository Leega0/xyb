//fico评分图
function radarScore(){
        var radar = new radarChart('radarChart');
        var items;
        var items1,items2,items3,items4;
        var a,b,c,d;
        var params;
                items1 = $("#pers_score").text();
                items2 = $("#enss_score").text();
                items3 = $("#cred_score").text();
                items4 = $("#vouch_score").text();
            params = {
                angleNum : 4
             };
            items = [items1, items2, items3, items4];
        radar._drawRadar(items,params);
};
