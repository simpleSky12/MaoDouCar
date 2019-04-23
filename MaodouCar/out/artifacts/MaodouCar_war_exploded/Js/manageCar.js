function delCar(a) {
		var id = $(a).parent().parent().children(":first").html();
		$.ajax({
			url : PROJECT_NAME + "/CarServlet",
			type : "post",
			data : {
				action : "delCar",
				id : id
			},
			datatype : "json",
			success : function(data) {
				alert("data");
			}
		});
	}
	function updCar(a) {
		var id = $(a).parent().parent().children("#carid").html();
		var cName = $(a).parent().parent().children("#cName").html();
		var price = $(a).parent().parent().children("#price").html();
		var msg = $(a).parent().parent().children("#msg").html();
		var typeId = $(a).parent().parent().children("#typeid").html();
		$("#updcarid").val(id);
		$("#updcName").val(cName);
		$("#updprice").val(price);
		$("#updmsg").val(msg);
		$("#upd").css("display", "block");
		$.ajax({
			url : PROJECT_NAME + "/CarServlet",
			type : "post",
			data : {
				action : "findtype",
				typeId : typeId
			},
			datatype : "json",
			success : function(data) {
				$("#updtype").each(function() {
					$(this).children("option").each(function() {
						if ($(this).text() == data) {
							$(this).attr('selected', 'selected');
						}
						;
					});
				});
			}
		});
	}
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
				for (var i = 0; i < data.length; i++) {
					var nextcar = $("#Carmsg").clone(true);
					nextcar.attr("name", "1");
					nextcar.find("#Carid").html(data[i].id);
					nextcar.find("#cName").html(data[i].cName);
					nextcar.find("#price").html(data[i].price);
					nextcar.find("#msg").html(data[i].msg);
					nextcar.find("#pic").html(data[i].pic);
					nextcar.find("#typeid").html(data[i].typeId);
					nextcar.find("#handle").html("");
					nextcar.find("#handle").append("<input type='button'id='delCar' value='删除' onclick='delCar(this)'>");
					nextcar.find("#handle").append("<input type='button'id='updCar' value='修改' onclick='updCar(this)'>");
					$("tbody").append(nextcar);
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
		$("#nextpage").click(function() {
			var faced = $("#faced").html();
			$.ajax({
				url : PROJECT_NAME + "/CarServlet",
				type : "post",
				data : {
					action : "nextpage",
					faced : faced
				},
				datatype : "json",
				success : function(data) {
					if (data != "") {
						$("#faced").html(parseInt(faced) + 1);
						var s = document.getElementsByName("1");
						$(s).detach();
						for (var i = 0; i < data.length; i++) {
							var nextcar = $("#Carmsg").clone(true);
							nextcar.attr("name", "1");
							nextcar.find("#Carid").html(data[i].id);
							nextcar.find("#cName").html(data[i].cName);
							nextcar.find("#price").html(data[i].price);
							nextcar.find("#msg").html(data[i].msg);
							nextcar.find("#pic").html(data[i].pic);
							nextcar.find("#typeid").html(data[i].typeId);
							nextcar.find("#handle").html("");
							nextcar.find("#handle").append("<input type='button'id='delCar' value='删除' onclick='delCar(this)'>");
							nextcar.find("#handle").append("<input type='button'id='updCar' value='修改' onclick='updCar(this)'>");
							$("tbody").append(nextcar);
						}
					}
				}
			});
		});
		$("#lastpage").click(function() {
			var faced = $("#faced").html();
			$.ajax({
				url : PROJECT_NAME + "/CarServlet",
				type : "post",
				data : {
					action : "lastpage",
					faced : faced
				},
				datatype : "json",
				success : function(data) {
					if (data != "") {
						$("#faced").html(parseInt(faced) - 1);
						var s = document.getElementsByName("1");
						$(s).detach();
						for (var i = 0; i < data.length; i++) {
							var nextcar = $("#Carmsg").clone(true);
							nextcar.attr("name", "1");
							nextcar.find("#Carid").html(data[i].id);
							nextcar.find("#cName").html(data[i].cName);
							nextcar.find("#price").html(data[i].price);
							nextcar.find("#msg").html(data[i].msg);
							nextcar.find("#pic").html(data[i].pic);
							nextcar.find("#typeid").html(data[i].typeId);
							nextcar.find("#handle").html("");
							nextcar.find("#handle").append("<input type='button'id='delCar' value='删除' onclick='delCar(this)'>");
							nextcar.find("#handle").append("<input type='button'id='updCar' value='修改' onclick='updCar(this)'>");
							$("tbody").append(nextcar);
						}
					}
				}
			});
		});
		$("#go").click(function() {
			var pagenum = $("#pagenum").val();
			if (!isNaN(pagenum) & pagenum != "") {
				$.ajax({
					url : PROJECT_NAME + "/CarServlet",
					type : "post",
					data : {
						action : "gopage",
						page : pagenum
					},
					datatype : "json",
					success : function(data) {
						if (isNaN(data)) {
							$("#faced").html($("#pagenum").val());
							var s = document.getElementsByName("1");
							$(s).detach();
							for (var i = 0; i < data.length; i++) {
								var nextcar = $("#Carmsg").clone(true);
								nextcar.attr("name", "1");
								nextcar.find("#Carid").html(data[i].id);
								nextcar.find("#cName").html(data[i].cName);
								nextcar.find("#price").html(data[i].price);
								nextcar.find("#msg").html(data[i].msg);
								nextcar.find("#pic").html(data[i].pic);
								nextcar.find("#typeid").html(data[i].typeId);
								nextcar.find("#handle").html("");
								nextcar.find("#handle").append("<input type='button'id='delCar' value='删除' onclick='delCar(this)'>");
								nextcar.find("#handle").append("<input type='button'id='updCar' value='修改' onclick='updCar(this)'>");
								$("tbody").append(nextcar);
							}
						} else {
							console.log(data);
							alert("总共只有" + data + "页");
						}
					}
				});
			} else if (isNaN(pagenum)) {
				alert("页码不长这样哦，亲!");
			} else if (pagenum == "") {
				alert("页码不能为空哦,亲!");
			}
		});
		$("#find-name").click(function() {
			var name = $("#choose-name").val();
			if (name != "") {
				$.ajax({
					url : PROJECT_NAME + "/CarServlet",
					type : "post",
					data : {
						action : "find-name",
						name : name
					},
					datatype : "json",
					success : function(data) {
						$("#faced").html(1);
						$("#total").html(1);
						var s = document.getElementsByName("1");
						$(s).detach();
						for (var i = 0; i < data.length; i++) {
							var nextcar = $("#Carmsg").clone(true);
							nextcar.attr("name", "1");
							nextcar.find("#Carid").html(data[i].id);
							nextcar.find("#cName").html(data[i].cName);
							nextcar.find("#price").html(data[i].price);
							nextcar.find("#msg").html(data[i].msg);
							nextcar.find("#pic").html(data[i].pic);
							nextcar.find("#typeid").html(data[i].typeId);
							nextcar.find("#handle").html("");
							nextcar.find("#handle").append("<input type='button'id='delCar' value='删除' onclick='delCar(this)'>");
							nextcar.find("#handle").append("<input type='button'id='updCar' value='修改' onclick='updCar(this)'>");
							$("tbody").append(nextcar);
						}
					}
				});
			} else if (name == "") {
				$.ajax({
					url : PROJECT_NAME + "/CarServlet",
					type : "post",
					data : {
						action : "carslist"
					},
					datatype : "json",
					success : function(data) {
						$("#faced").html(1);
						var s = document.getElementsByName("1");
						$(s).detach();
						for (var i = 0; i < data.length; i++) {
							var nextcar = $("#Carmsg").clone(true);
							nextcar.attr("name", "1");
							nextcar.find("#Carid").html(data[i].id);
							nextcar.find("#cName").html(data[i].cName);
							nextcar.find("#price").html(data[i].price);
							nextcar.find("#msg").html(data[i].msg);
							nextcar.find("#pic").html(data[i].pic);
							nextcar.find("#typeid").html(data[i].typeId);
							nextcar.find("#handle").html("");
							nextcar.find("#handle").append("<input type='button'id='delCar' value='删除' onclick='delCar(this)'>");
							nextcar.find("#handle").append("<input type='button'id='updCar' value='修改' onclick='updCar(this)'>");
							$("tbody").append(nextcar);
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
			}
		});
		$("#choose-type").change(function() {
			var typename = $("#choose-type").val();
			if ("请选择" != typename) {
				$.ajax({
					url : PROJECT_NAME + "/CarServlet",
					type : "post",
					data : {
						action : "find-type",
						typename : typename
					},
					datatype : "json",
					success : function(data) {
						$("#faced").html(1);
						$("#total").html(1);
						var s = document.getElementsByName("1");
						$(s).detach();
						for (var i = 0; i < data.length; i++) {
							var nextcar = $("#Carmsg").clone(true);
							nextcar.attr("name", "1");
							nextcar.find("#Carid").html(data[i].id);
							nextcar.find("#cName").html(data[i].cName);
							nextcar.find("#price").html(data[i].price);
							nextcar.find("#msg").html(data[i].msg);
							nextcar.find("#pic").html(data[i].pic);
							nextcar.find("#typeid").html(data[i].typeId);
							nextcar.find("#handle").html("");
							nextcar.find("#handle").append("<input type='button' id='delCar' value='删除'  onclick='delCar(this)'>");
							nextcar.find("#handle").append("<input type='button' id='updCar' value='修改' onclick='updCar(this)'>");
							$("tbody").append(nextcar);
						}
					}
				});
			} else {
				$.ajax({
					url : PROJECT_NAME + "/CarServlet",
					type : "post",
					data : {
						action : "carslist"
					},
					datatype : "json",
					success : function(data) {
						$("#faced").html(1);
						var s = document.getElementsByName("1");
						$(s).detach();
						for (var i = 0; i < data.length; i++) {
							var nextcar = $("#Carmsg").clone(true);
							nextcar.attr("name", "1");
							nextcar.find("#Carid").html(data[i].id);
							nextcar.find("#cName").html(data[i].cName);
							nextcar.find("#price").html(data[i].price);
							nextcar.find("#msg").html(data[i].msg);
							nextcar.find("#pic").html(data[i].pic);
							nextcar.find("#typeid").html(data[i].typeId);
							nextcar.find("#handle").html("");
							nextcar.find("#handle").append("<input type='button' id='delCar' value='删除' onclick='delCar(this)'>");
							nextcar.find("#handle").append("<input type='button' id='updCar' value='修改' onclick='updCar(this)'>");
							$("tbody").append(nextcar);
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
			}
		});
		$("#addCar").click(function() {
			$("#add").css("display", "block");
		});
		$("#addcancel").click(function() {
			$("#add").css("display", "none");
		});
		$("#in").click(function() {
			var addcName = $("#addcName").val();
			var addprice = $("#addprice").val();
			var addmsg = $("#addmsg").val();
			var addtype = $("#addtype").val();
			$.ajax({
				url : PROJECT_NAME + "/CarServlet",
				type : "post",
				data : {
					action : "addCar",
					addcName : addcName,
					addprice : addprice,
					addmsg : addmsg,
					addtype : addtype
				},
				datatype : "json",
				success : function(data) {
					$("#add").css("display", "none");
					alert(data);
				}
			});
		});
		$("#up").click(function() {
			var updcarid=$("#updcarid").val();
			var updcName=$("#updcName").val();
			var updprice=$("#updprice").val();
			var updmsg=$("#updmsg").val();
			var updtype=$("#updtype").val();
			$.ajax({
				url : PROJECT_NAME + "/CarServlet",
				type : "post",
				data : {
					action : "updCar",
					updcarid:updcarid,
					updcName : updcName,
					updprice : updprice,
					updmsg : updmsg,
					updtype : updtype
				},
				datatype : "json",
				success : function(data) {
					$("#upd").css("display", "none");
					alert(data);
				}
			});
		});
		$("#upcancel").click(function() {
			$("#upd").css("display","none");
		});
		$("#logOut").click(function(){
			$.ajax({
				url : PROJECT_NAME + "/CarServlet",
				type : "post",
				data : {
					action : "logout",
				},
				datatype : "json",
				success : function(data) {
					alert(data);
					window.location.href="index.jsp";
				}
			});
		});
	});