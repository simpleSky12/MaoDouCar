$(function(){
    $("#status").combobox({
       valueField:'id',
       textField:'name',
       width:80,
        panelHeight:'auto',
        editable:'false',
        onChange:function(newValue,oldValue){
            if(newValue==2){
                $.ajax({
                    url: PROJECT_NAME + '/StatusServlet',
                    data:{status:1},
                    dataType:'json',
                    type:'post',
                    success:function (data,status) {
                        $("#cartGrid").datagrid("loadData",data);
                    },
                    err:function(XMLHttpRequest,textStatus,err){
                        $.messager.alert('错误','对不起，数据加载失败','error');
                    }
                });
            }else if(newValue==1){
                $.ajax({
                    url: PROJECT_NAME + '/StatusServlet',
                    data:{status:0},
                    dataType:'json',
                    type:'post',
                    success:function (data,status) {
                        $("#cartGrid").datagrid("loadData",data);
                    },
                    err:function(XMLHttpRequest,textStatus,err){
                        $.messager.alert('错误','对不起，数据加载失败','error');
                    }
                });
            } else{
                $.ajax({
                    url: PROJECT_NAME + '/StatusServlet',
                    data:{status:-1},
                    dataType:'json',
                    type:'post',
                    success:function (data,status) {
                        $("#cartGrid").datagrid("loadData",data);
                    },
                    err:function(XMLHttpRequest,textStatus,err){
                        $.messager.alert('错误','对不起，数据加载失败','error');
                    }
                });
            }
        }
    });
    $("#status").combobox('loadData',[{id:0,name:"请选择",selected:true},{id:1,name:"未付款"},{id:2,name:"已付款"}]);

    // carGrid 表格的渲染
    $("#cartGrid").datagrid(
        {
            loadMsg : '数据加载中请稍后 ...',//设置载入数据时显示的文字信息
            url :  PROJECT_NAME+"/OrderServlet",//从后台请求数据的地址
            queryParams:{//请求参数
                action:"query"//请求类型
            },
            fitColumns : true,//列宽自适应
            autoRowHeight : true,//自动设置行高
            pagination : true,//是否设置分页
            rownumbers : true,//是否显示行号
            pageSize : 5,//默认每页显示记录数量
            width : '100%',//设置宽度
            height : '300',//设置高度
            style:{
                margin:'0 auto'//设置CSS样式
            },
            toolbar : "#toolbar",//设置工具栏
            pageList : [ 5,10,20,40],//设置每页显示记录数量选择列表
            border : false,//是否显示边框
            striped : true,//是否隔行变色
            collapsible : true,
            singleSelect : true,//对于行是否单选
            ctrlSelect:true,//是否可以使用Ctrl进行多选
            idField : "id",//设置数据ID列
            columns :  [ [//设置列数据
                {
                    field : 'id',//设置列数据字段
                    title : 'ID',//列标题
                    hidden : true//设置该列为隐藏列
                },
                {
                    field : 'itemId',
                    title : "订单编号",
                    align:'center',
                    width:3
                },
                {
                    field : 'uName',
                    title : "收货人",
                    align:'center',
                    width:3
                },
                {
                    field : 'orderTime',
                    title : "下单时间",
                    align:'center',
                    width:5
                },
                {
                    field : 'status',
                    title : "订单状态",
                    align:'center',
                    width:3,
                    formatter: function (value,row,index) {
                        if(value==0){
                            return "未付款";
                        }else if(value==1){
                            return "已付款";
                        }
                    }
                },
                {
                    field : 'send',
                    title : "订单状态",
                    align:'center',
                    width:3,
                    formatter: function (value,row,index) {
                        if(value==0){
                            return "未收货";
                        }else if(value==-1){
                            return "待收货";
                        }else if(value==1){
                            return "已收货";
                        }
                    }
                },
                {
                    field : 'opt',
                    title : "操  作",
                    align:'center',
                    fixed:true,
                    width:100,
                    // 设置按钮列
                    formatter : function(value, row, index) {
                        console.log(row);
                        var s = '<a class="showcls" onclick="showOrder('+ row.itemId + ')"></a> ';
                        var e = '<a  class="paycls" onclick="payOrder('+ row.itemId +','+row.status+')"></a> ';
                        var d = '<a  class="delcls" onclick="delOrder('+ row.itemId + ')"></a>';
                        var a = '<a class="acceptcls" onclick="acceptOrder('+ row.itemId +','+row.send+')"></a>';
                        var b = '<a class="refusecls" onclick = "refuseOrder('+ row.itemId +','+row.send+')"></a>'
                        if(row.send==-1){
                            return a+b;
                        }else{
                            return s +e + d  ;
                        }
                    }
                } ] ],
            onLoadSuccess:function(data){//当数据加载完成时触发加载成功事件！   //渲染按钮列的按钮
                $(".paycls").linkbutton({
                    iconCls: 'icon-ok',
                    text:''
                });
                $(".delcls").linkbutton({
                    iconCls: 'icon-cancel',
                    text:''
                });
                $(".showcls").linkbutton({
                    iconCls: 'icon-search',
                    text:''
                });

                $(".acceptcls").linkbutton({
                    iconCls:'icon-ok',
                    text:''
                });
                $(".refusecls").linkbutton({
                    iconCls:'icon-cancel',
                    text:''
                });

                //为按钮添加悬浮提示文本
                $('.paycls').tooltip({
                    position: 'bottom',
                    trackMouse:'true',
                    content: '<span>支付订单</span>'
                });

                $('.delcls').tooltip({
                    position: 'bottom',
                    trackMouse:'true',
                    content: '<span>取消订单</span>'
                });
                $('.showcls').tooltip({
                    position: 'bottom',
                    trackMouse:'true',
                    content: '<span>查看订单</span>'
                });
                $('.acceptcls').tooltip({
                   position:'bottom',
                   tackMouse:'true',
                   content:'<span>确认收货</span>'
                });
                $('.refusecls').tooltip({
                    position:'bottom',
                    tackMouse:'true',
                    content:'<span>拒绝收货</span>'
                });
            }
        }
    ).datagrid('getPager').pagination({//设置分页栏
        pageNumber : 1,
        beforePageText : '第',
        afterPageText : '页    共 {pages} 页',
        displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录'
    });

    // 渲染弹窗
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
    $("#cName,#price,#userName,#phone,#location").textbox({
        width: 150,
        maxlength:20
    });
    $("#cName,#price").textbox('readonly',true);
});

