var m_x=0;
var m_y=0;
var m_x_c=0;
var m_y_c=0;
var uitop=0;
var uileft=0;
var drag = false;
var down = false;

//将float居中
function autoCenter(el) {
    var bodyW = document.body.clientWidth;
    var bodyH = document.body.clientHeight;

    var elW = parseInt(el.style.width);
    var elH = parseInt(el.style.height);
	
	uileft = (bodyW - elW) / 2;
	uitop = (bodyH - elH) / 2;

    el.style.left = uileft + "px";
    el.style.top = uitop + "px";
}
function init(){
     var uifloat = document.getElementById("float");
     var zhezhao = document.getElementById("zhezhao");
   
     document.getElementById("show").onclick = function(){
	 uifloat.style.display="";
	 autoCenter(uifloat);
	 zhezhao.style.display="";
    }
     zhezhao.onclick = function(){
	 uifloat.style.display="none";
	 zhezhao.style.display="none";
    }
     document.getElementById("close").onclick = function(){
	 uifloat.style.display="none";
	 zhezhao.style.display="none";
    }
	
	//鼠标点击、拖动、释放
		
		uifloat.onmousedown=function(event){
			m_x = event.clientX;
			m_y = event.clientY;
			down = true;
		}
		
		
	    uifloat.onmousemove=function(event){
			if(down==true){
			m_x_f = event.clientX;
		    m_y_f = event.clientY;
			m_x_c = m_x_f - m_x;
			m_y_c = m_y_f - m_y;
			//console.log(m_x_c+";"+m_x_c);
		    uifloat.style.left = (uileft+ m_x_c)+"px";
		    uifloat.style.top = (uitop+ m_y_c)+"px";
			}
			
		}
		uifloat.onmouseup=function(event){
			m_x=0;
            m_y=0;
            m_x_f=0;
            m_y_f=0;
            m_x_c=0;
            m_y_c=0;
			down = false;
			
		}
	
}
window.onload=function(){
	init();
}
