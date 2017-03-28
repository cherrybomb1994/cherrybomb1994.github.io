var state = [4,4,0];

var check = function(){
	if(state[0]>9){
		state[0]=9;
	}
	if(state[1]>9){
		state[1]=9;
	}

	if(state[0]<0){
		state[0]=0;
	}
	if(state[1]<0){
		state[1]=0;
	}
}

var go = function(){
	if(state[2]==0){
		state[0]-=1;
	}
	if(state[2]==1){
		state[1]+=1;
	}
	if(state[2]==2){
		state[0]+=1
	}
	if(state[2]==3){
		state[1]-=1;
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
var clear = function(){
	var tdlist = document.getElementsByTagName("td");
	for(var i=0;i<tdlist.length;i++){
		tdlist[i].innerHTML="";
		tdlist[i].style.backgroundColor="white";
	}
}
var draw = function(){
	var x = state[0].toString();
	var y = state[1].toString();
	var selected = document.getElementById(x+y);
	selected.style.backgroundColor="red";
	var child = document.createElement("div");
	if(state[2]==0){
		child.className="front";
	}
	else if(state[2]==1){
		child.className="right";
	}
	else if(state[2]==2){
		child.className="bottom";
	}
	else if(state[2]==3){
		child.className="left";
	}
	selected.appendChild(child);
	
}
var init = function(){
	var table = document.getElementById("table");
	for(var i=0;i<table.rows.length;i++){  
            for(var j=0;j<table.rows[i].cells.length;j++){ 
            	var ii = i.toString();
                var jj = j.toString();				
               table.rows[i].cells[j].id = ii+jj; 
            }  
        }  
		
	draw();
	document.getElementById("go").onclick=function(){
		go();
		check();
		clear();
		draw();
	}
	document.getElementById("right").onclick=function(){
		right();
		check();
		clear();
		draw();
	}
	document.getElementById("left").onclick=function(){
		left();
		check();
		clear();
		draw();
	}
	document.getElementById("back").onclick=function(){
		back();
		check();
		clear();
		draw();
	}
}
init();
