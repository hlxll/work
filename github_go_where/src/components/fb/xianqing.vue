<template>
	<div id="xiangqing">
		<v-headnav v-bind:color="yanse"></v-headnav>
	  <!-- 轮播图 -->
		<div class="block">
			  <img src="./imgs/fbYiqing.png" class="blockImg"/>
		</div>

	  <!-- 产品 -->
	  <div class="product">
		  <div class="productPT">
		  <p class="productp">全栈式产品优势</p>
		  <p class="productpp">PRODUCT ADVANTAGES</p>
		  </div>

	  </div>

	  <!-- 4个产品分类 -->
	  <div class="productMain">
		  <el-row class="productRow">
		    <el-col :lg="6" :sm="12" :xs="24" class="xqproductspan prductspanBorder">
				<div class="grid-content bg-purple pMcol">
					<!-- <div class="pMcolImg" @mouseenter="(1)" @mouseleave="translateImg(1)"> -->
					<div class="pMcolImg">
					  <img src="./imgs/product/jcbiglinming.png"/>
					</div>

					<div class="productText">
						<p class="productTextp">高灵敏监测</p>
						<p class="productTextpp">采用机器学习技术，学习670万+网站，更智能灵敏发现网页被黑动态</p>
					</div>
			    </div>
			</el-col>
			<el-col :lg="6" :sm="12" :xs="24" class="xqproductspan prductspanBorder">
				<div class="grid-content bg-purple pMcol">
					<div class="pMcolImg">
					  <img src="./imgs/product/jcbinkekao.png"/>
					</div>

					<div class="productText">
						<p class="productTextp">高可靠监测</p>
						<p class="productTextpp">云端智能调控50个节点多线路监测，无被误封、线路延时等故障</p>
					</div>
			    </div>
			</el-col>
			<el-col :lg="6" :sm="12" :xs="24" class="xqproductspan prductspanBorder">
				<div class="grid-content bg-purple pMcol">
					<div class="pMcolImg">
					  <img src="./imgs/product/Owubaofuwu.png"/>
					</div>

					<div class="productText">
						<p class="productTextp">零误报服务</p>
						<p class="productTextpp">安全运营团队7*24值守，专业审核校验，零误报保障服务</p>
					</div>
			    </div>
			</el-col>
			<el-col :lg="6" :sm="12" :xs="24" class="xqproductspan">
				<div class="grid-content bg-purple pMcol">
					<div class="pMcolImg">
					  <img src="./imgs/product/miaojixianyin.png"/>
					</div>

					<div class="productText">
						<p class="productTextp">秒级响应</p>
						<p class="productTextpp">大数据态势感知系统，大数据态势感知系统</p>
					</div>
			    </div>
			</el-col>
		  </el-row>
	  </div>
	  <!-- 产品功能 -->

    <div class="JjFa">
		  <div class="JjFaproduct">
		  		  <div class="JjFaproductPT">
		  		  <p class="JjFaproductp">全方位的产品功能</p>
		  		  <p class="JjFaproductpp">PRODUCT FUNCTION</p>
		  		  </div>
		  </div>
		  <el-row class="JjFaRow">
		    <el-col :lg="12" :sm="24" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<div>1</div>
					</div>
					<div class="JjFaText">
						<p class="JjFaTextp">漏洞扫描</p>
						<p class="JjFaTextpp">通过大数据漏洞扫描技术，及时发现漏洞与系统存在的各类安全隐患，并持续跟踪漏洞修复情况</p>
					</div>
				</div>
			</el-col>
			<el-col :lg="12" :sm="24" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<div>2</div>
					</div>
					<div class="JjFaText">
						<p class="JjFaTextp">篡改监测</p>
						<p class="JjFaTextpp">篡改监测引擎，对网站进行实时监控，及时发现网页链接异常篡改，告警通知。</p>
					</div>
				</div>
			</el-col>
			<el-col :lg="12" :sm="24" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<div>3</div>
					</div>
					<div class="JjFaText">
						<p class="JjFaTextp">内容监测</p>
						<p class="JjFaTextpp">对网站所有页面进行监测，通过关键字词库，发现“反共、博彩、色情”等安全事件。</p>
					</div>
				</div>
			</el-col>
			<el-col :lg="12" :sm="24" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<div>4</div>
					</div>
					<div class="JjFaText">
						<p class="JjFaTextp">可用性监测</p>
						<p class="JjFaTextpp">7*24小时，实时监测网站的可用性，包括网站是否能访问、访问速度、状态码、源站可访问性等，云端多点探测，模拟访客真实行为。</p>
					</div>
				</div>
			</el-col>
			<el-col :lg="12" :sm="24" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<div>5</div>
					</div>
					<div class="JjFaText">
						<p class="JjFaTextp">暗链监测</p>
						<p class="JjFaTextpp">通过机器学习、 聚集度检测等关键专利技术算法，对网站进行暗链监测，对源代码中的超链接进行筛选、校验、分析，检测网站是否被嵌入暗链，发现网页中的无效链接。</p>
					</div>
				</div>
			</el-col>
		  </el-row>
    </div>

	  <!-- 应用场景 -->
	<div class="SoftWare">
		<div class="software">
			<div class="AppTitle">
				<p class="AppP">应用场景</p>
				<p class="AppPP">APPLICTION</p>
			</div>
			<div class="Pagina">
				<div :style="PaginaStyleOne" @click="ChangePagina(1)">用户安全自查场景</div>
				<div :style="PaginaStyleTwo" @click="ChangePagina(2)">监管单位安全检查场景</div>
				<div :style="PaginaStyleThree" @click="ChangePagina(3)">数据中心资产安全治理场景</div>
			</div>
			<div class="AppImg" v-if="AppImgOne">
				<img src="./imgs/product/softwareOne.png"/>
				<div class="APPImgText">
					<p>场景痛点1</p>
					<ul class="APPTextUl">
						<li><span>资产、安全风险不明，面临被上级监管单位通报</span></li>
						<li><span>被篡改无法及时发现</span></li>
						<li><span>应急处置能力弱</span></li>
						<li><span>漏洞和事件无法验证</span></li>
						<li><span>安全预警不及时</span></li>
					</ul>
					<p>方案价值</p>
					<ul class="APPTextUl">
						<li><span>用户零部署，完成资产、安全漏洞、安全事件发现</span></li>
						<li><span>安全专家辅助安全运维，漏洞、安全事件人工核实验证，确保零误报</span></li>
						<li><span>7*24小时应急响应</span></li>
						<li><span>安全预警精准通报</span></li>
					</ul>
				</div>
				<!-- <div class="APPUnderline"></div> -->
			</div>
			<div class="AppImg" v-if="AppImgTwo">
				<img src="./imgs/product/softwareOne.png"/>
				<div class="APPImgText">
					<p>场景痛点2</p>
					<ul class="APPTextUl">
						<li><span>资产、安全风险不明，面临被上级监管单位通报</span></li>
						<li><span>被篡改无法及时发现</span></li>
						<li><span>应急处置能力弱</span></li>
						<li><span>漏洞和事件无法验证</span></li>
						<li><span>安全预警不及时</span></li>
					</ul>
					<p>方案价值</p>
					<ul class="APPTextUl">
						<li><span>用户零部署，完成资产、安全漏洞、安全事件发现</span></li>
						<li><span>安全专家辅助安全运维，漏洞、安全事件人工核实验证，确保零误报</span></li>
						<li><span>7*24小时应急响应</span></li>
						<li><span>安全预警精准通报</span></li>
					</ul>
				</div>
				<!-- <div class="APPUnderline"></div> -->
			</div>
			<div class="AppImg" v-if="AppImgThree">
				<img src="./imgs/product/softwareOne.png"/>
				<div class="APPImgText">
					<p>场景痛点3</p>
					<ul class="APPTextUl">
						<li><span>资产、安全风险不明，面临被上级监管单位通报</span></li>
						<li><span>被篡改无法及时发现</span></li>
						<li><span>应急处置能力弱</span></li>
						<li><span>漏洞和事件无法验证</span></li>
						<li><span>安全预警不及时</span></li>
					</ul>
					<p>方案价值</p>
					<ul class="APPTextUl">
						<li><span>用户零部署，完成资产、安全漏洞、安全事件发现</span></li>
						<li><span>安全专家辅助安全运维，漏洞、安全事件人工核实验证，确保零误报</span></li>
						<li><span>7*24小时应急响应</span></li>
						<li><span>安全预警精准通报</span></li>
					</ul>
				</div>
				<!-- <div class="APPUnderline"></div> -->
			</div>
		</div>
	</div>
	<!-- 产品套餐 -->
	<div class="ProductTC">
		<div class="TCTitle">
			<p class="TCTitlep">满足不同需求的产品套餐</p>
			<p class="TCTitlepp">SERVER PRICING</p>
		</div>
		<div class="TCText">
			<p>规格与功能</p>
			<i>/</i>
			<p>详情</p>
		</div>
		<div class="TCMain">
			<el-row>
				<el-col :lg="12" :md="24" :sm="24" :xs="24">
					<div class="grid-content bg-purple TCMainLeft">
						<ul class="TCMainText">
							<li>
								<p class="TCMainTextp">服务规格</p>
								<p class="TCMainTextpp">1个一级域名，包含不超过5个二级域名</p>
							</li>
							<li style="background-color: #f5f7fa;">
								<p class="TCMainTextp">安全漏洞扫描</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
							<li>
								<p class="TCMainTextp">安全事件监测</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
							<li style="background-color: #f5f7fa;">
								<p class="TCMainTextp">篡改监测</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
							<li>
								<p class="TCMainTextp">内容监测</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
						</ul>
					</div>
				</el-col>
				<el-col  :lg="12" :md="24" :sm="24" :xs="24">
					<div class="grid-content bg-purple-light TCMainRight">
						<ul class="TCMainText">
							<li>
								<p class="TCMainTextp">可用性监测</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
							<li style="background-color: #f5f7fa;">
								<p class="TCMainTextp">暗链坏链监测</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
							<li>
								<p class="TCMainTextp">DNS域名解析监测</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
							<li style="background-color: #f5f7fa;">
								<p class="TCMainTextp">可视化报表</p>
								<p class="TCMainTextpp"><img src="./imgs/product/zhichi.png"/>支持</p>
							</li>
							<li>
								<p class="TCMainTextp">运营服务支持</p>
								<p class="TCMainTextpp">7*24小时</p>
							</li>
						</ul>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>

	  <!-- 众多公司板报 -->
	  <div class="gsblockB">
		  <div class="xqgsblockText">
			  <p class="gsblockTextp">新人注册，即可免费体验产品</p>
			  <p class="gsblockTextpp">立即体验</p>
		  </div>
	  </div>

	  <!-- 地板 -->
		<v-base></v-base>

	</div>
