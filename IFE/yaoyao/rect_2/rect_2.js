var deg = 0;
var x = 0;
var y = 0;
var go = function(element){
	var check = function(){
	if(x<0){x=0;}
	if(x>360){x=360;}
	if(y<0){y=0;}
	if(y>360){y=360};
     }
	 
	if(deg==0){
		  y-=40;
		  check();
		  element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	   
	}
	if(deg==90){
		x+=40;
		check();
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
		 
	}
	if(deg==180){		  
		y+=40;
		check();
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
		
	}
	if(deg==270){
		x-=40;
		check();
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
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

var check = function(){
	if(x<0){x=0;}
	if(x>360){x=360;}
	if(y<0){y=0;}
	if(y>360){y=360};
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
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("rightyi").onclick=function(){
		x+=40;
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("leftyi").onclick=function(){
		x-=40;
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("downyi").onclick=function(){
		y+=40;
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("upyiturn").onclick=function(){
		y-=40;
		deg=0;
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("rightyiturn").onclick=function(){
		x+=40;
		deg=90;
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("leftyiturn").onclick=function(){
		x-=40;
		deg=270;
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("downyiturn").onclick=function(){
		y+=40;
		deg=180;
		check();
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	
}
init();
