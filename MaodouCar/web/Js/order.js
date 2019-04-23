$(function () {

    $("#search").linkbutton({
        iconCls:'icon-search',
        text:''
    });

    // carGrid 表格的渲染
    $("#orderGrid").datagrid(
        {
            loadMsg : '数据加载中请稍后 ...',//设置载入数据时显示的文字信息
            url :  PROJECT_NAME+"/OrderManager",//从后台请求数据的地址
            queryParams:{//请求参数
                action:"search"//请求类型
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
                            return "未发货";
                        }else if(value==-1){
                            return "已发货";
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
                        var d = '<a  class="sendcls" onclick="sendOrder('+ row.itemId +','+row.send+')"></a>';
                        if(row.status==1){
                            return s + d  ;
                        }else {
                            return s;
                        }
                    }
                } ] ],
            onLoadSuccess:function(data){//当数据加载完成时触发加载成功事件！   //渲染按钮列的按钮
                console.log(data);
                $(".showcls").linkbutton({
                    iconCls: 'icon-search',
                    text:''
                });

                $(".sendcls").linkbutton({
                    iconCls: 'icon-ok',
                    text:''
                });
                if(data.send!=0){
                    $(".sendcls").linkbutton({
                        disable:true
                    });
                }else{
                    $(".sendcls").linkbutton({
                        disable:false
                    });
                }


                //为按钮添加悬浮提示文本

                $('.showcls').tooltip({
                    position: 'bottom',
                    trackMouse:'true',
                    content: '<span>查看订单</span>'
                });

                $('.sendcls').tooltip({
                    position: 'bottom',
                    trackMouse:'true',
                    content: '<span>发货</span>'
                });
            }
        }
    );
    $("#orderGrid").datagrid('getPager').pagination({//设置分页栏
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

    //为toolbar 中添加搜索功能
    $("#search").click(function() {
        $("#orderGrid").datagrid('load', {
            //此处填写提交给服务器的参数，为JSON数据格式，可以添加多个参数
            name: $("#name").textbox('getValue'),//获取textbox控件Value
            action:"search"//请求类型
        });
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

// 查询订单
function showOrder(itemId){
    $.ajax({
        url: PROJECT_NAME+'/OrderManager',// ajax提交数据到后台的 后台地址
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
            text:'关闭',
            iconCls:'icon-cancel',
            handler:function(){
                $("#dlg").dialog("close")
            }
        }]
    });
    $("#dlg").dialog("open");
}

// 发货
function sendOrder(itemId,send){
    $.ajax({
        url: PROJECT_NAME+'/OrderManager',// ajax提交数据到后台的 后台地址
        data:{
            action:'sendOrder',
            itemId:itemId,
            send: send,
        },
        type:'post',
        dataType:'json',
        success:function (data,status) {
            if(data==1){
                showMsgBox('发货成功！');
            }else if(data==-1){
                $.messager.alert("失败","请不要重复发货！",'error');
            }else{
                $.messager.alert("失败","发货失败，请重试！",'error');
            }
            $('.sendcls').tooltip("hide");
            $("#orderGrid").datagrid("reload");
        }
    });
}