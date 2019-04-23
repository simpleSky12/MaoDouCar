
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
	<title>毛豆新车网</title>
	<link href="EasyUI/themes/default/easyui.css" rel="stylesheet" />
	<link href="EasyUI/themes/icon.css" rel="stylesheet" />
	<link rel="stylesheet"  href="Css/style.css" />
	<script	src="EasyUI/jquery.min.js"></script>
	<script	src="EasyUI/jquery.easyui.min.js"></script>
	<script	src="EasyUI/locale/easyui-lang-zh_CN.js"></script>
	<script src="Js/common.js" type="text/javascript"></script>
	<script src="Js/index.js" type="text/javascript"></script>
	<script src="Js/main.js" type="text/javascript"></script>
	<script src="Js/FormValidate.js" type="text/javascript"></script>
	<style type="text/css">
		.dialog-button{text-align: center;}
		.dialog-button .l-btn{margin-left:15px;}
		table{font:normal normal 14px '仿宋';border-spacing: 2px;}
		table td{padding: 5px 2px;}
		table th{text-align: right;}
		#page {
			position: absolute;
			left: 200px;
		}
		
		#choose {
			position: absolute;
			top: 480px;
			left: 300px;
		}
		
		#choose-name, #choose-type {
			margin-left: 50px;
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
					<li class="nav-item"><a class="item" id="login">登录</a></li>
					<li class="nav-item"><a class="item" id="register">注册</a></li>
					<li class="nav-item"><a class="item" id="logIn">个人中心</a></li>
				</ul>
			</div>
		</div>
		<%--// 登录弹窗--%>
		<div id="loginDlg">
			<form id="fm" action="" method="post">
				<table>
					<tr>
						<th><label>用 户 名：</label></th>
						<td><input id="txtLoginName" name="name" /></td>
					</tr>
					<tr>
						<th><label>密 码：</label></th>
						<td><input id="txtPassword" type="password" name="psw" /></td>
					</tr>
				</table>
			</form>
		</div>
		<%--// 注册，修改弹窗--%>
		<div id="dlg">
			<form id="dlgFm" action="" method="post">
				<table>
					<tr>
						<th><label>用 户 名：</label></th>
						<td><input id="uName" name="name" /></td>
					</tr>
					<tr>
						<th><label>密 码：</label></th>
						<td><input id="pwd" type="password" name="psw" /></td>
					</tr>
					<tr>
						<th><label>重复密码：</label></th>
						<td><input id="rePwd" type="password" name="rePsw" /></td>
					</tr>
					<tr>
						<th><label>手机号：</label></th>
						<td><input id="tel" type="text" name="tel" /></td>
					</tr>
					<tr>
						<th><label>地址：</label></th>
						<td>
							 <input type="text" id="address" name="address">
						</td>
					</tr>
				
				</table>
			</form>
		</div>
	</div>
</div>
<!-- banner图 -->
<div id="banner">
	<img src="img/banner.25c3a414.jpg" alt="毛豆新车网">
</div>
<div id="choose">
	<input type="text" id="choose-name" placeholder="输入车名"> <input
		type="button" id="find-name" value="查找"> <select
		id="choose-type">
	<option>请选择</option>
	<option>美系</option>
	<option>德系</option>
	<option>日系</option>
	<option>国产</option>
	<option>欧系</option>
</select>根据车系筛选
<input type="button" id="find" value="查找">
<input type="button" id="return" value="显示全部">
</div>
<!-- 车辆列表 -->
<div id="car-wrapper">
	<div class="car-item" id="car-item">
		<div class="item-mask"></div>
		<img src="img/1.jpg" class="item-pic">
		<div class="price-box">
				<span class="downpay">售价<span class="num-font"></span>万
				</span>
		</div>
		<div class="name-box">
			<span class="car-name"></span><br>
		</div>
		<textarea rows="" cols="" class="car-msg" style="display: none;"></textarea>
		<span class="car-id" style="display: none"></span>
	</div>
</div>
<div id="page">
	<input type="button" id="lastpage" value="上一页"
	       style="background-color:#ff7414"> <input type="button"
	                                                id="nextpage" value="下一页" style="background-color:#ff7414">
	当前页:<span id="faced"></span> 总页数:<span id="total"></span> <input
		id="pagenum" type="text" style="width: 20"> <input id="go"
	                                                       type="button" value="跳转" style="background-color:#ff7414">
