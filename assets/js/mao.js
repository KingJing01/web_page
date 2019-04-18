// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(121.569248,31.212491);
map.centerAndZoom(point, 15);

//创建小狐狸
var pt = new BMap.Point(116.417, 39.909);
var myIcon = new BMap.Icon("../assets/img/map111.gif", new BMap.Size(300,157));
var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
map.addOverlay(marker2);


!function(){
    var map = new BMap.Map("allmap");    
    var point = new BMap.Point(121.569248,31.212491);
    var marker = new BMap.Marker(point); 
    map.centerAndZoom(point, 17); 
    map.addOverlay(marker);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    function ComplexCustomOverlay(point, text, mouseoverText){
        this._point = point;
        this._text = text;
        this._overText = mouseoverText;
      }
      ComplexCustomOverlay.prototype = new BMap.Overlay();
      ComplexCustomOverlay.prototype.initialize = function(map){
        this._map = map;
        var div = this._div = document.createElement("div");
        div.style.background = "url()";
      }
}();