
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
	<title>购物车</title>
	<link href="EasyUI/themes/default/easyui.css" rel="stylesheet" />
	<link href="EasyUI/themes/icon.css" rel="stylesheet" />
	<link rel="stylesheet"  href="Css/style.css" />
	<script	src="EasyUI/jquery.min.js"></script>
	<script	src="EasyUI/jquery.easyui.min.js"></script>
	<script	src="EasyUI/locale/easyui-lang-zh_CN.js"></script>
	<script src="Js/common.js" type="text/javascript"></script>
	<script src="Js/FormValidate.js" type="text/javascript"></script>
	<script src="Js/main.js" type="text/javascript"></script>
	<script src="Js/Cart.js" type="text/javascript"></script>
	<style type="text/css">
		.dialog-button{text-align: center;}
		.dialog-button .l-btn{margin-left:15px;}
		table{font:normal normal 14px '仿宋';border-spacing: 2px;}
		table td{padding: 5px 2px;}
		table th{text-align: right;}
	</style>
</head>
<body>
	<div class="top">
		<div id="head" data-from="index">
			<div class="header-wrap"><img src="img/header-logo.a3fe9382.png" alt="毛豆新车网" class="logo-img">
				<!-- 导航栏 -->
				<div class="nav">
					<ul class="nav-box">
						<li class="nav-item">
							<a class="item" href="index.jsp">首页</a>
						</li>
						<li class="nav-item">
							<a class="item" id="logOut">注销</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="cartGrid"></div>
	<div id="dlg">
		<form id="fm" action="" method="post">
			<table>
				<tr>
					<th><label>商品名称：</label></th>
					<td><input id="cName" name="cName"/></td>
				</tr>
				<tr>
					<th><label>价格（万元）：</label></th>
					<td><input id="price" type="text" name="price"/></td>
				</tr>
				
				<tr>
					<th><label>收货人：</label></th>
					<td><input id="userName" type="text" name="uName"/></td>
				</tr>
				<tr>
					<th><label>手机号：</label></th>
					<td><input id="phone" type="text" name="tel"/></td>
				</tr>
				<tr>
					<th><label>收货地址：</label></th>
					<td><input type="text" id="location" name="address"></td>
				</tr>
			</table>
		</form>
	</div>
</body>
</html>
