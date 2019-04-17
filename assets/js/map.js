!function(){
    var map = new BMap.Map("allmap");    
    var point = new BMap.Point(121.569248,31.212491);
    var marker = new BMap.Marker(point); 
    map.centerAndZoom(point, 15); 
    map.addOverlay(marker);
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
}();