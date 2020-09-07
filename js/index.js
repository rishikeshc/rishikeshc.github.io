var rotx=0, rotz=0,roty=0;
window.addEventListener('load',function(){
	var st = document.getElementById('ar_st');
	window.addEventListener('keydown',e=>{
		switch(e.code){
			case "ArrowUp":
				console.log("CHECK")
				roty-=10;
			case "ArrowRight":
				rotx-=10;
			case "ArrowDown":
				roty+=10;
			case "ArrowLeft":
				rotx+=10;	
		}
		console.log(e.code)
		st.setAttribute("rotation", {x: rotx, y: roty, z: 0});
	});
});