
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
	<title>汽车管理页面</title>
	<link href="EasyUI/themes/default/easyui.css" rel="stylesheet" />
	<link href="EasyUI/themes/icon.css" rel="stylesheet" />
	<link rel="stylesheet"  href="Css/style.css" />
	<script	src="EasyUI/jquery.min.js"></script>
	<script	src="EasyUI/jquery.easyui.min.js"></script>
	<script	src="EasyUI/locale/easyui-lang-zh_CN.js"></script>
	<script src="Js/common.js" type="text/javascript"></script>
	<script src="Js/FormValidate.js" type="text/javascript"></script>
	<script src="Js/CarManager.js"></script>
	<style type="text/css">
		#show {
			width: 100%;
		}
		
		#show tr td {
			border-right: 1px solid #000;
			text-align: center;
		}
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
					<li class="nav-item">
						<a class="item" href="OrderManager.jsp">订单管理</a>
					</li>
				</ul>
			</div>
		</div>
	</div>`
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
</div>
<table id="show" style="border: 1px solid #000;">
	<tr id="Carmsg">
		<td id="carid">id</td>
		<td id="cName">车名</td>
		<td id="price">价格</td>
		<td id="msg">车辆信息</td>
		<td id="pic">图片</td>
		<td id="typeid">车辆系别</td>
		<td style="border: none;" id="handle">操作</td>
	</tr>
</table>
<input type="button" id="lastpage" value="上一页"
       style="background-color:#ff7414">
<input type="button" id="nextpage" value="下一页"
       style="background-color:#ff7414"> 当前页:
<span id="faced"></span> 总页数:
<span id="total"></span>
<input id="pagenum" type="text"  style="width: 20px;">
<input id="go" type="button" value="跳转"
       style="background-color:#ff7414">
</body>
</html>
