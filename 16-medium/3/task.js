
//把所有的函数及变量都放在了onload里面，之前把变量放在外面不知道为什么函数调用不了
//注意变量定义的先后顺序
window.onload = function () {
    document.getElementById("tagInput").addEventListener('keyup',drawTag);
    document.getElementById("add").addEventListener('click',drawhobby);
    document.getElementById("tagList").addEventListener('mouseover',function(e){
        if(e.target && e.target.nodeName == "SPAN") {
            e.target.firstChild.insertData(0,'点击删除');
            e.target.style.background = 'red';
        }
    });
    document.getElementById("tagList").addEventListener('mouseout',function (e) {
        if(e.target.nodeName == "SPAN") {
            e.target.firstChild.deleteData(0,4);
            e.target.style.background = '#78BCFB'
        }
    });
    document.getElementById("tagList").addEventListener('click',function (e) {
        if(e.target.nodeName == "SPAN") {
            tagShow.removeChild(e.target);
        }
    });
    var tagShow = document.getElementById("tagList");
    var tag = new List(tagShow);
    var hobbyList = document.getElementById("hobbyList");
    var hobby = new List(hobbyList);
    var tagInput = document.getElementById("tagInput");
    var hobbyInput = document.getElementById("textInput");



    function getinput(str) {
        var inputs = str.trim().split(/[,，;；、。.\s\n]+/);
        return inputs;
    }

    function drawTag() {
        if(/[,，;；、\s\n]+/.test(tagInput.value)){
            var data = getinput(tagInput.value);
            if(tag.que.indexOf(data[0])===-1){
                tag.rightin(data[0]);
                if(tag.que.length>10){
                    tag.que.leftout();
                }
            }
            tagInput.value = "";
        }

    }

    function drawhobby() {
        var data = getinput(hobbyInput.value);
        data.forEach(function(e){
            if(hobby.que.indexOf(e)===-1){
                hobby.rightin(e);
                if(hobby.que.length>10){
                    hobby.que.leftout();
                }
            }
        });
        hobbyInput.value='';
    }


}

//写的封装一个类
function List(ele) {
    this.que = [];
    this.draw = function () {
        ele.innerHTML="";
        this.que.forEach(function(e){
            ele.innerHTML+="<span>"+e+"</span>";
        });
    }
}
List.prototype.rightin = function (str) {
    this.que.push(str);
    this.draw();
}
List.prototype.leftout = function () {
    this.que.shift();
    this.draw();
}

