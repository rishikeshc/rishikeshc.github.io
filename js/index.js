var rotx=0, rotz=0,roty=0;
var startx=0, curx=0;
window.addEventListener('load',function(){
	var st = document.getElementById('ar_burger');
	window.addEventListener('keydown',e=>{
		switch(e.code){
			case "ArrowUp":
				console.log("CHECK")
				roty-=10;
			case "ArrowRight":
				rotz-=10;
			case "ArrowDown":
				roty+=10;
			case "ArrowLeft":
				rotz+=10;	
		}
		st.setAttribute("rotation", {x: 0, y: roty, z: rotz});
	});

	window.addEventListener('touchstart',e=>{
		console.log(e.changedTouches[0]);
		startx = parseInt(e.changedTouches[0].clientX);
	});
	window.addEventListener('touchmove',e=>{
		console.log("TOUCH MOVED");
		var s = parseInt(e.changedTouches[0].clientX);
		var mov = s-startx;

		rotz+=mov;

		st.setAttribute("rotation", {x: 0, y: roty, z: rotz})
	})
});
