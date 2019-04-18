// 百度地图API功能
// var map = new BMap.Map("allmap");
// var point = new BMap.Point(116.404, 39.915);
// map.centerAndZoom(point, 15);

// //创建小狐狸
// var pt = new BMap.Point(121.569248,31.212491);
// var myIcon = new BMap.Icon(".", new BMap.Size(300,157));
// var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
// map.addOverlay(marker2);

// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(121.569248,31.212491);
map.centerAndZoom(point, 15);

//创建小狐狸
var pt = new BMap.Point(121.569248,31.212491);
var myIcon = new BMap.Icon("../assets/img/map111.gif", new BMap.Size(300,157));
var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
map.addOverlay(marker2); 

// 创建信息
var pt = new BMap.Point(121.569248,31.212491);
var myIconCn = new BMap.Icon("../assets/img/ic_gs.svg", new BMap.Size(465, 200));
var marker3 = new BMap.Marker(pt,{icon:myIconCn});  // 创建标注
map.addOverlay(marker3); 