!function(){
    var map = new BMap.Map("allmap");    
    var point = new BMap.Point(121.569248,31.212491);
    map.centerAndZoom(point, 15); 
    var myIcon = new BMap.Icon("../assets/img/map111.gif",new BMap.Size(50,50));
    var marker = new BMap.Marker(point,{icon:myIcon});  
    map.addOverlay(marker);
    var myIconCn = new BMap.Icon("../assets/img/ic_gs.svg", new BMap.Size(200, 120));
    var marker3 = new BMap.Marker(point,{icon:myIconCn});  // 创建标注
    map.addOverlay(marker3); 
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
}();
