/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = [];

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

    var city = document.getElementById("city").value.trim();
    var data = document.getElementById("data").value.trim();
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名称请输入英文字母与汉字");
        return;
    }
    if(!data.match(/[1-9]\d*/)){
        alert("空气质量为正整数");
        return;
    }
    document.getElementById("city").value="";
    document.getElementById("data").value="";

   //键值对的写法！！！
    aqiData[city] = data;


}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    //因为每次都是重新绘制，而不是只绘制新添加的，所以每次画之前要将
    //原来的内容制空
    var table = document.getElementById("table");
    table.style.display = "";
    table.innerHTML = "";

    //遍历键值对的方法！！！！
        for(var city in aqiData) {
            var newline = table.insertRow();
            newline.insertCell(0).innerHTML = city;
            newline.insertCell(1).innerHTML = aqiData[city];
            newline.insertCell(2).innerHTML = "<button class='del-btn'>删除</button>";

        }
    //生成button之后再进行绑定，下面找button如果用getElementsByTagName
    //页面中还有别的button啊，所以要进行标记，用class
    bind();

}
function bind(){
    var buttonList = document.getElementsByClassName("del-btn");
    for(var i=0;i<buttonList.length;i++){
        buttonList[i].onclick = function(e) {
            delBtnHandle(e.target);
        }
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    //通过一行中的一个元素，删除整行的方法，通过找它的父级
    //button的第一个父级是所在的单元格，再一个父级是行
    var tr = target.parentElement.parentElement;
    //行的第一个子级是city，直接删除city，后面的value也会自动删除
    var strCity = tr.children[0].innerHTML;
    delete aqiData[strCity];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btnAdd = document.getElementById("btn");
    btnAdd.addEventListener("click",addBtnHandle);

    //此处先不给删除按键绑定事件，因为还没有生成，放在了生成的地方
}

init();
