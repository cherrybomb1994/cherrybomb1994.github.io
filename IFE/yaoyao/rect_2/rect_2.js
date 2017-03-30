var state = [4,4];
var deg = 0;
var x = 0;
var y = 0;
var go = function(element){
	if(deg==0){
		state[0]-=1;
		if(state[0]<0){
		state[0]=0;
	     }
	   else{
		   y-=40;
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	   }
	}
	if(deg==90){
		state[1]+=1;
		if(state[1]>9){
		state[1]=9;
	     }
		 else{
		x+=40;
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
		 }
	}
	if(deg==180){
		state[0]+=1;
		if(state[0]>9){
		state[0]=9;
	      }
        else{		  
		y+=40;
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
		}
	}
	if(deg==270){
		state[1]-=1;
		if(state[1]<0){
		state[1]=0;
	      }
		else{
		x-=40;
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
		  }
	}
}

var right = function(){
	deg+=90;
	if(deg>360){
	deg-=360;
	}
}

var left = function(){
	deg-=90;
	if(deg<0){
	deg+=360;
	}
}

var back = function(){
	deg+=180;
	if(deg>360){
	deg-=360;
	}
}


var init = function(){
	document.getElementById("go").onclick=function(){
		go(document.getElementById("block"));
	}
	document.getElementById("right").onclick=function(){
		right();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("left").onclick=function(){
		left();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("back").onclick=function(){
		back();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("upyi").onclick=function(){
		y-=40;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("rightyi").onclick=function(){
		x+=40;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("leftyi").onclick=function(){
		x-=40;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("downyi").onclick=function(){
		y+=40;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("upyiturn").onclick=function(){
		y-=40;
		deg=0;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("rightyiturn").onclick=function(){
		x+=40;
		deg=90;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("leftyiturn").onclick=function(){
		x-=40;
		deg=270;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("downyiturn").onclick=function(){
		y+=40;
		deg=180;
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	
}
init();
