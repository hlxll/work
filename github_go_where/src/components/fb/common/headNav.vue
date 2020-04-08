<template>
<div>
	<div class="fb">
		<div class="fbzx">
			<img src="../imgs/product/logo-withe.png" class="dunpai"/>
		</div>
		
		<div class="NavClose" ref="CloseNav" @click="CloseAll">
			<i class="el-icon-close"></i>
		</div>
		<ul class="Nav" ref="Nav">
			<li @mouseover="OpenDiv" @click="ClickOpenDiv" class="ModileSmall">处理中心</li>
		<el-row class="tac ModileBig">
			<el-col :span="24" style="overflow: hidden;">
			    <el-menu
			      default-active="2"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose"
			      background-color="#545c64"
			      text-color="#fff"
			      active-text-color="#ffd04b">
			      <el-submenu index="1">
			        <template slot="title">
			          <!-- <i class="el-icon-location"></i> -->
			          <span>处理中心</span>
			        </template>
			        <el-menu-item-group>
			          <template slot="title">安全监测</template>
			          <el-menu-item index="1-1">先知</el-menu-item>
			          <el-menu-item index="1-2">漏洞监测</el-menu-item>
					  <el-menu-item index="1-3">暗链监测</el-menu-item>
					  <el-menu-item index="1-4">篡改监测</el-menu-item>
					  <el-menu-item index="1-5">可用性监测</el-menu-item>
					  <el-menu-item index="1-6">坏链监测</el-menu-item>
					  <el-menu-item index="1-7">内容监测</el-menu-item>
			        </el-menu-item-group>
			        <!-- <el-menu-item-group title="分组2">
			          <el-menu-item index="1-3">选项3</el-menu-item>
			        </el-menu-item-group>
			        <el-submenu index="1-4">
			          <template slot="title">选项4</template>
			          <el-menu-item index="1-4-1">选项1</el-menu-item>
			        </el-submenu> -->
			      </el-submenu>
			    </el-menu>
			  </el-col>
		</el-row>
			<li @mouseover="OpenDiv" @click="ClickOpenDiv" class="ModileSmall">解决方案</li>
			<el-row class="tac ModileBig">
				<el-col :span="24" style="overflow: hidden;">
				    <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      @open="handleOpen"
				      @close="handleClose"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b">
				      <el-submenu index="2">
				        <template slot="title">
				          <!-- <i class="el-icon-location"></i> -->
				          <span>解决方案</span>
				        </template>
				        <el-menu-item-group>
				          <template slot="title">安全防护</template>
				          <el-menu-item index="2-1">玄武盾</el-menu-item>
				          <el-menu-item index="2-2">漏洞监测</el-menu-item>
						  <el-menu-item index="2-3">web应用防护</el-menu-item>
						  <el-menu-item index="2-4">专利级CC防护</el-menu-item>
						  <el-menu-item index="2-5">网页篡改防护</el-menu-item>
						  <el-menu-item index="2-6">DDos攻击防护</el-menu-item>
						  <el-menu-item index="2-7">网站隐身/替身</el-menu-item>
						  <el-menu-item index="2-8">大数据流量分析</el-menu-item>
				        </el-menu-item-group>
				        <!-- <el-menu-item-group title="分组2">
				          <el-menu-item index="1-3">选项3</el-menu-item>
				        </el-menu-item-group>
				        <el-submenu index="1-4">
				          <template slot="title">选项4</template>
				          <el-menu-item index="1-4-1">选项1</el-menu-item>
				        </el-submenu> -->
				      </el-submenu>
				    </el-menu>
				  </el-col>
			</el-row>
			<li @mouseover="OpenDiv" @click="ClickOpenDiv" class="ModileSmall">技术支持</li>
			<el-row class="tac ModileBig">
				<el-col :span="24" style="overflow: hidden;">
				    <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      @open="handleOpen"
				      @close="handleClose"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b">
				      <el-submenu index="1">
				        <template slot="title">
				          <!-- <i class="el-icon-location"></i> -->
				          <span>技术支持</span>
				        </template>
				        <el-menu-item-group>
				          <template slot="title">安全评估</template>
				          <el-menu-item index="1-1">雷神众测</el-menu-item>
				          <el-menu-item index="1-2">代码审计</el-menu-item>
						  <el-menu-item index="1-3">基线核查</el-menu-item>
						  <el-menu-item index="1-4">APP安全评估</el-menu-item>
						  <el-menu-item index="1-5">智能合约审计</el-menu-item>
						  <el-menu-item index="1-6">资产梳理</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				    </el-menu>
				  </el-col>
			</el-row>
			<li @mouseover="OpenDiv" @click="ClickOpenDiv" class="ModileSmall">风暴资讯</li>
			<el-row class="tac ModileBig">
				<el-col :span="24" style="overflow: hidden;">
				    <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      @open="handleOpen"
				      @close="handleClose"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b">
				      <el-submenu index="1">
				        <template slot="title">
				          <span>风暴资讯</span>
				        </template>
					<el-menu-item-group>
						<template slot="title">应急响应</template>
						<el-menu-item index="1-1">安恒通</el-menu-item>
						<el-menu-item index="1-2">安全事件实时告警</el-menu-item>
						<el-menu-item index="1-3">重大事件攻击响应</el-menu-item>
						<el-menu-item index="1-4">APP态势可视化</el-menu-item>
						<el-menu-item index="1-5">7*24小时安全运维</el-menu-item>
					</el-menu-item-group>
				      </el-submenu>
				    </el-menu>
				  </el-col>
			</el-row>
		</ul>
		<div class="NavButton">
			<button type="text" class="lgButton">登陆</button>
			<el-button type="primary" class="syButton" size="small">免费试用</el-button>
		</div>
		<!-- 打开导航栏列表 -->
		<div class="NavTable" @click="OpenNav">
			<i class="el-icon-circle-plus"></i>
		</div>
	</div>
	<div class="NavTwoDiv" ref="NavTwoDiv" @mouseleave="CloseDiv">
	  <div class="NavTwo">
		  <ul class="NavTwoUl">
			  <li style="border-bottom: 1px solid #b8c7e6;"><span>安全监测</span></li>
			  <li>先知</li>
			  <li>漏洞监测</li>
			  <li>暗链监测</li>
			  <li>篡改监测</li>
			  <li>可用性监测</li>
			  <li>坏链监测</li>
			  <li>内容监测</li>
		  </ul>
		  <ul class="NavTwoUl">
			  <li style="border-bottom: 1px solid #b8c7e6;"><span>安全防护</span></li>
			  <li>玄武盾</li>
			  <li>漏洞监测</li>
			  <li>web应用防护</li>
			  <li>专利级CC防护</li>
			  <li>网页篡改防护</li>
			  <li>DDos攻击防护</li>
			  <li>网站隐身/替身</li>
			  <li>大数据流量分析</li>
		  </ul>
		  <ul class="NavTwoUl">
			   <li style="border-bottom: 1px solid #b8c7e6;"><span>安全评估</span></li>
			  <li>雷神众测</li>
			  <li>渗透测试</li>
			  <li>代码审计</li>
			  <li>基线核查</li>
			  <li>APP安全评估</li>
			  <li>智能合约审计</li>
			  <li>资产梳理</li>
		  </ul>
		  <ul class="NavTwoUl">
			   <li style="border-bottom: 1px solid #b8c7e6;"><span>应急响应</span></li>
			  <li>安恒通</li>
			  <li>安全事件实时告警</li>
			  <li>重大事件攻击响应</li>
			  <li>APP态势可视化</li>
			  <li>7*24小时安全运维</li>
		  </ul>
	  </div>
	</div>
