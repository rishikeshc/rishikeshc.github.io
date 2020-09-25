var startx,endx = 0
var curAsset="";
var host="mqtt.flespi.io";
var port = 443;
var mqtt;
var options={
	timeout: 3,
	userName: 'ef20jpVzcETktD5a4CKw1QUo2yatUqHXuxLBKw0NYHVh8Rg3hQp6u7lmulEezbZR',
	password: '',
	useSSL:true,
	onSuccess: onConnect
}
// mqtt.connect(options);
var topic="AR/iot";


const texts = {
	"ar_tm": "The TweetMakers Logo",
	"ar_dish": "A white little dish",
	"ar_burger": "Finest burger in the virtual realm",
	"ar_st": "Worst shooters of the galaxy"
}
function onConnect(){
	console.log("Check");
	alert("Connected");
}
function sendMqtt(i){
	var msg = new Paho.MQTT.Message(`${i}`)
	msg.destinationName = topic;
	mqtt.send(msg);
	alert("Sent: ",i)
}
function zrotation(a,b){
	return Math.ceil(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)))
}
function switchAsset(i){
	var assets = ["ar_tm","ar_dish","ar_burger","ar_st"]
	var oldAsset = document.getElementById(curAsset);
	var txt = document.getElementById("ar_text");
	var index = assets.indexOf(curAsset);
	var newIndex = 0	
	if(index+i >= assets.length) newIndex = 0;
	else if(index+i < 0) newIndex=assets.length-1;
	else newIndex = index+i
	var f = assets[newIndex];
	var newAsset = document.getElementById(f);
	// txt.setAttribute("text",{value: texts[f], height: 50});
	txt.setAttribute("value",texts[f]);
	oldAsset.setAttribute("visible","false");
	newAsset.setAttribute("visible","true");
	curAsset = f;
	sendMqtt(newIndex);
}

window.addEventListener('load',function(){
	mqtt=new Paho.MQTT.Client(host,port,"clientjs");
	mqtt.connect(options)
	curAsset="ar_tm";
	var txt = document.getElementById("ar_text");
	var st = document.getElementById(curAsset);
	// txt.setAttribute("text",{value: texts[curAsset], height: 50});
	txt.setAttribute("value",texts[curAsset]);
	window.addEventListener('touchstart',e=>{
		startx = parseInt(e.changedTouches[0].clientX);
	});
	window.addEventListener('touchend',e=>{
		endx=parseInt(e.changedTouches[0].clientX);
		var l = startx-endx;
		var k=0
		if(l< -100) k=-1;
		else if(l>100) k=1;
		switchAsset(k);
	})
});
window.addEventListener('click',function(){
	var msg = new Paho.MQTT.Message("Hello World")
	msg.destinationName = "AR/iot";
	mqtt.send(msg);
})