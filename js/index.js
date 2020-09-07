var rot=0;
window.addEventListener('load',function(){
	var st = document.getElementById('ar_st');
	window.addEventListener('click',()=>{
		st.setAttribute("rotation", {x: 0, y: 0, z: rot});
		rot+=10;
	});
});