var rotx=0, rotz=0,roty=0;
var startz=0,endz=0;
var starty=0,endy=0;
var endx=0;
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
	AFRAME.registerComponent('right', {
	  init: function () {
	    this.el.addEventListener('click', function (evt) {
	      	switchAsset(1);
	    });
	  }
	});
	AFRAME.registerComponent('left', {
	  init: function () {
	    this.el.addEventListener('click', function (evt) {
	      	switchAsset(-1);
	    });
	  }
	});
	var st = document.getElementById(curAsset);

	window.addEventListener('keydown',e=>{
		switch(e.code){
			case "ArrowUp":
				roty-=10;
			case "ArrowRight":
				rotz-=10;
			case "ArrowDown":
				roty+=10;
			case "ArrowLeft":
				rotz+=10;	
		}
		st.setAttribute("rotation", {x: rotx, y: roty, z: rotz});
	});

	window.addEventListener('touchstart',e=>{
		console.log(e.changedTouches[0]);
		startz = parseInt(e.changedTouches[0].clientX);
		starty = parseInt(e.changedTouches[0].clientY);
	});
	window.addEventListener('touchend',e=>{
		endz=parseInt(e.changedTouches[0].clientX);
		endy=parseInt(e.changedTouches[0].clientY);
		endx=zrotation(endz,endy);
	})
	window.addEventListener('touchmove',e=>{
		console.log("TOUCH MOVED");
		var sz = parseInt(e.changedTouches[0].clientX);
		var sy = parseInt(e.changedTouches[0].clientY);
		var movz = startz-sz;
		var movy = starty-sy;
		var movx = zrotation(movz,movy);
		rotz=endz+movz;
		roty=endy+movy;
		rotx=endx+movx;
		st.setAttribute("rotation", {x: rotx, y: roty, z: rotz})
	})
});
