$(function () {
    // 重复密码判断
    $.extend($.fn.validatebox.defaults.rules, {
        /*必须和某个字段相等*/
        equalTo: { validator: function (value, param) { return $(param[0]).val() == value; }, message: '字段不匹配' }
    });
    // 渲染用户名和密码
    $("#txtLoginName,#txtPassword,#uName,#pwd,#tel,#address").textbox({
        width: 150,
        maxlength:20,
        required:true
    });
    $("#tel").textbox({
        validType:"telephone['#tel']"
    });
    $("#rePwd").textbox({
        width: 150,
        maxlength:20,
        required:true,
        validType:"equalTo['#pwd']"
    });


    // 登录弹窗渲染
    $("#loginDlg").dialog({
        width: 268,
        height: 186,
        resizable: true,
        modal: true,
        maximizable: true,
        closed: true,
        openAnimation: 'fade',
        closeAnimation: 'fade',
        top:100,
        left:400
    });
    //  注册修改弹窗渲染
    $("#dlg").dialog({
        width:400,
        height:270,
        resizable:true,
        modal:true,
        closed:true,
        openAnimation:'fade',
        closeAnimation:'fade',
        top:100,
        left:400
    });

    // 登录事件
    $("#logIn").click(function () {
        $("#loginDlg").dialog({
            title:'登录',
            buttons:[{
                text:'确定',
                iconCls:'icon-ok',
                handler:function(){
                    $("#fm").form('submit',{
                        url: PROJECT_NAME+'/UserServlet',// ajax提交数据到后台的 后台地址
                        queryParams:{
                            action:'login'
                        },
                        // 绑定表单提交事件
                        onSubmit:function(param){
                            // 进行表单验证，条件全部满足返回true
                            var valid = $('#fm').form('validate');
                            if(valid){
                                $.messager.progress({ // 进度条
                                    text:'请稍后……',
                                    interval:500
                                });
                            }
                            return valid;
                        },
                        success:function(data){
                            // 关闭进度条
                            $.messager.progress('close');
                            data = eval('('+data+')');
                            if(data.index==1){
                                if(data.user.power==1){
                                    showMsgBox('管理员，登录成功');
                                    setTimeout(function () {
                                        window.location.href = PROJECT_NAME+"/manageCar.jsp";
                                    },600);
                                }else if(data.user.power == 0){
                                    showMsgBox('用户，登录成功');
                                    setTimeout(function () {
                                        window.location.href = PROJECT_NAME+"/Cart.jsp";
                                    },600);
                                }else{
                                    $.messager.alert('失败','登录失败','error');
                                }
                            }else if(data.index==0){
                                $.messager.alert('失败','账号或密码错误','error');
                            }else if(data.index==-1){
                                $.messager.alert('失败',"账号不存在，请注册！",'error');
                            }
                        }
                    });
                }
            },{
                text:'关闭',
                iconCls:'icon-cancel',
                handler:function(){$("#loginDlg").dialog("close");}
            }]
        });
        $("#txtLoginName,#txtPassword").textbox('clear');
        $("#loginDlg").dialog("open");
    });
    $("#login").click(function () {
        $("#loginDlg").dialog({
            title:'登录',
            buttons:[{
                text:'确定',
                iconCls:'icon-ok',
                handler:function(){
                    $("#fm").form('submit',{
                        url: PROJECT_NAME+'/UserServlet',// ajax提交数据到后台的 后台地址
                        queryParams:{
                            action:'login'
                        },
                        // 绑定表单提交事件
                        onSubmit:function(param){
                            // 进行表单验证，条件全部满足返回true
                            var valid = $('#fm').form('validate');
                            if(valid){
                                $.messager.progress({ // 进度条
                                    text:'请稍后……',
                                    interval:500
                                });
                            }
                            return valid;
                        },
                        success:function(data){
                            // 关闭进度条
                            $.messager.progress('close');
                            data = eval('('+data+')');
                            if(data.index==1){
                                if(data.user.power==1){
                                    showMsgBox('管理员，登录成功');
                                }else if(data.user.power == 0){
                                    showMsgBox('用户，登录成功');
                                }else{
                                    $.messager.alert('失败','登录失败','error');
                                }
                            }else if(data.index==0){
                                $.messager.alert('失败','账号或密码错误','error');
                            }else if(data.index==-1){
                                $.messager.alert('失败',"账号不存在，请注册！",'error');
                            }
                            $("#loginDlg").dialog("close");
                        }
                    });
                }
            },{
                text:'关闭',
                iconCls:'icon-cancel',
                handler:function(){$("#loginDlg").dialog("close");}
            }]
        });
        $("#txtLoginName,#txtPassword").textbox('clear');
        $("#loginDlg").dialog("open");
    });

    // 注册
    $("#register").click(function () {
        $("#uName,#pwd,#rePwd,#tel,#address").textbox('clear');
        // // 省份城市数据ajax请求
        // $.ajax({
        //     url: PROJECT_NAME + "/AreaServlet",
        //     data:{action:'province'},
        //     type:'post',
        //     dataType:'json',
        //     success:function(data,status){
        //         data.unshift({id:0,name:'请选择',selected:true});
        //         $('#province').combobox('loadData',data);
        //     },
        //     err:function(XMLHttpRequest,textStatus,err){
        //         $.messager.alert('错误','对不起，省份加载失败！','error');
        //     }
        // });
        // // 省份下拉表单的change事件
        // $("#province").combobox({
        //     onChange:function(newValue,oldValue){
        //         if(newValue == 0){
        //             $('#city').combobox('loadData',[{id:0,name:'请选择',selected:true}]);
        //         }else{
        //             $.ajax({
        //                 url: PROJECT_NAME + "/AreaServlet",
        //                 data:{action:'city',provinceId:newValue},
        //                 type:'post',
        //                 dataType:'json',
        //                 success:function(data,status){
        //                     data.unshift({id:0,name:'请选择',selected:true});
        //                     $("#city").combobox("loadData",data);
        //                 },
        //                 err:function (XMLHttpRequest,textStatus,err) {
        //                     $.messager.alert('错误','对不起,城市加载失败！','error');
        //                 }
        //             });
        //         }
        //     }
        // });
        $("#dlg").dialog({
            title:'注册',
            buttons:[{
                text:'确定',
                iconCls:'icon-ok',
                handler:function(){
                    $("#dlgFm").form('submit',{
                        url: PROJECT_NAME+'/UserServlet',// ajax提交数据到后台的 后台地址
                        queryParams:{
                            action:'register'
                        },
                        // 绑定表单提交事件
                        onSubmit:function(param){
                            // 进行表单验证，条件全部满足返回true
                            var valid = $('#dlgFm').form('validate');
                            if(valid){
                                $.messager.progress({ // 进度条
                                    text:'请稍后……',
                                    interval:500
                                })
                            }
                            return valid;
                        },
                        success:function(data){
                            // 关闭进度条
                            $.messager.progress('close');
                            if(data==1){
                                showMsgBox('注册成功');
                            }else if(data==0){
                                $.messager.alert('失败','注册失败','error');
                            }else if(data==-2){
                                $.messager.alert('失败',"账号已存在，请重新注册！",'error');
                            }
                            $("#dlg").dialog('close'); // 关闭对话框
                        }
                    });
                }
            },{
                text:'关闭',
                iconCls:'icon-cancel',
                handler:function(){
                    $("#dlg").dialog("close")
                }
            }]
        });
        $("#dlg").dialog("open");
    });
    //  修改
    $("#edit").click(function () {

    });
    // 注销
    $("#logOut").click(function () {
        $.ajax({
           url:PROJECT_NAME+"/UserServlet",
            data:{
               action:'logout'
            },
            success:function (data) {
                if(data==1){
                    showMsgBox("注销成功");
                    setTimeout(function () {
                        window.location.href = PROJECT_NAME + "/index.jsp";
                    },600);
                }else{
                    $.messager.alert('失败','注销失败','error');
                }
            }
        });
    });
});