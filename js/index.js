var rotx=0, rotz=0;
window.addEventListener('load',function(){
	var st = document.getElementById('ar_st');
	window.addEventListener('keypress',e=>{
		switch(e.code){
			case 38:
				rotz-=10;
				break;
			case 39:
				rotx-=10;
			case 40:
				rotz+=10;
			case 37:
				rotx+=10;	
		}
		st.setAttribute("rotation", {x: rotx, y: 0, z: rotz});
	});
});