</div>
</template>

<script>
export default {
  name:"fbhome",
  data() {
    return {
		Nav: false,
		jianceImg: true,
		fanghuImg: true,
		pingguImg: true,
		// xiangyingImg: true,
		PaginaStyleOne: {'border-bottom':'2px solid #2e8ae6'},
		PaginaStyleTwo: '',
		PaginaStyleThree: '',
		AppImgOne: 'true',
		AppImgTwo: '',
		AppImgThree: ''
    }
  },
  methods:{
	  handleOpen: function(){
		  console.log(1)
	  },
	  handleClose: function(){
		  console.log(1)
	  },
	  ChangePagina :function (item){
		  var StyleOne = {'border-bottom':'2px solid #2e8ae6'}
		  if(item == 1){
			  this.PaginaStyleOne = StyleOne;
			  this.PaginaStyleTwo = '';
			  this.PaginaStyleThree = '';
			  this.AppImgOne = 'true',
			  this.AppImgTwo = '',
			  this.AppImgThree = ''
		  }else if(item == 2){
			  this.PaginaStyleOne = '';
			  this.PaginaStyleTwo = StyleOne;
			  this.PaginaStyleThree = '';
			  this.AppImgOne = '',
			  this.AppImgTwo = 'true',
			  this.AppImgThree = ''
		  }else{
			  this.PaginaStyleOne = '';
			  this.PaginaStyleTwo = '';
			  this.PaginaStyleThree = StyleOne;
			  this.AppImgOne = '',
			  this.AppImgTwo = '',
			  this.AppImgThree = 'true'
		  }
		  
	  },
	  OpenNav(){
		  this.$refs.CloseNav.style.display = 'block'
		  this.$refs.Nav.style.display = 'block'
	  },
		CloseAll(){
			this.$refs.CloseNav.style.display = 'none'
			this.$refs.Nav.style.display = 'none'
			this.$refs.NavTwoDiv.style.display = 'none'
		},
		ClickOpenDiv(){
			var ClientW = document.body.clientWidth;
			if(ClientW>= 767){
				var dis = this.$refs.NavTwoDiv.style.display
				if(dis == 'block'){
					this.$refs.NavTwoDiv.style.display = 'none'
				}else{
					this.$refs.NavTwoDiv.style.display = 'block'
				}
			}
			
		},
		OpenDiv(){
			var ClientW = document.body.clientWidth;
			if(ClientW>= 767){
				this.$refs.NavTwoDiv.style.display = 'block'
			}
		},
		CloseDiv(){
			this.$refs.NavTwoDiv.style.display = 'none'
		}
		// translateImg(item){
		// 	if(item == 1){
		// 		this.jianceImg = !this.jianceImg
		// 	}
		// 	if(item == 2){
		// 		this.fanghuImg = !this.fanghuImg
		// 	}
		// 	if(item == 3){
		// 		this.pingguImg = !this.pingguImg
		// 	}
		// 	if(item == 4){
		// 		this.xiangyingImg = !this.xiangyingImg
		// 	}
		// }
  }
}	
</script>

