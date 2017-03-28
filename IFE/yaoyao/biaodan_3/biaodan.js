var student = document.getElementById("student");
var nostudent = document.getElementById("nostudent");
var list = document.getElementById("select1");
window.onload=function(){
	document.getElementById("job").style.display="none";
}
nostudent.onclick=function(){
	document.getElementById("school").style.display="none";
	document.getElementById("job").style.display="";
	
}
student.onclick=function(){
	document.getElementById("school").style.display="";
	document.getElementById("job").style.display="none";
	
}
list.onclick=function(){
	selectDistrict();
}

function selectDistrict() {
    var data = {
		init1:["请选择学校"],
        beijing: ["北京邮电大学", "清华大学", "北京大学"],
        shanghai: ["复旦大学", "上海交通大学", "同济大学"],
        guangzhou: ["广州1大学", "广州2大学", "广州3大学"]
    }
    var source = document.getElementById("select1");
    var target = document.getElementById("select2");
    var selected = source.options[source.options.selectedIndex].value;
		target.innerHTML="";
    for (var i = 0; i < data[[selected]].length; i++) {
        var opt = document.createElement('option');
		opt.innerHTML = data[selected][i];
		document.getElementById('select2').appendChild(opt);
      }
}
