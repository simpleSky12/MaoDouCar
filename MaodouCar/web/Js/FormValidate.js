
/*
 * Jquery esay UI Validatebox 常用自定义检验
 */
$.extend($.fn.validatebox.defaults.rules, {
    chinese: {
        validator: function (value, param) {
            if (value) {
                return /^[\u4e00-\u9fa5]+$/.test(value);
            } else {
                return true;
            }
        },
        message: '只能输入汉字'
    },
    number: {
        validator: function (value, param) {
            if (value) {
                return /^\d+$/.test(value);
            } else {
                return true;
            }
        },
        message: '只能输入数字'
    },
    ZIP: {
        validator: function (value, param) {
            return /^[1-9]\d{5}$/.test(value);
        },
        message: '邮政编码格式错误'
    },
    price: {
        validator: function (value, param) {
            return /^\d+(\.\d+)?$/.test(value);
        },
        message: '价格格式错误'
    },
    telephone: { 		//手机，固定电话都可以
        validator: function (value, param) {
            return /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(value);
        },
        message: '电话号码或手机号码格式错误'
    },
    loginName: {
        validator: function (value, param) {
            return /^[\w]+$/.test(value);
        },
        message: '用户名只允许汉字、英文字母、数字及下划线组成。'
    },
    safepass: {
        validator: function (value, param) {
            return /^(\w){6,20}$/.test(value);
        },
        message: '密码由字母和数字组成，至少6位'
    },
    equals: {
        validator: function (value, param) {
            return value == $(param[0]).val();
        },
        message: '密码与重复密码不一致'
    },
    idcard: {
        validator: function (value, param) {
            return /(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$)/.test($.trim(value));
        },
        message: '请输入正确的身份证号码'
    },
    minLength: {
        validator: function (value, param) {   // value 为需要校验的输入框的值 ,
            // param为使用此规则时存入的参数
            return value.length >= param[0];
        },
        message: '请输入最小{0}位字符.'
    },
    maxLength: {
        validator: function (value, param) {
            return param[0] >= value.length;
        },
        message: '请输入最大{0}位字符.'
    },
    length: {
        validator: function (value, param) {
            return value.length >= param[0] && param[1] >= value.length;
        },
        message: '请输入{0}-{1}位字符.'
    },
    year: {
        validator: function (value) {
            return /^\d{4}$/.test($.trim(value));
        },
        message: '年份格式错误(如:2014)'
    },
    web: {
        validator: function (value) {
            return /^(http[s]{0,1}|ftp):\/\//i.test($.trim(value));
        },
        message: '网站网址格式错误.'
    },
    mobile: {//value值为文本框中的值
        validator: function (value) {
            var reg = /^1[3|4|5|8|9]\d{9}$/;
            return reg.test(value);
        },
        message: '输入手机号码格式不准确.'
    },
    CHS: {//只能输入汉字
        validator: function (value) {
            return /^[\u0391-\uFFE5]+$/.test(value);
        },
        message: '只能输入汉字'
    },
    phoneAndMobile: {//电话号码或手机号码  
        validator: function (value) {
            return /^((\(\d{2，3}\))|(\d{3}\-))?(\(0\d{2，3}\)|0\d{2，3}-)?[1-9]\d{6，7}(\-\d{1，4})?$/i.test(value) || /^(13|15|18)\d{9}$/i.test(value);
        },
        message: '电话号码或手机号码格式不正确'
    },

    date: {
        validator: function (value) {
            return /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/i.test($.trim(value));
        },
        message: '曰期格式错误,如2012-09-11.'
    },
    datetimeNoSecond: {
        validator: function (value) {
            return /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}\s\d{2}:\d{2}$/i.test($.trim(value));
        },
        message: '曰期时间格式错误<br/>如:2014-09-11 20:23'
    },
    email: {
        validator: function (value) {
            return /^\w+@\w+(\.\w+)+$/i.test($.trim(value));
        },
        message: '邮箱格式错误'
    },

});

//验证日期和时间
var patternDateTime = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))\s\d{2}:\d{2}$/


