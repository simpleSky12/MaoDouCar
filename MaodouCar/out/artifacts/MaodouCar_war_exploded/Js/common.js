var PROJECT_NAME = "/MaodouCar";

function showMsgBox(msg){
    if(!$("#MsgPopWin").html()){
        $('<div id="MsgPopWin" style="border:1px solid #ccc;position:absolute;z-index: 9999;padding: 5px;background-color: white;display:none">	<img  src="'+PROJECT_NAME+'/img/yes-512x512.png" width="50" height="50" align="middle">	<span style="font:normal normal 16px 微软雅黑;position: relative;top: 5px;"></span></div>').appendTo($("body"));
    }
    $("#MsgPopWin span").text(msg);
    setCenter("#MsgPopWin");
    $("#MsgPopWin").delay(100).fadeIn("normal").delay(500).fadeOut("normal");
}

function setCenter(selector){
    var $e=$(selector);

    var page=getPageSize();
    var nDivLeft = page[2];
//alert(nDivLeft);
    // 整体宽度减去当前元素的宽度

    nDivLeft = nDivLeft - $e.outerWidth();

    // 计算中间位置

    nDivLeft = nDivLeft/2+$(document).scrollLeft();


    // 计算Top, 原理与上边的原理一致

    var nDivTop = page[3];
//alert(nDivTop);

    nDivTop = nDivTop - $e.outerHeight();

    nDivTop = nDivTop/2+$(document).scrollTop();

    $e.css({
        top:nDivTop,
        left:nDivLeft
    });
}

function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = window.innerWidth + window.scrollMaxX;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else {
        if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer
        if (document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body) { // other Explorers
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }
        }
    }
    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = xScroll;
    } else {
        pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
    return arrayPageSize;
}

var Common = {
    /**
     * 格式化日期（不含时间）
     * @param TimeStamp类型对象
     * @return 日期字符串XX年XX月XX日
     * @type String
     */
    formatDate: function (date) {
        if (date == undefined) {
            return "";
        }
        var datetime =(date.year+1900) ;
        if(date.month<9){
            datetime+="-0"+(date.month+1);
        }else{
            datetime+="-"+(date.month+1);
        }
        if(date.date<10){
            datetime+="-0"+date.date+" ";
        }else{
            datetime+="-"+date.date+" ";
        }
        return datetime;
    },
    /**
     * 格式化日期（含时间"00:00:00"）
     * @param TimeStamp类型对象
     * @return 日期字符串XX年XX月XX日 XX:XX:XX
     * @type String
     */
    formatDateTime: function (date) {
        if (date == undefined) {
            return "";
        }
        var datetime = (date.year+1900);
        if(date.month<9){
            datetime+="-0"+(date.month+1);
        }else{
            datetime+="-"+(date.month+1);
        }
        if(date.date<10){
            datetime+="-0"+date.date+" ";
        }else{
            datetime+="-"+date.date+" ";
        }
        var hours=date.hours>9?date.hours:"0"+date.hours;
        var minutes=date.minutes>9?date.minutes:"0"+date.minutes;
        var seconds=date.seconds>9?date.seconds:"0"+date.seconds;
        datetime=datetime+hours+":"+minutes+":"+seconds;
        return datetime;
    },
    /**
     * 将数值四舍五入(保留2位小数)后格式化成金额形式
     *
     * @param num 数值(Number或者String)
     * @return 金额格式的字符串,如'1,234,567.45'
     * @type String
     */
    formatCurrency:function(num) {
        num = num.toString().replace(/\$|\,/g,'');
        if(isNaN(num))
            num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num*100+0.50000000001);
        cents = num%100;
        num = Math.floor(num/100).toString();
        if(cents<10)
            cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
            num = num.substring(0,num.length-(4*i+3))+','+
                num.substring(num.length-(4*i+3));
        return (((sign)?'':'-') + num + '.' + cents);
    } ,
    /**
     * 将数值四舍五入(保留1位小数)后格式化成金额形式
     *
     * @param num 数值(Number或者String)
     * @return 金额格式的字符串,如'1,234,567.4'
     * @type String
     */
    formatCurrencyTenThou:function(num) {
        num = num.toString().replace(/\$|\,/g,'');
        if(isNaN(num))
            num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num*10+0.50000000001);
        cents = num%10;
        num = Math.floor(num/10).toString();
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
            num = num.substring(0,num.length-(4*i+3))+','+
                num.substring(num.length-(4*i+3));
        return (((sign)?'':'-') + num + '.' + cents);
    } ,
    /**
     * 将数值四舍五入
     * @param num数值(Number或者String)
     * @param precision保留几位小数。10表示保留1位小数，100表示保留2位小数,以此类推，如果小于等于1表示取整数部分。
     * @return 格式的数字字符串,如'1234.50'
     * @type String
     */
    formatDouble:function(num,precision) {
        num = num.toString().replace(/\$|\,/g,'');
        if(isNaN(num))
            num = "0";
        precision=Math.abs(precision);
        if(precision<1)
            precision=1;
        if(precision==1){
            return Math.floor(num*1+0.50000000001);
        }
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num*precision+0.50000000001);
        cents = num%precision;
        num = Math.floor(num/precision).toString();
        if(cents<10 && precision>10)
            cents = "0" + cents;
        return (((sign)?'':'-') + num + '.' + cents);
    }
};