<style>
	@media  (max-width:767px) {
		/* 当前宽度,ui下拉列表样式*/
		.ModileBig{
			/* height: 25%; */
			width: 100%;
			text-align: center;
			
		}
		/* 当前宽度,原先下拉点击栏隐藏 */
		.ModileSmall{
			display: none;
		}
		
		.el-dropdown-link {
		    cursor: pointer;
		    color: #409EFF;
		}
		.el-icon-arrow-down {
			font-size: 12px;
		}
		.NavTwoDiv{
			display: none;
		}
		.fb{
			width: 100%;
			height: 60px;
			border-bottom: 1px solid #D3D3D3;
			/* background-color: #409EFF; */
			background-color: #5ebae6;
			display: flex;
			display: -webkit-flex;
		}
		.syButton{
			background-image: linear-gradient(22deg, 
					#53b9f1 0%, 
					#2e8ae6 100%);
				box-shadow: 0px 1px 3px 0px 
					rgba(51, 49, 90, 0.2);
				border-radius: 4px;
		}
		.lgButton{
			/* width: 28px;
			height: 13px; */
			font-size: 0.875rem;
			color: #FFFFFF;
			margin-right: 35px;
			background-color: #5EBAE6;
			border: none;
			border-radius: none;
			box-shadow: none;
			cursor: pointer;
			
		}
		.block{
			width: 100%;
			height: 100px;
		}
		.block ul{
			display: none;
		}
		.blockImg{
			width: 100%;
			/* height: ; */
		}
		.fbzx{
			height: 100%;
			width: 150px;
			/* float: left; */
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: center;
		}
		.dunpai{
			height: 80%;
			/* width: 80%; */
		}
		.NavClose{
			z-index: 99;
			position: absolute;
			top: 0;
			right: 50%;
			display: none;
			height: 60px;
			width: 60px;
			font-size: 40px;
			background-color: rgba(41,59,102,0.8);
		}
		.NavClose i{
			line-height: 60px;
			color: #FFFFFF;
		}
		.Nav{
			display: none;
			position: absolute;
			right: 0;
			top: 0;
			width: 50%;
			height: 230px;
			float: right;
			z-index: 999;
			background-color: rgba(41,59,102,0.8);
			
		}
		.Nav li{
			cursor:pointer;
			width: 100%;
			/* padding-left: 10%; */
			list-style-type: none;
			color: #FFFFFF;
			text-align: left;
			line-height: 50px;
			border-bottom: 1px solid #000000;
		}
		.el-menu-item{
			min-width: 128px;
		}
		.NavButton{
			width: 45%;
			/* float: left; */
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: center;
		}
		.NavTable{
			float: right;
			width: 20px;
			height: 100%;
			/* margin: auto 0; */
		}
		.NavTable i{
			width: 20px;
			height: 20px;
			position: relative;
			top: 40%;
		}
		
	}
	@media (min-width:1200px) {
		.fbzx{
			margin-left: 250px;
			height: 100%;
			width: 150px;
			/* float: left; */
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: center;
		}
		.dunpai{
			height: 80%;
			/* width: 80%; */
		}
		/* 当前宽度,ui下拉列表隐藏 */
		.ModileBig{
			display: none;
		}
		.ModileSmall{
			color: #FFFFFF;
		}
		.blockImg{
			width: 100%;
			height: 500px;
		}
		.fb{
			width: 100%;
			height: 60px;
			/* border-bottom: 1px solid #D3D3D3; */
			background-color: #5ebae6;
			display: flex;
			display: -webkit-flex;
		}
		.lgButton{
			/* width: 28px;
			height: 13px; */
			font-size: 0.875rem;
			color: #FFFFFF;
			margin-right: 35px;
			background-color: #5EBAE6;
			border: none;
			border-radius: none;
			box-shadow: none;
			cursor: pointer;
			
		}
		.syButton{
			background-image: linear-gradient(22deg, 
					#53b9f1 0%, 
					#2e8ae6 100%);
				box-shadow: 0px 1px 3px 0px 
					rgba(51, 49, 90, 0.2);
				border-radius: 4px;
		}
		.NavClose{
			display:none;
		}
		.Nav{
		cursor:pointer;
		width: 40%;
		float: left;
		height: 60px;
		line-height: 60px;
		}
		.block{
			width: 100%;
			height: 500px;
		}
		.block ul{
			display: none;
		}
		.NavTwoDiv{
			display: none;
			width:100%;
			height:360px;
			position: absolute;
			top: 60px;
			left: 0;
			z-index: 999;
		background-color: rgb(255,255,255);
			border-top: 1px solid #D3D3D3;
		}
		.NavTwo{
			width: 60%;
			margin: 0 auto;
			height: 360px;
		}
		.NavTwoUl{
			width: 20%;
			float: left;
			height: 100%;
			margin-right: 5%;
		}
		.NavTwoUl:first-child{
			width: 136px;
		}
		.NavTwoUl li span{
			font-size: 1.125rem;
			line-height: 48px;
		}
		.NavTwoUl li{
			text-align: left;
			list-style-type: none;
			font-size: 0.875rem;
			line-height: 32px;
			cursor: pointer;
		}
		.Nav li{
			cursor:pointer;
			width: 25%;
			list-style-type: none;
			float: left;
		}
		.NavButton{
			width: 27%;
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: center;
		}
		.NavTable{
			display: none;
		}
	}
	@media  (min-width:768px) and (max-width:1199px) {
		.fbzx{
			height: 100%;
			width: 150px;
			/* float: left; */
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: center;
			margin-left: 20px;
		}
		.dunpai{
			height: 80%;
			/* width: 80%; */
		}
		
		/* 当前宽度,ui下拉列表隐藏 */
		.ModileBig{
			display: none;
		}
		.ModileSmall{
			color: #FFFFFF;
		}
		.blockImg{
			width: 100%;
			/* height: ; */
		}
		.fb{
			width: 100%;
			height: 60px;
			border-bottom: 1px solid #D3D3D3;
			background-color: #5ebae6;
			display: flex;
			display: -webkit-flex;
		}
		.syButton{
			background-image: linear-gradient(22deg, 
					#53b9f1 0%, 
					#2e8ae6 100%);
				box-shadow: 0px 1px 3px 0px 
					rgba(51, 49, 90, 0.2);
				border-radius: 4px;
		}
		.lgButton{
			/* width: 28px;
			height: 13px; */
			font-size: 0.875rem;
			color: #FFFFFF;
			margin-right: 35px;
			background-color: #5EBAE6;
			border: none;
			border-radius: none;
			box-shadow: none;
			cursor: pointer;
			
		}
		.block{
			width: 100%;
		}
		.block ul{
			display: none;
		}
		.NavTwoDiv{
			display: none;
			width:100%;
			height:360px;
			position: absolute;
			top: 60px;
			left: 0;
			z-index: 999;
			background-color: rgba(255,255,255,0.5);
			border-top: 1px solid #D3D3D3;
		}
		.NavTwo{
				width: 80%;
				margin: 0 auto;
				display: flex;
				/* align-items: center; */
				justify-content: center;
				height: 360px;
				/* position: absolute;
				top: 60px; */
				/* z-index: 999; */
				/* border-top: 1px solid #e1e4e6; */
			}
			.NavTwoUl{
				width: 20%;
				float: left;
				height: 100%;
				margin-right: 3%;
			}
			.NavTwoUl:first-child{
				width: 136px;
			}
		/* 	.NavTwoUl:first-child{
				border-bottom: 1px solid #b8c7e6;
			} */
			.NavTwoUl li span{
				font-size: 1.125rem;
				line-height: 48px;
			}
			.NavTwoUl li{
				text-align: left;
				list-style-type: none;
				font-size: 0.875rem;
				line-height: 32px;
				cursor: pointer;
			}
		.NavClose{
			display:none;
		}
		.Nav{
		  width: 50%;
		  height: 60px;
		  line-height: 60px;
		  display: flex;
		  display: -webkit-flex;
		  /* float: left; */
		}
		.Nav li{
			width: 25%;
			list-style-type: none;
			/* float: left; */
		}
		.NavButton{
			width: 20%;
			/* float: right; */
			/* margin-top: 13px; */
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: center;
		}
		.NavTable{
			display: none;
		}
	}
</style>
