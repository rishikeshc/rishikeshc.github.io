var rot=0;
window.addEventListener('load',function(){
	var st = document.getElementById('ar_st');
	window.addEventListener('click',()=>{
		st.setAttribute("rotation", {x: rot, y: 0, z: 0});
		rot+=10;
	});
});