var rot=0;
window.addEventListener('load',function(){
	var burger = document.getElementById('ar_burger');
	burger.addEventListener('click',()=>{
		this.setAttribute("rotation", {x: rot, y: 0, z: 0});
		rot+=10;
	});
});