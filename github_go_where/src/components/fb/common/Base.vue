<template>
<div>
	<div class="fbbottomAll">
	  <div class="fbbottom">
	  	<div class="fbJs">
	  		<ul>
	  			<span class="fbJsOne">产品推荐</span>
	  			<li style="color: #a9aaad;">云监测</li>
	  			<li style="color: #a9aaad;">云防护</li>
	  			<li style="color: #a9aaad;">DDos高防</li>
				<li style="color: #a9aaad;">钓鱼监测</li>
				<li style="color: #a9aaad;">CDN加速</li>
				<li style="color: #a9aaad;">渗透测试</li>
	  		</ul>
	  		<ul>
	  			<span class="fbJsOne">解决方案</span>
	  			<li style="color: #a9aaad;">金融</li>
	  			<li style="color: #a9aaad;">区块链</li>
	  			<li style="color: #a9aaad;">游戏</li>
				<li style="color: #a9aaad;">电商</li>
				<li style="color: #a9aaad;">教育</li>
				<li style="color: #a9aaad;">医疗</li>
	  		</ul>
	  		<ul>
	  			<span class="fbJsOne">帮助中心</span>
	  			<li style="color: #a9aaad;">技术支持</li>
	  			<li style="color: #a9aaad;">常见问题</li>
	  			<li style="color: #a9aaad;">试用申请</li>
	  		</ul>
	  		<ul>
	  			<span class="fbJsOne">关于我们</span>
	  			<li style="color: #a9aaad;">风暴中心</li>
	  			<li style="color: #a9aaad;">安恒信息</li>
	  			<li style="color: #a9aaad;">资质荣誉</li>
	  		</ul>
	  	</div>
	  	<div class="fbQR">
	  		<img src="../imgs/erweima.png"/>
	  		<p class="fbQRpp"><i class="el-icon-phone"></i>400-6059-110</p>
	  		<p class="fbQRp"><i class="el-icon-message"></i>saaswaf@dbappsecurity.com.cn</p>
	  	</div>
	  </div>
	</div>
	<div class="bottom_beizhu">
		<p>© 2017 安恒风暴中心 浙ICP备09102757号-12</p>
	</div>
</div>
</template>

<script>
</script>

<style>
	*{
	  margin: 0;
	  padding: 0;
	}
	@media (min-width:1200px){
		body,html{
			font-size: 16px;
		}
	}
	@media (max-width:767px){
		body,html{
			font-size: 6px;
		}
	}
	@media (min-width:767px) and (max-width:1199px){
		body,html{
			font-size: 10px;
		}
	}
	.fbQR img{
		width: 150px;
		height: 150px;
	}
	.fbQRp{
		width: 209px;
		font-size: 0.875rem;
		height: 30px;
		line-height: 30px;
		/* position: relative; */
		/* right: 50px; */
		display: flex;
		display: -webkit-flex;
		align-items: center;
	}
	.fbQRp i{
		margin-right: 10px;
	}
	.fbQRpp i{
		margin-right: 10px;
	}
	.fbQRpp{
		width: 209px;
		font-size: 0.875rem;
		height: 30px;
		line-height: 30px;
		position: relative;
		/* right: 50px; */
		display: flex;
		display: -webkit-flex;
		align-items: center;
	}
	@media (min-width:768px) {
		.fbbottomAll{
			background-color: #1f2533;
			width: 100%;
		}
		.fbJs ul{
			/* float: left; */
			width: 25%;
			display: flex;
			display: -webkit-flex;
			/* justify-content: center; */
			flex-direction: column;
		}
		.fbJs{
			width: 768px;
			/* float: left; */
			/* margin-left: 20.8125rem; */
			display: flex;
			display: -webkit-flex;
			border-right: 1px solid #7a8599;
		}
	.fbJs ul li{
		  line-height: 36px;
		  list-style-type:none;
		  font-size: 0.875rem;
		  color: #b8c7e6;
		  cursor: pointer;
	}
	.fbJsOne{
			width: 100%;
			height: 40px;
			font-size: 1rem;
			line-height: 40px;
			color: #ffffff;
			cursor: pointer;
	}
	.fbQR{
		width: 350px;
		text-align: left;
		color: #FFFFFF;
		margin-left: 111px;
		margin-top: 20px;
	}
	.fbbottom{
		  width: 90%;
		  margin: 0 auto;
		  height: 263px;
		  padding-top: 20px;
		  display: flex;
		  display: -webkit-flex;
		  justify-content: center;
	}
	}
	@media (max-width:767px){
		.fbbottomAll{
			background-color: #1f2533;
			width: 100%;
			height: 600px;
		}
		.fbJs ul{
			/* float: left; */
			width: 50%;
			margin: 0 auto;
			margin-top: 10px;
			text-align: left;
			display: flex;
			display: -webkit-flex;
			/* justify-content: center; */
			/* flex-direction: column; */
			flex-wrap:wrap;
		}
		.fbJs{
			width:100%;
			/* float: left; */
			/* margin-left: 20.8125rem; */
			display: flex;
			display: -webkit-flex;
			border-right: 1px solid #7a8599;
			flex-direction: column;
		}
		.fbJs ul li{
			width: 50%;
			  line-height: 18px;
			  list-style-type:none;
			  font-size: 0.875rem;
			  color: #b8c7e6;
		}
		.fbJsOne{
			width: 100%;
			height: 30px;
			font-size: 1rem;
			line-height: 30px;
			color: #ffffff;	
		}
		.fbQR{
			width: 209px;
			text-align: left;
			margin: 0 auto;
			color: #FFFFFF;
			margin-top: 10px;
		}
		.fbbottom{
			width: 100%;
			margin: 0 auto;
			height: 263px;
			display: flex;
			display: -webkit-flex;
			flex-direction: column;
		}
	}
		.bottom_beizhu{
			width: 100%;
			height: 40px;
			background-color: #0f131a;
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: center;
		}
		.bottom_beizhu p{
			font-size: 0.75rem;
			line-height: 30px;
			letter-spacing: 0px;
			color: #b8c7e6;
		}
</style>
