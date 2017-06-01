/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {}

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: "北京",
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
    var text = "";
    for(var date in chartData){
        var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        text +='<div title="'+date+":"+chartData[date]+'" style="height:'+chartData[date]+'px; background-color:'+color+'"></div>';
    }
    document.getElementById("aqi-chart-wrap").innerHTML=text;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    if(pageState.nowGraTime!=this.value){
        pageState.nowGraTime = this.value;
    }
    else{
        return;
    }
    initAqiChartData();
    // 调用图表渲染函数
    renderChart();

}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化
    if(pageState.nowSelectCity!=this.value){
        pageState.nowSelectCity = this.value;
    }
    else{
        return;
    }
    initAqiChartData();
    // 调用图表渲染函数
    renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var time = document.getElementById('form-gra-time');
    var choosedate = time.getElementsByTagName('input');
    for(var i=0;i<choosedate.length;i++){
        choosedate[i].addEventListener("click",graTimeChange);
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var cityList = '';
    for (var i in aqiSourceData) {
        cityList += '<option>' + i +'</option>';
    }
    document.getElementById("city-select").innerHTML = cityList;
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    document.getElementById("city-select").addEventListener('change',citySelectChange);

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    var nowchartData = aqiSourceData[pageState.nowSelectCity];

        if(pageState.nowGraTime == "day"){
            chartData = nowchartData;

        }
        //周的计算方法，其实也可以用下面月的date方法，getday这里直接计数每7天算一次
        if(pageState.nowGraTime =="week"){
            chartData={};
            var sum =0;
            var num =0;
            var week=1;
            for(var date in nowchartData){
                num++;
                sum +=nowchartData[date];
                if(num==6){
                    chartData["第"+week+"周"]= Math.floor(sum/7);
                    sum=0;
                    num=0;
                    week++;
                }

            }
            //同理，最后一周如果凑不齐7天也要单独算一下，注意逻辑在全部遍历完之后
            if (sum != 0) {
                chartData['第'+week+'月'] = Math.floor(sum/7);
            }

        }
        if(pageState.nowGraTime == "month"){
            chartData={};
            var sum =0;
            var day=0;
            var month=0;
            for(var date in nowchartData){
                sum +=nowchartData[date];
                day++;
                //因为日期是规范型的，可以直接用于生成date类型，可以直接调用获取年月日的方法
                //每当月变了，就画一次
                if(new Date(date).getMonth()!=month){
                    month++;
                    chartData["第"+month+"月"]= Math.floor(sum/day);
                    sum=0;
                    day=0;
                }
             


            }
            //最后一个月到3月，后面没有4月了，所以如果不写这段就会只画出两个月
            //当全部遍历完之后，最多画一个
            if (sum != 0) {
                month ++;
                chartData['第'+month+'月'] = Math.floor(sum/day);
            }

        }

}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
    renderChart();
}
window.onload=function(){
    init();
}
