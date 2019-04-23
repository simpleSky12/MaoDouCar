<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link href="Css/style.css" rel="stylesheet" type="text/css"> 
<script src="EasyUI/jquery.min.js"></script>
<script src="EasyUI/jquery.easyui.min.js"></script>
<script src="Js/manageCar.js" type="text/javascript"></script>
<script type="text/javascript" src="Js/common.js"></script>
<style type="text/css">
table {
	width: 100%;
	text-align: center;
}

td {
	border-right: 1px solid black;
	border-bottom: 1px solid black;
}

#choose {
    position:relative;
	left: 100px;
}
</style>
</head>
<body>
	<div class="top">
		<div id="head" data-from="index">
			<div class="header-wrap">
				<img src="img/header-logo.a3fe9382.png" alt="毛豆新车网" class="logo-img">
				<!-- 导航栏 -->
				<div class="nav">
					<ul class="nav-box">
						<li class="nav-item"><a class="item" href="index.jsp">首页</a>
						<li class="nav-item"><a class="item" id="logOut">注销</a>
						<li class="nav-item"><a class="item" href="OrderManager.jsp">订单管理</a>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="choose" style="margin-bottom: 20px;">
		<input type="text" id="choose-name" placeholder="输入车名"> <input
			type="button" id="find-name" value="查找"> <select
			id="choose-type">
			<option>请选择</option>
			<option>美系</option>
			<option>德系</option>
			<option>日系</option>
			<option>国产</option>
			<option>欧系</option>
		</select>根据车系筛选 <input type="button" id="addCar" value="添加车辆"> 
		<div id="add" style="display: none;">
			车名:<input type="text" id="addcName"> 价格:<input type="text"
				id="addprice">万 车辆信息:<input type="text" id="addmsg">
			车辆系别:<select id="addtype">
				<option>请选择</option>
				<option>美系</option>
				<option>德系</option>
				<option>日系</option>
				<option>国产</option>
				<option>欧系</option>
			</select> <input type="button" id="in" value="添加"> <input
				type="button" id="addcancel" value="取消">
		</div>
		<div id="upd" style="display: none;">
			id:<input type="text" id="updcarid"> 车名:<input type="text"
				id="updcName"> 价格:<input type="text" id="updprice">万
			车辆信息:
			<textarea id="updmsg" style="width: 200px; height: 100px;"></textarea>
			车辆系别:<select id="updtype">
				<option>请选择</option>
				<option>美系</option>
				<option>德系</option>
				<option>日系</option>
				<option>国产</option>
				<option>欧系</option>
			</select> <input type="button" id="up" value="确认"> <input
				type="button" id="upcancel" value="取消">
		</div>
	</div>
	<table id="show"
		style="border-left:1px solid black; border-top:1px solid black;">
		<tr id="Carmsg">
			<td id="carid">id</td>
			<td id="cName">车名</td>
			<td id="price">价格(单位:万)</td>
			<td id="msg">车辆信息</td>
			<td id="pic">图片</td>
			<td id="typeid">车辆系别</td>
			<td id="handle">操作</td>
		</tr>
	</table>
	<input type="button" id="lastpage" value="上一页"
		style="background-color:#ff7414">
	<input type="button" id="nextpage" value="下一页"
		style="background-color:#ff7414"> 当前页:
	<span id="faced"></span> 总页数:
	<span id="total"></span>
	<input id="pagenum" type="text" style="width: 20px">
	<input id="go" type="button" value="跳转"
		style="background-color:#ff7414">
</body>
</html>
