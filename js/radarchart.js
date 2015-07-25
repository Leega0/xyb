﻿function radarChart(id) {
    var elm = document.getElementById(id);
    if (!elm) {
        return;
    };
    this.canvas = elm;
    if (!this.canvas) {
        return;
    };
    if (!this.canvas.getContext) {
        return;
    };
    this.cxt = this.canvas.getContext('2d');
};
radarChart.prototype._drawRadar = function(items,inparams){
    if (!this.cxt) {
        return;
    };
    var params = {
        aCap: [],
        aMax: 4,//最大圈数
        aMin: 0,//最小圈数
        faceAlpha: 0.3,//透明度
        borderAlpha: 0.75,//边框透明度
        borderWidth: 1,//边框宽
        axisWidth: 1,//十字线
        aLinePositions: [1, 2, 3, 4],//线条环数
        aLineWidth: 1,//线条宽
        angleNum: 4, //多边形
        backgroundColor: '#f0f5f6',//圆形背景颜色
        aLineColor: '#d4d9dc',//线条颜色
        faceColor: '#3498db'//区域背景
    };
    if( inparams && typeof(inparams) == 'object' ) {
        for( var key in inparams ) {
            if( key.match(/^_/) ) { 
                continue;
            }
            params[key] = inparams[key];
        }
    };
    var cpos = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2,
        r: Math.min(this.canvas.width, this.canvas.height) / 2
    };
    var axisAngles = [Math.PI / 2]; //轴角度
    for (var i = 1; i < params.angleNum; i++) {
        axisAngles.push(Math.PI / 2 - Math.PI * 2 * i / params.angleNum);
    };
    var iterm = [];
    for(var i = 0; i < items.length; i++){
        iterm.push(items[i] * params.angleNum)
    }
    this._drawAline(params, cpos, axisAngles);//圆
    this._drawAxis(params, cpos, axisAngles);//横竖线
    this._drawPoint(params, cpos, axisAngles, iterm, params.faceColor);//区域
};
radarChart.prototype._drawAline = function(params, cpos, axisAngles) {
    if (typeof(params.aLineWidth) != 'number' || params.aLineWidth <= 0) {
        return;
    };
    if (typeof(params.aLinePositions) != 'object' || params.aLinePositions.length < 1) {
        return;
    };
    this.cxt.strokeStyle = params.aLineColor;
    this.cxt.fillStyle = params.backgroundColor;
    this.cxt.arc(cpos.x, cpos.y, cpos.x, 0, Math.PI*2, true);//画圆
    this.cxt.fill();
    for (var i = 0; i < params.aLinePositions.length; i++) {
        if (params.aLinePositions[i] < params.aMin) {
            continue;
        };
        var r = cpos.r * (params.aLinePositions[i] - params.aMin) / (params.aMax - params.aMin);
        if (r <= 0) {
            continue;
        };
        this.cxt.beginPath();   
        this.cxt.moveTo(Math.round(cpos.x + r * Math.cos(axisAngles[0])), Math.round(cpos.y - r * Math.sin(axisAngles[0])));
        for (var j = 0; j < axisAngles.length; j++) {
            this.cxt.lineTo(Math.round(cpos.x + r * Math.cos(axisAngles[j])), Math.round(cpos.y - r * Math.sin(axisAngles[j])));//画线
        };
        this.cxt.closePath();
        this.cxt.stroke();
    }
};
//横竖线
radarChart.prototype._drawAxis = function(params, cpos, axisAngles) {
    if (typeof(params.axisWidth) != 'number' || params.axisWidth <= 0) {
        return;
    };
    for (var i = 0; i < axisAngles.length; i++) {
        this.cxt.beginPath();
        this.cxt.lineWidth = params.axisWidth;
        //this.cxt.strokeStyle = params.axisColor;
        this.cxt.moveTo(cpos.x, cpos.y);
        this.cxt.lineTo(Math.round(cpos.x + cpos.r * Math.cos(axisAngles[i])), Math.round(cpos.y - cpos.r * Math.sin(axisAngles[i])));
        this.cxt.stroke();
    };
};
//区域
radarChart.prototype._drawPoint = function(params, cpos, axisAngles, items, faceColor) {
    this._makePath(params, cpos, axisAngles, items);
    this.cxt.globalAlpha = params.faceAlpha;
    this.cxt.fillStyle = faceColor;
    this.cxt.fill();
    /*//边线
    this._makePath(params, cpos, axisAngles, items);
    this.cxt.globalAlpha = params.borderAlpha;
    this.cxt.lineWidth = params.borderWidth;
    this.cxt.strokeStyle = faceColor;
    this.cxt.stroke();
    this.cxt.globalAlpha = 1;*/
};
radarChart.prototype._makePath = function(params, cpos, axisAngles, items) {
    var r0 = 0;
    if (typeof(items[0]) == 'number') {
        r0 = cpos.r * (items[0] - params.aMin) / (params.aMax - params.aMin);
        if (r0 < 0) {
            r0 = 0;
        }
    };
    this.cxt.beginPath();
    this.cxt.moveTo(Math.round(cpos.x + r0 * Math.cos(axisAngles[0])), Math.round(cpos.y - r0 * Math.sin(axisAngles[0])));
    for (var i = 0; i < axisAngles.length; i++) {
        var r = 0;
        if (typeof(items[i]) == 'number') {
            r = cpos.r * (items[i] - params.aMin) / (params.aMax - params.aMin);
            if (r < 0) {
                r = 0;
            }
        };
        this.cxt.lineTo(Math.round(cpos.x + r * Math.cos(axisAngles[i])), Math.round(cpos.y - r * Math.sin(axisAngles[i])));
    };
    this.cxt.closePath();
};