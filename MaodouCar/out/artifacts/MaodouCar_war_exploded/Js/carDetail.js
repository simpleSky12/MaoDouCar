$(function () {
   $("#addCart").click(function(){
	   var carId = $("#carid").html();
	   $.ajax({
          url: PROJECT_NAME + "/OrderServlet",
          type:'post',
           dataType:'json',
           data:{
              action:'addOrder',
              carId: carId
           },
           success:function (data,status) {
               if(data==1){
                   showMsgBox("加入购物车成功");
               }else {
                   $.messager.alert("失败","加入购物车失败","error");
               }
           }
       });
   });
});