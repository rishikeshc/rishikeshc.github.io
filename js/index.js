var rot=0;
window.addEventListener('load',function(){
	var st = document.getElementById('ar_st');
	window.addEventListener('click',()=>{
		st.setAttribute("rotation", {x: 0, y: rot, z: 0});
		rot+=10;
	});
});