<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    
    <title>汽车详情页</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link href="EasyUI/themes/default/easyui.css" rel="stylesheet" />
	<link href="EasyUI/themes/icon.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="Css/style.css" />
	<script src="EasyUI/jquery.min.js"></script>
	<script src="EasyUI/jquery.easyui.min.js"></script>
	<script src="EasyUI/locale/easyui-lang-zh_CN.js"></script>
	<script src="Js/common.js" type="text/javascript"></script>
	<script type="text/javascript" src="Js/carDetail.js"></script>
	<style type="text/css">
		ul li{
			list-style: none;
		}
		.top {
			float: left;
		}
		.nav{
			float: left;
			
			position: absolute;
			left: 150px;
			top: -6px;
		}
		li {
		float:left;
		
		}
		.nav-item{
			margin: 20px;
		}
		.item{
			text-decoration: none;
		}
		.banner-tit{
			position: absolute;
			left: 737px;
			top: 2px;
		}
		.sy-yf{
			width: 300px;
			height: auto;
			position: absolute;
			left: 740px;
			top: 161px;
		}
		.sy-num{
			position: absolute;
			left: 3px;
			top: -80px;
		}
		.case-word{
			position: absolute;
			left: 740px;
			top: 120px;
		}
		.bak{
			position: absolute;
			left: 50px;
			top: 100px;
		}
		.price{
			position: absolute;
			left: 740px;
			top: 55px;
		}
	</style>

  </head>
  
	<body>
		<div class="top ">
			<div id="head" data-from="detail">
				<div class="header-wrap"><img src="img/header-logo.a3fe9382.png" alt="毛豆新车网" class="logo-img">
					<div class="nav">
						<ul class="nav-box">
							<li class="nav-item"><a class="item" href="index.jsp">首页
								</a></li>
							<li class="nav-item"><a class="item" href="#" id="addCart">加入购物车 </a></li>
							<li class="nav-item"><a class="item" href="Cart.jsp" id="goCart">购物车 </a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="banner">
			<div class="banner clearfix">
				<div class="banner-left">
					<div class="slider">
						<ul>
							<li>
								<div class="bak" >
									<img style="width: 600px" src="img/1.jpg">
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="banner-right">
					<h2 class="banner-tit">${cName}</h2>
					<div>
						<div class="case-tit ">
							<div class="shu-line"></div>
							<p class="price">价格</p>
						</div>
						<div class="finance-con active">
							<div class="sy-wrap " data-gzlog="tracking_type=click&eventid=95244305">
								<div class="sy-yf">
									<div class="sy">
										<p class="sy-num">${price}万</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="case">
						<div class="case-tit ">
							<div class="shu-line"></div>
							<p class="case-word">车辆详情</p>
						</div>
						<div class="finance-con active">

							<div class="sy-wrap " data-gzlog="tracking_type=click&eventid=95244305">
								<div class="sy-yf">
									<p class="Msg">${msg}</p>
									<p id="carid" style="display: none">${carid}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</a>
		</div>
		</div>
	</body>
</html>
