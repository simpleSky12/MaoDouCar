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
			$(".num-font").html(data[0].price);
			$(".car-name").html(data[0].cName);
			$(".car-msg").html(data[0].msg);
			$(".car-id").html(data[0].id);
			for (var i = 1; i < data.length; i++) {
				var nextcar = $("#car-item").clone(true);
				nextcar.find(".num-font").html(data[i].price);
				nextcar.find(".car-name").html(data[i].cName);
				nextcar.find(".car-msg").html(data[i].msg);
				nextcar.find(".car-id").html(data[i].id);
				$("#car-wrapper").append(nextcar);
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
		var total=$("#total").html();
		$.ajax({
			url : PROJECT_NAME + "/CarServlet",
			type : "post",
			data : {
				action : "nextpage",
				faced : faced
			},
			datatype : "json",
			success : function(data) {
				if(parseInt(faced)<parseInt(total)){
					if (data != "") {
						$("#faced").html(parseInt(faced) + 1);
						var nextcar = $("#car-item").clone(true);
						$(".car-item").detach();
						for (var i = 0; i < data.length; i++) {
							var nextcar = nextcar.clone(true);
							nextcar.find(".num-font").html(data[i].price);
							nextcar.find(".car-name").html(data[i].cName);
							nextcar.find(".car-msg").html(data[i].msg);
							nextcar.find(".car-id").html(data[i].id);
							$("#car-wrapper").append(nextcar);
						}
					}	
				}
			}
		});
	});
	$("#lastpage").click(function() {
		var faced = $("#faced").html();
		if (parseInt(faced) > 1) {
			$.ajax({
				url : PROJECT_NAME + "/CarServlet",
				type : "post",
				data : {
					action : "lastpage",
					faced : faced
				},
				datatype : "json",
				success : function(data) {
					$("#faced").html(parseInt(faced) - 1);
					var nextcar = $("#car-item").clone(true);
					$(".car-item").detach();
					for (var i = 0; i < data.length; i++) {
						var nextcar = nextcar.clone(true);
						nextcar.find(".num-font").html(data[i].price);
						nextcar.find(".car-name").html(data[i].cName);
						nextcar.find(".car-msg").html(data[i].msg);
						nextcar.find(".car-id").html(data[i].id);
						$("#car-wrapper").append(nextcar);
					}
				}
			});
		}
	});
	$("#go").click(function() {
		var pagenum =$("#pagenum").val();
		var total=$("#total").html();
		if(parseInt(pagenum)<=parseInt(total)){
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
						$("#pagenum").val("");
						if (isNaN(data)) {
							$("#faced").html($("#pagenum").val());
							var nextcar = $("#car-item").clone(true);
							$(".car-item").detach();
							for (var i = 0; i < data.length; i++) {
								var nextcar = nextcar.clone(true);
								nextcar.find(".num-font").html(data[i].price);
								nextcar.find(".car-name").html(data[i].cName);
								nextcar.find(".car-msg").html(data[i].msg);
								nextcar.find(".car-id").html(data[i].id);
								$("#car-wrapper").append(nextcar);
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
		}
	});
	$("#find").click(function() {
		var name = $("#choose-name").val();
		var type = $("#choose-type").val();
		$.ajax({
			url : PROJECT_NAME + "/CarServlet",
			type : "post",
			data : {
				action : "find",
				name : name,
				type : type
			},
			datatype : "json",
			success : function(data) {
				$("#faced").html(1);
				$("#total").html(1);
				$("#choose-name").val("");
				$("#choose-type option:first").prop("selected", 'selected');
				var nextcar = $("#car-item").clone(true);
				$(".car-item").detach();
				for (var i = 0; i < data.length; i++) {
					var nextcar = nextcar.clone(true);
					nextcar.find(".num-font").html(data[i].price);
					nextcar.find(".car-name").html(data[i].cName);
					nextcar.find(".car-msg").html(data[i].msg);
					nextcar.find(".car-id").html(data[i].id);
					$("#car-wrapper").append(nextcar);
				}
			}
		});
	});
	$("#return").click(function() {
		$.ajax({
			url : PROJECT_NAME + "/CarServlet",
			type : "post",
			data : {
				action : "carslist"
			},
			datatype : "json",
			success : function(data) {
				$("#faced").html(1);
				$(".num-font").html(data[0].price);
				$(".car-name").html(data[0].cName);
				$(".car-msg").html(data[0].msg);
				$(".car-id").html(data[0].id);
				for (var i = 1; i < data.length; i++) {
					var nextcar = $("#car-item").clone(true);
					nextcar.find(".num-font").html(data[i].price);
					nextcar.find(".car-name").html(data[i].cName);
					nextcar.find(".car-msg").html(data[i].msg);
					nextcar.find(".car-id").html(data[i].id);
					$("#car-wrapper").append(nextcar);
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
	$("#car-item").click(function() {
		var price = $(this).find(".num-font").html();
		var cName = $(this).find(".car-name").html();
		var msg = $(this).find(".car-msg").html();
		var carid = $(this).find(".car-id").html();
		$.ajax({
			url : PROJECT_NAME + "/CarServlet",
			type : "post",
			data : {
				action : "carmsg",
				price : price,
				cName : cName,
				msg : msg,
				carid : carid
			},
			datatype : "json",
			success : function(data, stutas) {
				if (data == "-1") {
					alert("请登录!");
				} else {
					window.location.href = "Carmsg.jsp";
				}
			}
		});
	});
});