</div>
</form>
<!-- 轻松四步 -->
<div id="four-step">
	<p class="step-title">轻松四步 开走新车</p>
	<div class="step-box">
		<div class="step-item">
			<img src="img/step-1.cb728287.png" alt="在线选车" class="step-img">
			<p class="step-title">在线选车</p>
			<p class="step-text">选中意向车型，提交手机号</p>
			<p class="step-text">毛豆新车顾问为您提供一对一服务</p>
			<div class="point-box"></div>
		</div>
		<div class="step-item">
			<img src="img/step-2.e6a4ea63.png" alt="快速信审" class="step-img">
			<p class="step-title">快速信审</p>
			<p class="step-text">专属顾问协助您准备并提交相关资料</p>
			<p class="step-text">快速进行信用审核</p>
			<div class="point-box"></div>
		</div>
		<div class="step-item">
			<img src="img/step-3.e213c012.png" alt="支付首款" class="step-img">
			<p class="step-title">支付首款</p>
			<p class="step-text">根据复审评估结果</p>
			<p class="step-text">确定首付/月供方案后支付首付款</p>
			<div class="point-box"></div>
		</div>
		<div class="step-item">
			<img src="img/step-4.558963f0.png" alt="无忧提车" class="step-img">
			<p class="step-title">无忧提车</p>
			<p class="step-text">完成保险、上牌等手续后</p>
			<p class="step-text">销售顾问将联系您提车</p>
		</div>
	</div>
</div>
<!-- 常见问题 -->
<div id="question-wrap">
	<p class="question-title">常见问题</p>
	<div class="question-box">
		<div class="question-item">
			<div class="question">什么是“毛豆新车网”？</div>
			<div class="answer">
				毛豆新车网，成立于2017年9月，是以线上数据和技术驱动、线下毛豆新车店深度服务相融合的一站式汽车新零售服务平台。<br>毛豆新车网致力于满足中国消费者日益增长的汽车消费与使用需求，为消费者提供低门槛，灵活多样，省心省力的创新型用车服务。
			</div>
		</div>
		<div class="question-item">
			<div class="question">真的只需要提供身份证、银行卡、驾照就能办理？</div>
			<div class="answer">毛豆新车网使用领先的互联网大数据风控技术，大部分用户只需提供身份证，还款银行卡及驾照信息即可进行信审审核，一般整个信审审核（复审）过程30分钟内结束，如需额外申请资料您的专属毛豆销售顾问会和您联系。</div>
		</div>
		<div class="question-item">
			<div class="question">金融初审通过审核以后，需要做什么？</div>
			<div class="answer">金融信审初审通过后，根据您选定的车型，销售顾问将协助您在线签订电子融资租赁预约合同，并进行金融复审，根据复审的评估结果支付首付（包括履约保证金和首期车款）；根据复审评估结果，首期车款的付款成数可能不同。</div>
		</div>
	</div>
</div>
<!-- 底部信息 -->
<div id="foot">
	<div class="footer-nav-box">
		<ul class="footer-nav">
			<li class="footer-nav-item"><a href="#">关于毛豆</a></li>
			<li class="footer-nav-item"><a href="#">隐私条款</a></li>
			<li class="footer-nav-item"><a href="#">用户协议</a></li>
			<li class="footer-nav-item"><a href="#">执照信息</a></li>
		</ul>
	</div>
	<div class="footer">
		<div class="footer-logo-box">
			<div class="footer-wrap">
				<img src="img/footer-logo.bca93678.png" alt="毛豆新车网"
				     class="footer-logo"><span class="addr">金毛豆技术开发（北京）有限公司
						010-57317000北京市海淀区上地十街1号院5号楼13层1302</span>
			</div>
			<p class="jubao">互联网违法或不良信息举报联系方式 邮箱：jubao@guazi.com
				电话：010-89191670</p>
			<p class="copyright">Copyright © 2017 www.maodou.com All Rights
				Reserved</p>
			<p class="police">京公网安备 11010802024517号 京ICP备16036420号-2
				京B2-20180770</p>
		</div>
	</div>
</div>
</body>
</html>
