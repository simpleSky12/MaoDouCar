$(function() {
    $.ajax({
        url : PROJECT_NAME + "/CarServlet",
        type : "post",
        data : {
            action : "carslist"
        },
        datatype : "json",
        success : function(data) {
            $("#faced").html(1);
            for(var i=0;i<data.length;i++){
                var nextcar = $("Carmsg").clone(true);
                nextcar.find("#Carid").html(data[i].id);
                nextcar.find("#cName").html(data[i].cName);
                nextcar.find("#price").html(data[i].price);
                nextcar.find("#msg").html(data[i].msg);
                nextcar.find("#pic").html(data[i].pic);
                nextcar.find("#typeid").html(data[i].typeid);
                $("#show tbody").append(nextcar);
            }
        }
    });
    $.ajax({
        url : PROJECT_NAME + "/CarServlet",
        type : "post",
        data : {
            action : "allcar"
        },
        datatype : "json",
        success : function(data) {
            $("#total").html(data);
        }
    });
});