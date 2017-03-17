
//定义全局变量，否则调用会报错
var divList=[];

//定义一个对象，含3个排序方法
function queue(){
  
  this.preOrder=preOrder;
  this.inOrder=inOrder;
  this.postOrder=postOrder;

  //每种排序方法不用return数组，因为divList设置为全局变量了
  //遍历结果写入了divList，后面绑定函数时可以直接调用
 function preOrder(node) {
	
	if (node!==null) {
		divList.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}

   }

function inOrder(node) {
	
	if (node! == null) {
		inOrder(node.firstElementChild);
		divList.push(node);
		inOrder(node.lastElementChild);
	}
	
}

function postOrder(node) {
	
	if (node! == null) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		divList.push(node);
	}
	
}

}

//具体操作
var que=new queue;

function init(){
	
document.getElementById("pro").onclick=function(){
	
   divList=[];   //每次点击事件开始要重置divList，否则会保留上一次排序结果
   var root= document.getElementById("root");
   que.preOrder(root);
   
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


document.getElementById("mid").onclick=function(){
	divList=[];
   var root= document.getElementById("root");
   que.inOrder(root);
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

document.getElementById("last").onclick=function(){
	divList=[];
   var root= document.getElementById("root");
   que.postOrder(root);
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
}
init();