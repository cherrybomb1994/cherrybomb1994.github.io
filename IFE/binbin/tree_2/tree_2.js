var divList=[];

function recure(node){
		for(var i=0,length=node.children.length;i<length;i++){
			recure(node.children[i]);
		}
		divList.push(node);
}


function init(){
	
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
				divList[i].style.backgroundColor = "red";
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
		        divList[i].style.backgroundColor = "red";}
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
}
init();
