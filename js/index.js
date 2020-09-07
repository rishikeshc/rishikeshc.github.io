var rot=0;
window.addEventListener('load',function(){
	var burger = document.getElementById('ar_burger');
	burger.addEventListener('click',()=>{
		this.setAttribute("rotation", `${rot} 0 0`);
		rot+=10;
	});
});