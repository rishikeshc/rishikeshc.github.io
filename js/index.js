var startx,endx = 0
var curAsset="";
function zrotation(a,b){
	return Math.ceil(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)))
}
function switchAsset(i){
	var assets = ["ar_tm","ar_dish","ar_burger","ar_st"]
	var oldAsset = document.getElementById(curAsset);
	var index = assets.indexOf(curAsset);
	var newIndex = 0
	
	if(index+i >= assets.length) newIndex = 0;
	else if(index+i < 0) newIndex=assets.length-1;
	else newIndex = index+i
	var f = assets[newIndex];
	var newAsset = document.getElementById(f);
	oldAsset.setAttribute("visible","false");
	newAsset.setAttribute("visible","true");
	curAsset = f;
}
window.addEventListener('load',function(){
	curAsset="ar_tm";

	var st = document.getElementById(curAsset);

	window.addEventListener('touchstart',e=>{
		startx = parseInt(e.changedTouches[0].clientX);
	});
	window.addEventListener('touchend',e=>{
		endx=parseInt(e.changedTouches[0].clientX);
		var l = startx-endx;
		var k=0
		if(l< -10) k=1;
		else if(l>10) k=-1;
		switchAsset(k);
	})
});
