var state = [4,4,0];
var deg = 0;
var x = 0;
var y = 0;
var go = function(element){
	if(state[2]==0){
		state[0]-=1;
		if(state[0]<0){
		state[0]=0;
	     }
	   else{
		   y-=40;
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	   }
	}
	if(state[2]==1){
		state[1]+=1;
		if(state[1]>9){
		state[1]=9;
	     }
		 else{
		x+=40;
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
		 }
	}
	if(state[2]==2){
		state[0]+=1;
		if(state[0]>9){
		state[0]=9;
	      }
        else{		  
		y+=40;
		element.style.transform = "translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
		}
	}
	if(state[2]==3){
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
	state[2]=(state[2]+1)%4;
}

var left = function(){
	state[2]=(state[2]+3)%4;
}

var back = function(){
	state[2]=(state[2]+2)%4;
}


var init = function(){
	document.getElementById("go").onclick=function(){
		go(document.getElementById("block"));
	}
	document.getElementById("right").onclick=function(){
		right();
		deg = deg+90;
		if(deg>360){
			deg = deg-360;	
		}
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("left").onclick=function(){
		left();
		deg = deg-90;
		if(deg<0){
			deg = deg+360;
		}
		document.getElementById("block").style.transform="translate("+x+"px,"+y+"px) rotate("+deg+"deg)";
	}
	document.getElementById("back").onclick=function(){
		back();
		deg = deg+180;
		if(deg>360){
			deg = deg-360;
		}
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
