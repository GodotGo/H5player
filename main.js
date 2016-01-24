window.onload=function(){

var player=document.getElementById("player");

var btn=document.getElementById("video-btn");

var curtime=document.getElementById("curtime");

var duration=document.getElementById("duration");

duration.innerHTML=player.duration;

btn.onclick=function(){
		if(player.paused){
		player.play();
		btn.Value="Pause";
	}else{
		player.pause();
		btn.Value="Play"
	}
}

//定时更新当前时间
setInterval(function(){
curtime.innerHTML=player.currentTime;
},1000);

}