// 查询订单
function showOrder(itemId){
    $.ajax({
        url: PROJECT_NAME+'/OrderServlet',// ajax提交数据到后台的 后台地址
        data:{
            action:'showOrder',
            itemId:itemId
        },
        type:'post',
        dataType:'json',
        success:function (data,status) {
            console.log(data);
            $("#fm").form('load',data);
        }
    });
    $("#dlg").dialog({
        title:'订单详情',
        buttons:[{
            text:'付款',
            iconCls:'icon-ok',
            handler:function(){
                $.ajax({
                    url: PROJECT_NAME+'/OrderServlet',// ajax提交数据到后台的 后台地址
                    data:{
                        action:'payOrder',
                        itemId:itemId
                    },
                    type:'post',
                    dataType:'json',
                    success:function (data,status) {
                        if(data==1){
                            showMsgBox('付款成功');
                        }else{
                            $.messager.alert('失败',"付款失败！",'error');
                        }
                        $("#dlg").dialog('close');
                        $("#cartGrid").datagrid('reload');
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
}

// 支付订单
function payOrder(itemId,status){
    $.ajax({
        url: PROJECT_NAME+'/OrderServlet',// ajax提交数据到后台的 后台地址
        data:{
            action:'payOrder',
            itemId:itemId,
            status:status
        },
        type:'post',
        dataType:'json',
        success:function (data,status) {
            if(data==1){
                showMsgBox('付款成功');
            }else if(data==-1){
                $.messager.alert("失败","请不要重复付款","error");
            }else{
                $.messager.alert('失败',"付款失败！",'error');
            }
            $('.paycls').tooltip('hide');
            $("#cartGrid").datagrid('reload');
            $("#dlg").dialog('close');
        }
    });
}

// 删除订单
function delOrder(itemId){
    $.ajax({
        url:PROJECT_NAME + '/OrderServlet',
        data:{
            action:'delOrder',
            itemId:itemId
        },
        type:'post',
        dataType:'json',
        success:function(data,status){
            if(data==1){
                showMsgBox('订单删除成功');
            }else{
                $.messager.alert('失败','删除订单失败！','error');
            }
        }
    });
    $("#cartGrid").datagrid('reload');
}

//收货
function acceptOrder(itemId,send){
    $.ajax({
        url: PROJECT_NAME + '/OrderServlet',
        data:{
            action:'acceptOrder',
            itemId:itemId,
            send:send
        },
        type:'post',
        dataType:'json',
        success:function(data,status){
            if(data==1){
                showMsgBox("收货成功！");
            }else if(data==-1){
                $.messager.alert("失败","请不要重复收货","error");
            }else {
                $.messager.alert("失败","收货失败,请重试","error");
            }
            $('.acceptcls').tooltip("hide");
            $("#cartGrid").datagrid('reload');
        }
    });
}

// 拒收
function refuseOrder(itemId,send){
    $.ajax({
        url: PROJECT_NAME + '/OrderServlet',
        data:{
            action:'refuseOrder',
            itemId:itemId,
            send:send
        },
        type:'post',
        dataType:'json',
        success:function(data,status){
            if(data==1){
                showMsgBox("拒收成功！");
            }else if(data==-1){
                $.messager.alert("失败","请不要重复拒收","error");
            }else {
                $.messager.alert("失败","收货失败,请重试","error");
            }
            $('.refusecls').tooltip("hide");
            $("#cartGrid").datagrid('reload');
        }
    });
}