</template>


<script>
import Base from './common/Base.vue';
import headNav from './common/headNav.vue'
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
		AppImgThree: '',
		yanse: {color: "2e8ae6",colorT: "white"},
		setintervalTime: 1
    }
  },
  components:{
	  'v-base': Base,
	  'v-headnav': headNav
  },
  mounted: function(){
	  this.setintervalT()
  },
  methods:{
	  setintervalT(){
		var that = this
		var setTime = setInterval(function(){
			that.ChangePagina(that.setintervalTime)
			if(that.setintervalTime == 3){
				that.setintervalTime = 1
			}else{
				that.setintervalTime++
			}
		},4000)
	  },
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
	  // OpenNav(){
		 //  this.$refs.CloseNav.style.display = 'block'
		 //  this.$refs.Nav.style.display = 'block'
	  // },
		// CloseAll(){
		// 	this.$refs.CloseNav.style.display = 'none'
		// 	this.$refs.Nav.style.display = 'none'
		// 	this.$refs.NavTwoDiv.style.display = 'none'
		// },
		// ClickOpenDiv(){
		// 	var ClientW = document.body.clientWidth;
		// 	if(ClientW>= 767){
		// 		var dis = this.$refs.NavTwoDiv.style.display
		// 		if(dis == 'block'){
		// 			this.$refs.NavTwoDiv.style.display = 'none'
		// 		}else{
		// 			this.$refs.NavTwoDiv.style.display = 'block'
		// 		}
		// 	}

		// },
		// OpenDiv(){
		// 	var ClientW = document.body.clientWidth;
		// 	if(ClientW>= 767){
		// 		this.$refs.NavTwoDiv.style.display = 'block'
		// 	}
		// },
		// CloseDiv(){
		// 	this.$refs.NavTwoDiv.style.display = 'none'
		// }
  }
}
</script>

