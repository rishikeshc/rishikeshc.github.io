var rotx=0, rotz=0,roty=0;
var startz=0,endz=0;
var starty=0,endy=0;
var endx=0;
function zrotation(a,b){
	return Math.ceil(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)))
}
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});
window.addEventListener('load',function(){
	var st = document.getElementById('ar_tm');
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
