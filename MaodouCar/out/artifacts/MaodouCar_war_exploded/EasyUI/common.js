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
        var datetime = date.year + "年" +(date.month+1) + "月" +date.date+ "日";
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
         var datetime = date.year + "年" +(date.month+1) + "月" +date.date+ "日 ";
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
     * @param precision保留几位小数。10表示保留一位小数，100表示保留一位小数,以此类推，如果小于等于1表示取整数部分。
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