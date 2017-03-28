var divList=[];
var selectList=[];
function recure(node){
		for(var i=0,length=node.children.length;i<length;i++){
			recure(node.children[i]);
		}
		divList.push(node);
}
function selectnode(){
	var divs=document.getElementsByTagName("div");
   for(var i=0;i<divs.length;i++){
	  divs[i].onclick=function(event){
		  event.target.style.backgroundColor="red";
		  event.stopPropagation(); //阻值事件冒泡
		  selectList.push(event.target);
		  }
	  }
	  
  }	

function delenode(node){
	node.parentNode.removeChild(node);
}
function appendnode(node){
	var appendvalue = document.getElementById("appendinput").value;
	var newchild = document.createElement("div");
	newchild.innerHTML=appendvalue;
	newchild.className ="appendstyle";
	newchild.id=appendvalue;
	node.appendChild(newchild);
}
function clear(){
	var divs=document.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		divs[i].style.backgroundColor="white";
		selectList=[];
		divList=[];
	}
	
}
function init(){
selectnode();	
document.getElementById("start").onclick=function(){
	
   divList=[];   
   var root= document.getElementById("A");
   recure(root);
   
   //开始改颜色
   var i = 0;
   divList[i].style.backgroundColor = "blue";
   timer = setInterval(function () {
		i++;
		if (i < divList.length) {
			divList[i-1].style.backgroundColor = "white";
			divList[i].style.backgroundColor = "blue";
		} else {
			clearInterval(timer);
			divList[divList.length-1].style.backgroundColor = "white";
		}
   },500)
}
document.getElementById("check").onclick=function(){
	var input =document.getElementById("input").value;
	 divList=[];   
    var root= document.getElementById("A");
    recure(root);
   
   //开始改颜色
   var i = 0;
   if(divList[i].id==input)
			{
				divList[i].style.backgroundColor = "yellow";
				}
	else{
         divList[i].style.backgroundColor = "blue";
	}
   timer = setInterval(function () {
		i++;
		if (i < divList.length) {
			if(divList[i].id==input)
			{  
		        divList[i-1].style.backgroundColor = "white";
		        divList[i].style.backgroundColor = "yellow";}
		   else{
			   if(divList[i-1].id==input)
			   { 
		          divList[i].style.backgroundColor = "blue";
		       }
			   else{
			         divList[i-1].style.backgroundColor = "white";
			         divList[i].style.backgroundColor = "blue";
		           }
		       }
		} 
		else {
			   clearInterval(timer);
			   divList[divList.length-1].style.backgroundColor = "white";
		}
   },500)
}
document.getElementById("dele").onclick=function(){
	divList=[];   
    var root= document.getElementById("A");
    recure(root);
	
	for(var i=0;i<selectList.length;i++){
		delenode(selectList[i]);
	}
	clear();
}
document.getElementById("append").onclick=function(){
	divList=[];   
    var root= document.getElementById("A");
    recure(root);
	
	for(var i=0;i<selectList.length;i++){
		appendnode(selectList[i]);
	}
	clear();
}
  
}

init();
