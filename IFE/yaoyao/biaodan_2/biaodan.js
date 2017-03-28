var a ;
var b;
var c ;
var d;
var e;
  	function countLength(str) {
		var inputLength = 0;
		for (var i = 0; i < str.length; i++) {
			var countCode = str.charCodeAt(i);
			if (countCode >= 0 && countCode <=128) {
				inputLength += 1;
			} else {
				inputLength += 2;
			}
		}
		return inputLength;
	}
	
var namecheck=function(){
     document.getElementById("alert_name").style.visibility="hidden";	
     var input = document.getElementById("input");
	 input.onfocus=function(){
		 document.getElementById("alert_name").style.visibility="visible";
	 }
	input.onblur=function(){
	  var nameinput=input.value;
	  var len=countLength(nameinput);
	  if(len>=4&&len<=16){
	    document.getElementById("alert_name").innerHTML="名称格式正确";
		document.getElementById("input").style.borderColor="green";
		document.getElementById("alert_name").style.color="green";
		a=1;
	  }
	  else if(len==0){
	    document.getElementById("alert_name").innerHTML="输入不能为空";
		document.getElementById("input").style.borderColor="red";
		document.getElementById("alert_name").style.color="red";
		a= 0;
	  }
	  else{
	    document.getElementById("alert_name").innerHTML="名称格式错误";
		document.getElementById("input").style.borderColor="red";
		document.getElementById("alert_name").style.color="red";
		a= 0;
	  }
	}
}	
var password1check=function(){
	 document.getElementById("alert_password1").style.visibility="hidden";
	var password1 = document.getElementById("password1");
	password1.onfocus=function(){
		 document.getElementById("alert_password1").style.visibility="visible";
	 }
	 password1.onblur=function(){
		 var password1input=password1.value;
		 var reg=new RegExp(/^[a-zA-Z0-9]{6,10}$/);
		 if(reg.test(password1input)){
			 document.getElementById("alert_password1").innerHTML="密码格式正确";
		     document.getElementById("password1").style.borderColor="green";
		     document.getElementById("alert_password1").style.color="green";
			 b= 1;
		 }
		 else if(password1input.length==0){
			 document.getElementById("alert_password1").innerHTML="输入不能为空";
		    document.getElementById("password1").style.borderColor="red";
		    document.getElementById("alert_password1").style.color="red"; 
             b= 0;			
		 }
		 else{
			  document.getElementById("alert_password1").innerHTML="密码格式错误";
		    document.getElementById("password1").style.borderColor="red";
		    document.getElementById("alert_password1").style.color="red";
            b= 0;			
		 }
	 }
}
var password2check=function(){
	 document.getElementById("alert_password2").style.visibility="hidden";
	var password2 = document.getElementById("password2");
	password2.onfocus=function(){
		 document.getElementById("alert_password2").style.visibility="visible";
	 }
	 password2.onblur=function(){
		 var password2input=password2.value;
		 var password1input=document.getElementById("password1").value;
		 if(password1input==password2input){
			 document.getElementById("alert_password2").innerHTML="密码验证正确";
		     document.getElementById("password2").style.borderColor="green";
		     document.getElementById("alert_password2").style.color="green";
			 c= 1;
		 }
		 else{
			  document.getElementById("alert_password2").innerHTML="请输入相同密码";
		      document.getElementById("password2").style.borderColor="red";
		      document.getElementById("alert_password2").style.color="red";
               c= 0;			  
		 }
	 }
}
var emailcheck=function(){
	 document.getElementById("alert_email").style.visibility="hidden";
	var email = document.getElementById("email");
	email.onfocus=function(){
		 document.getElementById("alert_email").style.visibility="visible";
	 }
	 email.onblur=function(){
		 var emailinput=email.value;
		 var reg=new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
		 if(reg.test(emailinput)){
			 document.getElementById("alert_email").innerHTML="邮箱格式正确";
		     document.getElementById("email").style.borderColor="green";
		     document.getElementById("alert_email").style.color="green";
			 d= 1;
		 }
		 else if(emailinput.length==0){
			 document.getElementById("alert_email").innerHTML="输入不能为空";
		    document.getElementById("email").style.borderColor="red";
		    document.getElementById("alert_email").style.color="red";  
			d= 0;
		 }
		 else{
			  document.getElementById("alert_email").innerHTML="邮箱格式错误";
		    document.getElementById("email").style.borderColor="red";
		    document.getElementById("alert_email").style.color="red";  
			d= 0;
		 }
	 }
}
var phonecheck=function(){
	 document.getElementById("alert_telephone").style.visibility="hidden";
	var phone = document.getElementById("telephone");
	phone.onfocus=function(){
		 document.getElementById("alert_telephone").style.visibility="visible";
	 }
	 phone.onblur=function(){
		 var phoneinput=phone.value;
		 var reg=new RegExp(/^1[0-9]{10}$/);
		 if(reg.test(phoneinput)){
			 document.getElementById("alert_telephone").innerHTML="手机号格式正确";
		     document.getElementById("telephone").style.borderColor="green";
		     document.getElementById("alert_telephone").style.color="green";
			 e= 1;
		 }
		 else if(phoneinput.length==0){
			 document.getElementById("alert_telephone").innerHTML="输入不能为空";
		    document.getElementById("telephone").style.borderColor="red";
		    document.getElementById("alert_telephone").style.color="red"; 
            e= 0;			
		 }
		 else{
			  document.getElementById("alert_telephone").innerHTML="手机号格式错误";
		    document.getElementById("telephone").style.borderColor="red";
		    document.getElementById("alert_telephone").style.color="red";  
			e= 0;
		 }
	 }
}
var submitbutton=function(){
	document.getElementById("check").onclick=function(){
	if(a&&b&&c&&d&&e){
		alert("全部正确");
	}
	else{
		alert("输入有误请检查")
	}
}
}
namecheck();
password1check();
password2check();
emailcheck();
phonecheck();
submitbutton();