<style socped lang="scss">
	#xiangqing{
    // *{
    // 	  margin: 0;
    //       padding: 0;
    // 	}
    	@media (min-width:1200px){
    		body,html{
    			font-size: 16px;
          min-width: 1200px;
    		}
    	}
    	@media (max-width:767px){
    		body,html{
    			font-size: 6px;
          max-width: 767px;
          min-width: 0;
    		}
    	}
    	@media (min-width:768px) and (max-width:1199px){
    		body,html{
    			font-size: 10px;
          min-width: 768px;
    		}
    	}
    	@media  (max-width:767px) {
    		.block{
    			width: 100%;
    			height: 100px;
    		}
    		.block ul{
    			display: none;
    		}
    		.blockImg{
    			width: 100%;
    		}
    
    	}
    	@media (min-width:1200px) {
    		.block{
    			width: 100%;
    			height: 500px;
    		}
    		.block ul{
    			display: none;
    		}
    	}
    	@media  (min-width:768px) and (max-width:1199px) {
    		.block{
    			width: 100%;
    		}
    		.block ul{
    			display: none;
    		}
    	}
    
    	@media (min-width:1200px) {
    		.product{
    			width: 30%;
    			height: 100px;
    			margin: 0 auto;
    			display: flex;
    			display: -webkit-flex;
    			align-items: center;
    			justify-content: center;
    		}
    		.productPT{
    			width: 100%;
    			height: 62px;
    		}
    		.productp{
    			font-size: 1.75rem;
    			width: 100%;
    			font-family: PingFang-SC-Medium;
    			line-height: 46px;
    			text-align: center;
    			color: #1f2533;
    		}
    		.productpp{
    				width: 100%;
    				height: 16px;
    				line-height: 16px;
    				font-family: PingFang-SC-Medium;
    				font-size: 1rem;
    				text-align: center;
    				color: #7a8599;
    		}
    	}
    	@media (min-width:768px) and (max-width:1200px){
    		.product{
    			width: 50%;
    			height: 100px;
    			margin: 0 auto;
    			display: flex;
    			display: -webkit-flex;
    			align-items: center;
    			justify-content: center;
    		}
    		.productPT{
    			width: 100%;
    			height: 100px;
    			/* margin-bottom: 35px; */
    		}
    		.productp{
    			font-size: 1.5625rem;
    			width: 100%;
    			font-family: PingFang-SC-Medium;
    			line-height: 46px;
    			text-align: center;
    			color: #1f2533;
    		}
    		.productpp{
    				width: 100%;
    				height: 16px;
    				font-family: PingFang-SC-Medium;
    				font-size: 0.8125rem;
    				text-align: center;
    				color: #7a8599;
    		}
    	}
    	@media (max-width:767px){
    		.product{
    			width: 50%;
    			height: 88px;
    			margin: 0 auto;
    		}
    		.productPT{
    			width: 100%;
    			height: 88px;
    			/* margin-bottom: 35px; */
    		}
    		.productp{
    			font-size: 1.5625rem;
    			width: 100%;
    			font-family: PingFang-SC-Medium;
    			line-height: 46px;
    			text-align: center;
    			color: #1f2533;
    		}
    		.productpp{
    				width: 100%;
    				height: 16px;
    				font-family: PingFang-SC-Medium;
    				font-size: 0.8125rem;
    				text-align: center;
    				color: #7a8599;
    		}
    	}
    
    	/* .productMain{
    		width: 95%;
    		margin: 0 auto;
    		padding-bottom: 60px;
    	} */
    	.productRow{
    		text-align: center;
    		/* display: flex; */
    		/* justify-content: center; */
    	}
    	.productText{
    		width: 82%;
    		height: 78%;
    		margin-left: 27px;
    		/* background-color: red; */
    		text-align: left;
    	}
    	.productTextp{
    		text-align: center;
    		font-size: 1.125rem;
    		line-height: 46px;
    		letter-spacing: 1px;
    		color: #2e384d;
    	}
    	.productTextpp{
    		text-align: center;
    		font-size: 0.875rem;
    		line-height: 28px;
    		letter-spacing: 0px;
    		color: #7a8599;
    	}
    	.xqproductspan{
    		height: 450px;
    		/* width: 326px; */
    	}
    	.pMcol{
    		width: 272px;
    		margin: 0 auto;
    		/* border-radius: 4px; */
    		/* box-shadow: 0px 2px 8px 0px rgba(125, 143, 178, 0.2); */
    		/* margin-left: 37px; */
    	}
    	.pMcolImg{
    		width: 100%;
    		display: flex;
    		height: 100px;
    		/* text-align: center; */
    		align-items: center;
    		justify-content: center;
    		/* background: repeating-linear-gradient(rgb(240,248,254),rgb(255,255,255)); */
    	}
    	.pMcolImg img{
    		/* z-index: 999; */
    		width: 104px;
    		height: 106px;
    		/* margin-left: 27px;
    		margin-top: 21px; */
    	}
    
    	/* 解决方案 */
    	.JjFaproductp{
    		font-size: 1.75rem;
    		width: 100%;
    		height: 36px;
    		font-family: PingFang-SC-Medium;
    		text-align: center;
    		color: #1f2533;
    		line-height: 46px;
    	}
    	@media (min-width:1200px) {
    		.prductspanBorder{
    			border-right: 1px solid rgb(184,199,230);
    		}
    		.productMain{
    			width: 95%;
    			margin: 0 auto;
    			padding-bottom: 60px;
    		}
    		.JjFa{
    		width: 100%;
    		height: 730px;
    		background-color: #F7F9FC;
    	}
    	}
    	@media (max-width:1199px) {
    		.productMain{
    			width: 95%;
    			margin: 0 auto;
    			/* padding-bottom: 60px; */
    		}
    		.JjFa{
    		width: 100%;
    		height: 1220px;
    		background-color: #F7F9FC;
    	}
    	}
    /* 	@media (min-width:1200px) {
    		.JjFa{
    		width: 100%;
    		height: 730px;
    		background-color: #F7F9FC;
    	}
    	} */
    	@media (min-width:769px) {
    
    	.JjFaproductpp{
    			line-height: 46px;
    			width: 100%;
    			height: 16px;
    			font-family: PingFang-SC-Medium;
    			font-size: 1rem;
    			text-align: center;
    			color: #7a8599;
    	}
    	.JjFaproduct{
    			width: 40%;
    			height: 188px;
    			margin: 0 auto;
    	}
    	}
    	@media (max-width:768px) {
    	.JjFaproductpp{
    			line-height: 30px;
    			width: 100%;
    			height: 16px;
    			font-family: PingFang-SC-Medium;
    			font-size: 1rem;
    			text-align: center;
    			color: #7a8599;
    	}
    	.JjFaproduct{
    			width: 40%;
    			height: 100px;
    			margin: 0 auto;
    	}
    	}
    	.JjFaproductPT{
    			width: 100%;
    			height: 100%;
    			display: flex;
    			display: -webkit-flex;
    			flex-direction: column;
    			justify-content: center;
    		}
    	.JjFaCol > div{
    		height: 100%;
    		background-image: url(./imgs/product/区块链bj.png);
    		/* box-shadow: 1px 2px 8px 0px rgba(125, 143, 178, 0.2); */
    		/* border-radius: 4px; */
    		margin-left: 24px;
    		display: flex;
    		align-items: center;
    		/* flex-direction: column; */
    	}
    	@media (min-width:1200px) {
    		.JjFaRow{
    			width: 80%;
    			margin: 0 auto;
    		}
    		.JjFaCol{
    			margin-top: 24px;
    			height: 130px;
    		}
    	}
    	@media (min-width:768px) and (max-width:1199px){
    		.JjFaRow{
    			width: 70%;
    			margin: 0 auto;
    		}
    		.JjFaCol{
    			margin-top: 24px;
    			height: 180px;
    		}
    	}
    	@media (max-width:768px){
    		.JjFaRow{
    			width: 80%;
    			margin: 0 auto;
    		}
    		.JjFaCol{
    			margin-top: 24px;
    			height: 180px;
    		}
    	}
    	.JjFaMain{
    		width: 68px;
    		height: 130px;
    		margin-right: 19px;
    		text-align: left;
    		display: -webkit-flex;
    		display: flex;
    		align-items: center;
    
    	}
    	.JjFaMain div{
    		width: 68px;
    		height: 78px;
    		background: url(./imgs/product/function.png);
    		background-repeat:no-repeat;
    		display: flex;
    		display: -webkit-flex;
    		align-items: center;
    		justify-content: center;
    	}
    /* 	.JjFaMain img{
    		width: 68px;
    		height: 78px;
    	} */
    	.JjFaText{
    		width: 90%;
    		margin: 0 auto;
    		height: 130px;
    		display: -webkit-flex;
    		display: flex;
    		flex-direction: column;
    		justify-content: center;
    	}
    	.JjFaTextp{
    		text-align: left;
    		font-size: 18px;
    		line-height: 46px;
    		letter-spacing: 1px;
    		color: #2e384d;
    	}
    	.JjFaTextpp{
    		text-align: left;
    		font-size: 0.875rem;
    		line-height: 28px;
    		letter-spacing: 0px;
    		color: #7a8599;
    	}
    	.JjFaTextU{
    		width: 50%;
    		height: 96px;
    	}
    	.JjFaTextU li{
    		list-style-type: none;
    		color: #2e8ae6;
    		width: 98%;
    		height: 40px;
    		display: -webkit-flex;
    		display: flex;
    		/* flex-direction:row; */
    		justify-content:flex-start;
    		align-items: center;
    	}
    	.JjFaTextU li i{
    		display: inline-block;
    
    		width: 8px;
    		height: 8px;
    		border-radius: 50%;
    		background-color: #2E8AE6;
    		/* background-image: linear-gradient(42deg, #53b9f1 0%, #2e8ae6 100%); */
    		margin-right: 5px;
    		/* position: relative;
    		top: 50%;
    		margin-top: -5px; */
    	}
    	.JjFaTextU li span{
    		font-size: 1rem;
    		line-height: 40px;
    		/* color: #1f2533; */
    	}
    	.faDataP{
    			margin-top: 81px;
    			margin-bottom: 49px;
    		}
    	.faDataP h1{
    		font-size: 1.75rem;
    		color: #1f2533;
    		line-height: 48px;
    	}
    	.faDataP p{
    		font-size: 1rem;
    		color: #7a8599;
    		line-height: 46px;
    	}
    
    	/* 产品套餐 */
    	/* .ProductTC{
    		width: 100%;
    		height: 600px;
    		background-color: #f7f9fc;
    	} */
    	.TCTitle{
    		width: 100%;
    		height: 200px;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		flex-direction: column;
    
    	}
    	.TCTitlep{
    		/* text-align: center; */
    		font-size: 1.75rem;
    		line-height: 46px;
    		letter-spacing: 1px;
    		color: #1f2533;
    	}
    	.TCTitlepp{
    		font-size: 1rem;
    		line-height: 46px;
    		letter-spacing: 0px;
    		color: #7a8599;
    	}
    	.TCMain >div{
    		width: 100%;
    		height: 100%;
    	}
    	.TCMain > div > div{
    		height: 240px;
    	}
    	@media (min-width:1200px){
    		.TCMainText li{
    			display: flex;
    			display: -webkit-flex;
    		}
    		.TCMainLeft{
    			height: 100%;
    			margin-right: 12px;
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.TCMainRight{
    			height: 100%;
    			margin-left: 12px;
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.ProductTC{
    			width: 100%;
    			height: 600px;
    			background-color: #f7f9fc;
    		}
    		.TCMain{
    			width: 70%;
    			margin: 0 auto;
    			margin-top: 21px;
    			height: 240px;
    		}
    		.TCText{
    			display: flex;
    			display: -webkit-flex;
    			width: 70%;
    			font-size: 1.125rem;
    			line-height: 46px;
    			letter-spacing: 0px;
    			color: #1f2533;
    			margin: 0 auto;
    			justify-content: center;
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.TCText i{
    			width: 20px;
    		}
    		.TCMainTextp{
    			text-align: left;
    			width: 28%;
    			margin: 0 auto;
    			font-size: 14px;
    			line-height: 47px;
    			letter-spacing: 0px;
    			color: #7a8599;
    			border-right: 1px solid #b8c7e6;
    		}
    		.TCMainTextpp{
    			text-align: left;
    			width: 60%;
    			font-size: 14px;
    			line-height: 47px;
    			letter-spacing: 0px;
    			color: #2e384d;
    			display: flex;
    			display: -webkit-flex;
    			align-items: center;
    		}
    		.TCMain > div > div{
    			height: 240px;
    		}
    	}
    	@media (max-width:767px){
    		.TCMainText li{
    			display: flex;
    			display: -webkit-flex;
    			width: 95%;
    			margin: 0 auto;
    		}
    		.TCMainLeft{
    			height: 100%;
    			/* margin-right: 12px; */
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.TCMainRight{
    			height: 100%;
    			/* margin-left: 12px; */
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.ProductTC{
    			width: 100%;
    			height: 840px;
    			background-color: #f7f9fc;
    		}
    		.TCMain{
    				width: 100%;
    				margin: 0 auto;
    				margin-top: 21px;
    				height: 560px;
    			}
    		.TCText{
    			display: flex;
    			display: -webkit-flex;
    			width: 90%;
    			font-size: 1.125rem;
    			line-height: 46px;
    			letter-spacing: 0px;
    			color: #1f2533;
    			margin: 0 auto;
    			justify-content: center;
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.TCText i{
    			width: 20px;
    		}
    		.TCMainTextp{
    			text-align: left;
    			width: 30%;
    			margin: 0 auto;
    			font-size: 0.875rem;
    			line-height: 47px;
    			letter-spacing: 0px;
    			color: #7a8599;
    			border-right: 1px solid #b8c7e6;
    		}
    		.TCMainTextpp{
    			text-align: left;
    			width: 70%;
    			font-size: 0.875rem;
    			line-height: 47px;
    			letter-spacing: 0px;
    			color: #2e384d;
    			display: flex;
    			display: -webkit-flex;
    			align-items: center;
    		}
    		.TCMain > div > div{
    			height: 280px;
    		}
    	}
    	@media (min-width:768px) and (max-width:1199px){
    		.TCMainText li{
    			display: flex;
    			display: -webkit-flex;
    		}
    		.TCMainLeft{
    			height: 100%;
    			/* margin-right: 12px; */
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.TCMainRight{
    			height: 100%;
    			/* margin-left: 12px; */
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.ProductTC{
    			width: 100%;
    			height: 840px;
    			background-color: #f7f9fc;
    		}
    		.TCMain{
    				width: 90%;
    				margin: 0 auto;
    				margin-top: 21px;
    				height: 560px;
    			}
    		.TCText{
    			display: flex;
    			display: -webkit-flex;
    			width: 90%;
    			font-size: 1.125rem;
    			line-height: 46px;
    			letter-spacing: 0px;
    			color: #1f2533;
    			margin: 0 auto;
    			justify-content: center;
    			background-color: #ffffff;
    			box-shadow: 1px 2px 10px 0px
    				rgba(125, 143, 178, 0.2);
    			border-radius: 8px;
    		}
    		.TCText i{
    			width: 20px;
    		}
    		.TCMainTextp{
    			text-align: left;
    			width: 20%;
    			margin: 0 auto;
    			font-size: 14px;
    			line-height: 47px;
    			letter-spacing: 0px;
    			color: #7a8599;
    			border-right: 1px solid #b8c7e6;
    		}
    		.TCMainTextpp{
    			text-align: left;
    			width: 70%;
    			font-size: 14px;
    			line-height: 47px;
    			letter-spacing: 0px;
    			color: #2e384d;
    			display: flex;
    			display: -webkit-flex;
    			align-items: center;
    		}
    		.TCMain > div > div{
    			height: 280px;
    		}
    	}
    
    	.TCMainTextpp img{
    		margin-right: 10px;
    	}
    	/* 公司地板 */
    	.gsblockB{
    		width: 100%;
    		height: 194px;
    		position: relative;
    		background-color: #b8c7e6;
    	}
    /* 	.gsblockBImg{
    		width: 100%;
    		height: 100%;
    	} */
    	.xqgsblockText{
    		display: flex;
    		display: -webkit-flex;
    		align-items: center;
    		justify-content: center;
    		flex-direction: column;
    		height: 100%;
    	}
    	.gsblockTextp{
    		/* width: 333px; */
    		height: 47px;
    			font-size: 1.875rem;
    			line-height: 47px;
    			letter-spacing: 1px;
    			color: #ffffff;
    	}
    	.gsblockTextpp{
    		text-align: center;
    		border-radius: 18px;
    		border: solid 1px #f7f9fc;
    		width: 112px;
    		height: 46px;
    		font-size: 1rem;
    		line-height: 46px;
    		color: #7a8599;
    		margin-top: 31px;
    		cursor: pointer;
    	}
    	/* 应用场景样式 */
    	.software{
    		width: 89%;
    		height: 100%;
    		margin: 0 auto;
    	}
    	.AppTitle{
    		display: flex;
    		display: -webkit-flex;
    		flex-direction: column;
    		margin-top: 100px;
    	}
    	.AppP{
    		text-align: center;
    		font-size: 1.75rem;
    		line-height: 46px;
    		letter-spacing: 1px;
    		color: #1f2533;
    	}
    	.AppPP{
    		text-align: center;
    		font-size: 1rem;
    		line-height: 46px;
    		letter-spacing: 0px;
    		color: #7a8599;
    	}
    	@media (min-width:1200px) {
    		.Pagina{
    			width: 100%;
    			height: 75px;
    			display: flex;
    			align-items: center;
    			justify-content: center;
    			border-bottom: 1px solid #b8c7e6;
    			font-size: 0;
    		}
    		.Pagina > div{
    			box-sizing:border-box;
    			height: 100%;
    			width: 25%;
    			font-size: 1.125rem;
    			line-height: 46px;
    			letter-spacing: 1px;
    			color: #2e384d;
    			cursor: pointer;
    		}
    		.APPTextUl {
    			margin-left: 30px;
    		}
    		.APPImgText p{
    			text-align: left;
    			font-size: 0.875rem;
    			line-height: 46px;
    			letter-spacing: 0px;
    			color: #2e384d;
    			margin-left: 15px;
    		}
    		.SoftWare{
    			height: 930px;
    			width: 100%;
    		}
    		.AppImg{
    			width: 100%;
    			height: 500px;
    			display: flex;
    			display: -webkit-flex;
    		}
    		.APPImgText{
    			background-color: #ffffff;
    				box-shadow: 1px 2px 8px 0px
    					rgba(125, 143, 178, 0.2);
    				border-radius: 8px;
    			margin-left: 40px;
    			height: 100%;
    			width: 30%;
    			border-bottom: 2px solid rgb(46,138,230);
    		}
    	}
    	@media (max-width:1199px) {
    		.Pagina{
    			width: 100%;
    			height: 50px;
    			display: flex;
    			align-items: center;
    			justify-content: center;
    			border-bottom: 1px solid #b8c7e6;
    			font-size: 0;
    
    
    		}
    		.Pagina > div{
    			box-sizing: border-box;
    			height: 100%;
    			width: 30%;
    			font-size: 1.125rem;
    			line-height: 25px;
    			letter-spacing: 1px;
    			color: #2e384d;
    			cursor: pointer;
    		}
    		.APPTextUl {
    			margin-left: 30px;
    		}
    		.APPImgText p{
    			text-align: left;
    			font-size: 0.875rem;
    			line-height: 46px;
    			letter-spacing: 0px;
    			color: #2e384d;
    			margin-left: 15px;
    		}
    		.AppImg{
    			width: 100%;
    			height: 700px;
    		}
    		.SoftWare{
    			height: 940px;
    			width: 100%;
    		}
    		.APPImgText{
    			background-color: #ffffff;
    				box-shadow: 1px 2px 8px 0px
    					rgba(125, 143, 178, 0.2);
    				border-radius: 8px;
    			margin-left: 40px;
    			height: 80%;
    			width: 83%;
    		}
    
    	}
    
    	.AppImg img{
    		width: 60%;
    	}
    
    	.APPTextUl li{
    		text-align: left;
    		color: rgb(125, 143, 178);
    	}
    /* 	.APPTextUl li i{
    		width: 12px;
    		height: 12px;
    		border-radius: 50%;
    		background-color: rgb(125, 143, 178);
    	} */
    	.APPTextUl li span{
    		text-align: left;
    		font-size: 0.875rem;
    		line-height: 36px;
    		letter-spacing: 0px;
    		color: #7a8599;
    
    	}
    	/* 地板样式 */
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
    			color: #ffffff !important;
    	}
    	.fbQR{
    		width: 209px;
    		/* float: right; */
    		text-align: left;
    		margin: 0 auto;
    		color: #FFFFFF;
    		/* margin-left: 10px; */
    		margin-top: 10px;
    	}
    	.fbbottom{
    		  width: 100%;
    		  margin: 0 auto;
    		  height: 263px;
    		  /* padding-top: 20px; */
    		  display: flex;
    		  display: -webkit-flex;
    		  flex-direction: column;
    	}
    	}
  }


</style>
