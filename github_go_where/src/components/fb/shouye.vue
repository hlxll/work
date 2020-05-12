<template>
	<div id="shouye">
		<v-headnav v-bind:color="yanse" id="yanse" ref="yanse"></v-headnav>
		<v-headnav v-bind:color="lanse" id="lanse" ref="lanse"></v-headnav>
    <v-lunbo></v-lunbo>
	  <!-- 产品 -->
	  <div class="product">
		  <div class="productPT">
		  <p class="productp">精心打磨的产品体系</p>
		  <p class="productpp">深圳安全防御领域输出体系化的安全产品</p>
		  </div>

	  </div>

	  <!-- 4个产品分类 -->
	  <div class="productMain">
		  <el-row>
		    <el-col :lg="6" :sm="12" :xs="24" class="productspan">
				<div class="grid-content bg-purple pMcol">
					<div class="pMcolImg" @mouseenter="translateImg(1)" @mouseleave="translateImg(1)">
					  <img src="./imgs/product/jcanquan.png" v-if="jianceImg"/>
					  <img src="./imgs/product/jcanquan_no.png" v-if="!jianceImg" />
					</div>

					<div class="productText">
						<p class="productTextp">安全监测</p>
						<p class="productTextpp">大数据态势感知系统，大数据态势感知系统</p>
						<ul class="productTextLi">
							<li><img src="./imgs/product/jcloudong.png"/>漏洞监测</li>
							<li><img src="./imgs/product/jcanlian.png"/>暗链监测</li>
							<li><img src="./imgs/product/jccuangai.png"/>篡改监测</li>
							<li><img src="./imgs/product/jckeyongxing.png"/>可用性监测</li>
							<li><img src="./imgs/product/jchuailian.png"/>坏链监测</li>
							<li><img src="./imgs/product/jcneirong.png"/>内容监测</li>
						</ul>
					</div>
			    </div>
			</el-col>
			<el-col :lg="6" :sm="12" :xs="24" class="productspan">
				<div class="grid-content bg-purple pMcol">
					<div class="pMcolImg" @mouseenter="translateImg(2)" @mouseleave="translateImg(2)">
					  <img src="./imgs/product/anquanfanghu.png" v-if="fanghuImg"/>
					  <img src="./imgs/product/anquanfanghu_no.png" v-if="!fanghuImg"/>
					</div>

					<div class="productText">
						<p class="productTextp">安全防护</p>
						<p class="productTextpp">大数据态势感知系统，大数据态势感知系统</p>
						<ul class="productTextLi">
							<li><img src="./imgs/product/webfanghu.png"/>web应用防护</li>
							<li><img src="./imgs/product/ccfanghu.png"/>专利级CC防护</li>
							<li><img src="./imgs/product/jccuangai.png"/>网页篡改防护</li>
							<li><img src="./imgs/product/ddosfanghu.png"/>DDoS攻击防护</li>
							<li><img src="./imgs/product/wangzhants.png"/>网站隐身/替身</li>
							<li><img src="./imgs/product/dashujufenxi.png"/>大数据流量分析</li>
						</ul>
					</div>
			    </div>
			</el-col>
			<el-col :lg="6" :sm="12" :xs="24" class="productspan">
				<div class="grid-content bg-purple pMcol">
					<div class="pMcolImg" @mouseenter="translateImg(3)" @mouseleave="translateImg(3)">
					  <img src="./imgs/product/anquanfanghu.png" v-if="pingguImg"/>
					  <img src="./imgs/product/anquanfanghu_no.png" v-if="!pingguImg"/>
					</div>

					<div class="productText">
						<p class="productTextp">安全评估</p>
						<p class="productTextpp">大数据态势感知系统，大数据态势感知系统</p>
						<ul class="productTextLi">
							<li><img src="./imgs/product/jcloudong.png"/>渗透测试</li>
							<li><img src="./imgs/product/jcanlian.png"/>代码审计</li>
							<li><img src="./imgs/product/jcloudong.png"/>基线核查</li>
							<li><img src="./imgs/product/jckeyongxing.png"/>APP安全评估</li>
							<li><img src="./imgs/product/jchuailian.png"/>智能合约审计</li>
							<li><img src="./imgs/product/jcneirong.png"/>资产梳理</li>
						</ul>
					</div>
			    </div>
			</el-col>
			<el-col :lg="6" :sm="12" :xs="24" class="productspan">
				<div class="grid-content bg-purple pMcol">
					<div class="pMcolImg" @mouseenter="translateImg(4)" @mouseleave="translateImg(4)">
					  <img src="./imgs/product/anquanfanghu.png" v-if="xiangyingImg"/>
					  <img src="./imgs/product/anquanfanghu_no.png" v-if="!xiangyingImg"/>
					</div>

					<div class="productText">
						<p class="productTextp">应急响应</p>
						<p class="productTextpp">大数据态势感知系统，大数据态势感知系统</p>
						<ul class="productTextLi">
							<li><img src="./imgs/product/jcloudong.png"/>安全事件实时告警</li>
							<li><img src="./imgs/product/jcanlian.png"/>重大事件攻击响应</li>
							<li><img src="./imgs/product/jccuangai.png"/>APP态势可视化</li>
							<li><img src="./imgs/product/jckeyongxing.png"/>7*24小时安全运维</li>
						</ul>
					</div>
			    </div>
			</el-col>
		  </el-row>
	  </div>
	  <!-- 解决方案 -->
	  <div class="JjFa">
		  <div class="JjFaproduct">
		  		  <div class="JjFaproductPT">
		  		  <p class="JjFaproductp">专业行业解决方案</p>
		  		  <p class="JjFaproductpp">根据各行业业务形式与安全需求，打造完善的行业安全解决方案</p>
		  		  </div>
		  </div>
		  <el-row class="JjFaRow">
		    <el-col :lg="8" :sm="12" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<img src="./imgs/product/qukuailian.png"/>
						<p>区块链</p>
					</div>
					<div class="JjFaText">
						<ul class="JjFaTextU">
							<li><i></i><span>智能分析审计</span></li>
							<li><i></i><span>数据加密</span></li>
							<li><i></i><span>渗透测试</span></li>
						</ul>
						<ul class="JjFaTextU">
							<li><i></i><span>风险评估</span></li>
							<li><i></i><span>云防护</span></li>
							<li><i></i><span>应急响应</span></li>
						</ul>
					</div>
				</div>
			</el-col>
			<el-col :lg="8" :sm="12" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<img src="./imgs/product/jinrong.png"/>
						<p>金融</p>
					</div>
					<div class="JjFaText">
						<ul class="JjFaTextU">
							<li><i></i><span>系统入侵防护</span></li>
							<li><i></i><span>安全合格</span></li>
							<li><i></i><span>防信息泄露</span></li>
						</ul>
						<ul class="JjFaTextU">
							<li><i></i><span>防篡改木马植入</span></li>
							<li><i></i><span>Odey漏洞修复</span></li>
							<li><i></i><span>平台可用性防护</span></li>
						</ul>
					</div>
				</div>
			</el-col>
			<el-col :lg="8" :sm="12" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<img src="./imgs/product/jiaoyu.png"/>
						<p>教育</p>
					</div>
					<div class="JjFaText">
						<ul class="JjFaTextU">
							<li><i></i><span>大流量攻击防护</span></li>
							<li><i></i><span>APP加固</span></li>
						</ul>
						<ul class="JjFaTextU">
							<li><i></i><span>平台可用性安全</span></li>
							<li><i></i><span>数据安全防护</span></li>
						</ul>
					</div>
				</div>
			</el-col>
			<el-col :lg="8" :sm="12" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<img src="./imgs/product/yiliao.png"/>
						<p>医疗</p>
					</div>
					<div class="JjFaText">
						<ul class="JjFaTextU">
							<li><i></i><span>数据安全防护</span></li>
							<li><i></i><span>漏洞扫描</span></li>
							<li><i></i><span>威胁情报</span></li>
						</ul>
						<ul class="JjFaTextU">
							<li><i></i><span>CDN加速</span></li>
							<li><i></i><span>SQL注入防护</span></li>
						</ul>
					</div>
				</div>
			</el-col>
			<el-col :lg="8" :sm="12" :xs="24" class="JjFaCol">
				<div class="grid-content bg-purple">
					<div class="JjFaMain">
						<img src="./imgs/product/youxi.png"/>
						<p>游戏</p>
					</div>
					<div class="JjFaText">
						<ul class="JjFaTextU">
							<li><i></i><span>协议规范性检测</span></li>
							<li><i></i><span>DDoS攻击防护</span></li>
							<li><i></i><span>流量勒索防护</span></li>
						</ul>
						<ul class="JjFaTextU">
							<li><i></i><span>破解与外挂监测</span></li>
							<li><i></i><span>网站劫持防护</span></li>
						</ul>
					</div>
				</div>
			</el-col>
		  </el-row>
	  </div>

	  <!-- 中心资讯 -->
	  <div class="zixun">
	  	<div class="faDataP">
	  		<h1 style="color: #4f535c;">风暴资讯中心</h1>
	  		<p style="color: #8e97a8;">了解最新最全的安全风暴动态</p>
	  	</div>
	  	<div class="zxDate">
	  		<ul>
	  			<li>
            <div class="createRight">
              <i class="el-icon-caret-right caretRight" v-if="caretRightOne"></i>
            </div>

	  				<div class="zxLeft" @click="ChangeRight(1)">

	  					<p class="zxLeftp">10</p>
	  					<p class="zxLeftpp">2020.03</p>
	  				</div>
	  				<div class="zxRight">
	  					<span>技术</span>
	  					<p style="color: #FFFFFF;">什么是Dos攻击</p>
	  				</div>
	  			</li>
	  			<li>
            <div class="createRight">
						<i class="el-icon-caret-right caretRight" v-if="caretRightTwo"></i>
            </div>
	  				<div class="zxLeft" @click="ChangeRight(2)">
	  					<p class="zxLeftp">10</p>
	  					<p class="zxLeftpp">2020.03</p>
	  				</div>
	  				<div class="zxRight">
	  					<!-- <h1 style="color: #4da1e4;text-align: left;background-color: #eef6fd;">技术</h1> -->
	  					<span>技术</span>
	  					<p style="color: #FFFFFF;">全国网络安全态势分析报告(2009年)——安恒信息</p>
	  				</div>
	  			</li>
	  			<li>
            <div class="createRight">
              <i class="el-icon-caret-right caretRight" v-if="caretRightThree"></i>
            </div>
	  				<div class="zxLeft" @click="ChangeRight(3)">
	  					<p class="zxLeftp">10</p>
	  					<p class="zxLeftpp">2020.03</p>
	  				</div>
	  				<div class="zxRight">
	  					<!-- <h1 style="color: #4da1e4;text-align: left;background-color: #eef6fd;">技术</h1> -->
	  					<span>预警通告</span>
	  					<p style="color: #FFFFFF;">涉众型经济犯罪风险监测预警平台 预警通告 第一期</p>
	  				</div>
	  			</li>
	  			<li>
            <div class="createRight">
              <i class="el-icon-caret-right caretRight" v-if="caretRightFour"></i>
            </div>
	  				<div class="zxLeft" @click="ChangeRight(4)">
	  					<p class="zxLeftp">10</p>
	  					<p class="zxLeftpp">2020.03</p>
	  				</div>
	  				<div class="zxRight">
	  					<span>资讯</span>
	  					<p style="color: #FFFFFF;">敬告投资者书——安恒信息</p>
	  				</div>
	  			</li>
	  		</ul>
	  	<div class="zxDateFD zxDateFDone" v-if="caretRightOne">
	  			<div class="AhXx">
	  				<span>敬告投资者书———安恒信息1</span>
	  				<p>2020.02.04</p>
	  			</div>
	  			<div class="zxFD">
	  				<div class="zxDText">
	  					<p>尊敬的广大投资者和客户：<br>2020年，新型冠状病毒疫情突袭武汉，蔓延华夏。
	  					面对疫情新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
	  					新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
	  					新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
	  					新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情,多出溢出
	  					</p>
	  					<a style="color: #2e8ae6;">查看详情<i class="el-icon-right"></i></a>
	  				</div>
	  				<img src="./imgs/jiayou.png"/>
	  			</div>
	  	</div>
			<div class="zxDateFD zxDateFDtwo" v-if="caretRightTwo">
				<div class="AhXx">
					<span>敬告投资者书———安恒信息2</span>
					<p>2020.02.04</p>
				</div>
				<div class="zxFD">
					<div class="zxDText">
						<p>尊敬的广大投资者和客户：<br>2020年，新型冠状病毒疫情突袭武汉，蔓延华夏。
						面对疫情新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉
						</p>
						<!-- <p> -->
							<a style="color: #2e8ae6;">查看详情<i class="el-icon-right"></i></a>


					</div>
					<img src="./imgs/jiayou.png"/>
				</div>
			</div>
			<div class="zxDateFD zxDateFDthree" v-if="caretRightThree">
				<div class="AhXx">
					<span>敬告投资者书———安恒信息3</span>
					<p>2020.02.04</p>
				</div>
				<div class="zxFD">
					<div class="zxDText">
						<p>尊敬的广大投资者和客户：<br>2020年，新型冠状病毒疫情突袭武汉，蔓延华夏。
						面对疫情新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情,多出溢出
						</p>
						<a style="color: #2e8ae6;">查看详情<i class="el-icon-right"></i></a>
					</div>
					<img src="./imgs/jiayou.png"/>
				</div>
			</div>
			<div class="zxDateFD zxDateFDfour" v-if="caretRightFour">
				<div class="AhXx">
					<span>敬告投资者书———安恒信息4</span>
					<p>2020.02.04</p>
				</div>
				<div class="zxFD">
					<div class="zxDText">
						<p>尊敬的广大投资者和客户：<br>2020年，新型冠状病毒疫情突袭武汉，蔓延华夏。
						面对疫情新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情
						新型冠状病毒疫情突袭武汉，蔓延华夏。面对疫情,多出溢出
						</p>
						<a style="color: #2e8ae6;">查看详情<i class="el-icon-right"></i></a>
					</div>
					<img src="./imgs/jiayou.png"/>
				</div>
			</div>
	  	</div>
	  </div>

	  <!-- 众多公司板报 -->
	  <div class="gsblockB">
		  <img src="./imgs/product/hezuoqiye.png" class="gsblockBImg"/>
		  <div class="gsblockText">
			  <p class="gsblockTextp">助力各行业案例</p>
			  <p class="gsblockTextpp">聚集多项创新技术 助力企业安全稳定快速发展</p>
		  </div>
	  </div>

	  <!-- 地板 -->
		<v-base></v-base>
	</div>
</template>


<script>
	import headNav from './common/headNav.vue'
	import Base from './common/Base.vue'
  import Lunbo from './vueLunbo.vue'
  export default {
  name:"fbhome",
  data() {
    return {
		Nav: false,
		jianceImg: true,
		fanghuImg: true,
		pingguImg: true,
		xiangyingImg: true,
		caretRightOne: true,
		caretRightTwo: false,
		caretRightThree: false,
		caretRightFour: false,
		yanse: {color: "ffffff",colorT: "black"},
		lanse: {color: "2e8ae6",colorT: "white"},
		yinchang: false,
		i: 0,
		setinterTime: 1
    // mobileNav: false
    }
  },
  components:{
	  'v-base': Base,
	  'v-headnav': headNav,
    'v-lunbo': Lunbo
  },
  mounted:function() {
    //给window添加一个滚动滚动监听事件
	window.addEventListener('scroll', this.handleScroll)
	this.setinter()
  },
  methods:{
	  setinter(){
		var that = this
		var setTime = setInterval(function(){
			that.ChangeRight(that.setinterTime)
			if(that.setinterTime == 4){
				that.setinterTime = 1
			}else{
				that.setinterTime++
			}
		},4000)
	  },
      handleScroll () {
        var Allwidth = document.documentElement.clientWidth || document.body.clientWidth;
        //改变元素#lanse的top值
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop<=60){
            document.querySelector('#lanse').style.display = 'none';
            document.querySelector('#yanse').style.display = 'block';
          }else{
            if(document.querySelector('#lanse').style.display != 'block'){
               document.querySelector('#lanse').style.display = 'block';
            }
            if(document.querySelector('#yanse').style.display != 'none'){
               document.querySelector('#yanse').style.display = 'none';
            }
          }
        if(Allwidth< 768){
          var scroll = scrollTop - this.i;
          this.i = scrollTop;
          if(scrollTop<=60){
            if(scroll < 0){
              this.$refs.yanse.CloseAll()
              this.$refs.lanse.CloseAll()
            }
          }
        }
      },
	  handleOpen: function(){
	  		  console.log(1)
	  },
	  handleClose: function(){
	  		  console.log(1)
	  },
	  ChangeRight: function(item){
		  if(item == 1){
			  console.log(1)
			this.caretRightOne = 'true'
			this.caretRightTwo = ''
			this.caretRightThree = ''
			this.caretRightFour = ''
		  }
		  if(item == 2){
		  	this.caretRightOne = ''
		  	this.caretRightTwo = 'true'
		  	this.caretRightThree = ''
		  	this.caretRightFour = ''
		  }
		  if(item == 3){
		  	this.caretRightOne = ''
		  	this.caretRightTwo = ''
		  	this.caretRightThree = 'true'
		  	this.caretRightFour = ''
		  }
		  if(item == 4){
		  	this.caretRightOne = ''
		  	this.caretRightTwo = ''
		  	this.caretRightThree = ''
		  	this.caretRightFour = 'true'
		  }
	  },
	  OpenNav(){
		  this.$refs.CloseNav.style.display = 'block'
		  this.$refs.Nav.style.display = 'block'
		  this.$refs.Allback.style.background = 'rgba(216,191,216,0.5)'
		  this.$refs.Allback.style.display = 'block'
	  },
    // 打开手机端的下拉导航栏
    OpenAll:function(){
      console.log(this.$refs.mobilenav)
    	this.$refs.mobilenav.style.display = 'block'
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
		},
		translateImg(item){
			if(item == 1){
				this.jianceImg = !this.jianceImg
			}
			if(item == 2){
				this.fanghuImg = !this.fanghuImg
			}
			if(item == 3){
				this.pingguImg = !this.pingguImg
			}
			if(item == 4){
				this.xiangyingImg = !this.xiangyingImg
			}
		}
  },
  destroyed () {//离开该页面需要移除这个监听的事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style socped lang="scss">
  #shouye{
    .mobilenav{
      position: absolute;
      right: 0;
      top: 0;
      width: 60%;
      height: 800px;
      overflow-y: auto;
      overscroll-behavior: contain;
      z-index: 999;
      background-color: #ffffff;
    }
    #lanse{
      display: none;
      position: fixed;
      top: 0;
      z-index: 99;
      width:100%;
    }
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
        overflow: hidden;
    	}
    	.blockImg{
    		width: 100%;
    		/* height: ; */
    	}
    }
    @media (min-width:1200px) {
    	.block{
    		width: 100%;
    		height: 500px;
    	}
    }
    @media  (min-width:768px) and (max-width:1199px) {
    	.blockImg{
    		width: 100%;
    		/* height: ; */
    	}
    	.block{
    		width: 100%;
        height: 300px;

    	}
    }

    @media (min-width:1200px) {
    	.productMain{
    		width: 70%;
    		margin: 0 auto;
    		padding-bottom: 60px;
    	}
    	.product{
    		width: 30%;
    		height: 188px;
    		margin: 0 auto;
    		display: flex;
    		display: -webkit-flex;
    		justify-content: center;
    		align-items: center;
    	}
    	.productPT{
    		width: 100%;
    		height: 62px;
    		/* position: relative;
    		top: 50%;
    		margin-top: -30px; */
    	}
    	.productp{
    		font-size: 1.75rem;
    		width: 100%;
    		font-family: PingFang-SC-Medium;
    		height: 46px;
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
    @media (min-width:768px) and (max-width:1199px){
    	.productMain{
    		width: 70%;
    		margin: 0 auto;
    		padding-bottom: 60px;
    	}
    	.product{
    		width: 50%;
    		height: 188px;
    		margin: 0 auto;
    		display: flex;
    		display: -webkit-flex;
    		align-items: center;
    		justify-content: center;
    	}
    	.productPT{
    		width: 100%;
    		height: 100px;
    		/* position: relative;
    		top: 40%; */
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
    	.productMain{
    		width: 70%;
    		margin: 0 auto;
    	}
    	.product{
    		width: 100%;
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
    		/* position: relative;
    		top: 40%; */
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
    .productText{
    	width: 82%;
    	height: 78%;
    	margin-left: 27px;
    	/* background-color: red; */
    	text-align: left;
    }
    .productTextp{
    	font-size: 1.5rem;
    	color: #3d4b66;
    }
    .productTextpp{
    	font-size: 0.875rem;
    	color: #7a8599;
    }
    .productTextLi{
    	margin-top: 20px;
    }
    .productTextLi li{
    	list-style-type: none;
    	font-size: 1rem;
    	color: #3d4b66;
    	line-height: 40px;
    }
    .productTextLi img{
    	margin-right: 10px;
    	width: 18px;
    	height: 18px;
    }
    .productspan{
      height: 450px;
    }
     .productspan>div{
    	height: 450px;
    }
    .pMcol{
    	border-radius: 4px;
    	box-shadow: 0px 2px 8px 0px rgba(125, 143, 178, 0.2);
    	margin-left: 37px;
    }
    .pMcolImg{
    	width: 100%;
    	/* margin: 0 auto; */
    	/* width: 3rem; */
    	height: 100px;
    	text-align: left;
    	background: repeating-linear-gradient(rgb(240,248,254),rgb(255,255,255));
    }
    .pMcolImg img{
    	z-index: 999;
    	width: 48px;
    	height: 54px;
    	margin-left: 27px;
    	margin-top: 21px;
    }

    /* 解决方案 */
    @media (min-width: 1200px){
    	.JjFa{
    	width: 100%;
    	height: 710px;
    	background-color: #F7F9FC;
    }
    }
    @media (max-width: 1199px){
    	.JjFa{
    	width: 100%;
    	height: 860px;
    	background-color: #F7F9FC;
    }
    }
    .JjFaproductp{
    	font-size: 1.75rem;
    	width: 100%;
    	height: 36px;
    	font-family: PingFang-SC-Medium;
    	text-align: center;
    	color: #1f2533;
    	line-height: 46px;
    }
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
    }
    .JjFaproduct{
    		width: 40%;
    		height: 188px;
    		margin: 0 auto;
    	}
    .JjFaproductPT{
    		width: 100%;
    		height: 100%;
    		display: flex;
    		display: -webkit-flex;
    		flex-direction: column;
    		justify-content: center;
    	}
    .JjFaCol{
    	margin-top: 24px;
    }
    .JjFaCol > div{
    	background-image: url(./imgs/product/区块链bj.png);
    	box-shadow: 1px 2px 8px 0px rgba(125, 143, 178, 0.2);
    	border-radius: 4px;
    	margin-left: 24px;
    }
    @media (min-width:1200px) {
    	.JjFaRow{
    		width: 80%;
    		margin: 0 auto;
    	}
    }
    @media (min-width:768px) and (max-width:1200px){
    	.JjFaRow{
    		width: 70%;
    		margin: 0 auto;
    	}
    }
    @media (max-width:768px){
    	.JjFaRow{
    		width: 80%;
    		margin: 0 auto;
    	}
    }
    .JjFaMain{
    	width: 90%;
    	height: 60px;
    	margin: 0 auto;
    	text-align: left;
    	display: -webkit-flex;
    	display: flex;
    }
    .JjFaMain img{
    	width: 44px;
    	height: 43px;
    	margin:16px 24px 0 16px;
    }
    .JjFaText{
    	width: 90%;
    	margin: 0 auto;
    	margin-top: 10px !important;
    	height: 130px;
    	display: -webkit-flex;
    	display: flex;
      flex-direction: row;
    }
    .JjFaMain p{
    	font-size: 1.5rem;
    	/* width: 60%; */
    	height: 100%;
    	margin-top:16px;
    	line-height: 54px;
    	color: #1f2533;
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


    /* 资讯样式 */
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
    @media  (max-width:767px){
      .zixun{
      		/* margin-top: 300px; */
      		display: flex;
      		width: 100%;
      		flex-direction: column;
          height: 400px;
      	}
      .faDataP{
      		margin-top: 40px;
      		margin-bottom: 49px;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
      	}
    	.zxDate{
    		/* position: relative; */
    		height: 300px;
    		width: 98%;
    		margin: 0 auto;
    	}
    	.zxDate ul{
    		display: none;
    	}

    	.zxDateFD{
    		background-color: #fafbfc;
    		height: 300px;
    		width: 100%;
    		border-radius: 5px;
    		border: 2px solid #f0f2f6;
    		/* padding-left: 10px; */
    		z-index: 10;
    		/* position: absolute;
    		left: 50%;
    		top: 50%; */
    		margin-top: 0px;
    	}
    	.zxFD{
    		width: 100%;
    		height: 80%;
    		display: flex;
    		display: -webkit-flex;
    		align-items: center;
    	}
    	.AhXx{
    		width: 100%;
    		text-align: left;
    		padding-left: 5px;
    		padding-top: 10px;
    	}
    	.zxDText{
    		/* display: none; */
    		text-align: left;
    		width: 50%;
    		/* float: left; */
    		height: 90%;
    		position: relative;
    		margin-top: 5px;
    	}
    	.zxDText a{
    		text-decoration: none !important;
    		text-align: left;
    		height: 20px;
    		margin-top: auto;
    	  margin-bottom: 0;
    		position: absolute;
    		bottom: 0;
    		color: #2e8ae6;
    	}
      .zxDText a i{
        margin-left: 5px;
      }
    	.zxDText p{
        color: #1f2533;
    		line-height: 20px;
    		height: 73%;
    		text-indent: 20px;
    		overflow:hidden;
    		display:-webkit-box;
    		-webkit-box-orient:vertical;
    		-webkit-line-clamp:7;
    	}
    	.zxFD img{
    		width: 45%;
    		height: 50%;
    	}
    }
    @media  (min-width:1200px){
      .zixun{
      		/* margin-top: 300px; */
      		display: flex;
      		width: 100%;
      		flex-direction: column;
          height: 720px;
      	}
      .faDataP{
          height: 26%;
      		margin-top: 40px;
      		margin-bottom: 49px;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
      	}
    	.zxDate{
    		display: flex;
    		display: -webkit-flex;
    		position: relative;
    		height: 59%;
    		width: 80%;
    		margin: 0 auto;
    	}
    	.zxDate ul{
    		background-color: #4da1e4;
    		height: 100%;
    		width: 86%;
    	}
    	.zxDate ul li{
    		width: 80%;
    		display: flex;
    		display: -webkit-flex;
    		height: 25%;
    		list-style-type:none;
        align-items: center;
    		/* padding-top: 30px; */
    	}
    	.zxLeft{
    		height: 100%;
    		width: 70px;
    		/* padding-left: 4%; */
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: center;
    		text-align: center;
    		/* align-items: center; */
    		/* float: left; */
    		border-right: 1 solid #FFFFFF;
    		/* padding-right: 15px; */
    		cursor: pointer;
    	}
    	.createRight{
    		width: 49px;
    		height: 60px;
    		display: flex;
    		align-items: center;
    	}
    	.zxLeftp{
    		font-size: 2.25rem;
    		color: #ffffff;
    	}
    	.zxLeftpp{
    		font-size: 0.875rem;
    		color: #ffffff;
    	}
    	.caretRight{
    		color: #FFFFFF;
    		margin-left: 33px;
    		display: flex;
    		display: -webkit-flex;
    		align-items: center;
    	}
    	.zxRight{
    		width: 53%;
    		text-align: left;
    		padding-left: 25px;
        /* height: 100%; */
        /* display: flex;
        display: -webkit-flex;
        flex-direction: column; */
    	}
    	.zxRight p{
    		font-size: 1rem;
    		line-height: 30px;
    		color: #ffffff;

    	}
    	.zxRight span{
    		font-size: 0.875rem !important;
    		color: #2e8ae6 !important;
        padding: 0 5px;
    		line-height: 30px;
    		background-color: rgb(236,245,252);
    		border-radius: 2px;
    	}

    	.zxDateFD{
    		width: 588px;
    		height: 300px;
    		background-color: #fafbfc;
    		box-shadow: 1px 2px 8px 0px rgba(125, 143, 178, 0.2);
    		border-radius: 4px;
    		z-index: 10;
    		margin-left: 45px;
    		position: absolute;
    		left: 50%;
    		top: 50%;
    		margin-top: -150px;
    		display: flex;
    		display: -webkit-flex;
        flex-direction: column;
    		/* justify-content: center; */

    	}
    	/* .zxDateFDone{
    		display: none;
    	}
    	.zxDateFDtwo{
    		display: block;
    	}
    	.zxDateFDthree{
    		display: none;
    	}
    	.zxDateFDfour{
    		display: none;
    	} */
    	.zxFD{
    		width: 532px;
    		height: 75%;
    		display: flex;
    		display: -webkit-flex;
    		/* flex-direction: ; */
    		margin-left: 28px;
    	}
    	.AhXx{
    		width: 532px;
    		height: 73px;
    		text-align: left;
    		/* padding-left: 0.3125rem;
    		padding-top: 0.625rem; */
    		display: flex;
    		flex-direction: column;
    		justify-content: center;
    		margin-left: 28px;
    	}
    	.AhXx span{
    		width: 350px;
    		height: 30px;
    		font-size: 1.5rem;
    		line-height: 30px;
    		color: #1f2533;
    	}
    	.AhXx p{
    		width: 74px;
    		height: 20px;
    		font-size: 14px;
    		line-height: 30px;
    		color: #2e384d;
    	}
    	.zxDText{
    		/* display: none; */
    		text-align: left;
    		width: 50%;
    		display: flex;
    		display: -webkit-flex;
    		flex-direction: column;
    		/* float: left; */
    		height: 90%;
    		position: relative;
    		margin-top: 5px;
    	}
    	.zxDText p{
    		line-height: 22px;
    		font-size: 0.875rem;
        color: #1f2533;
    		height: 73%;
    		text-indent: 20px;
    		overflow:hidden;
    		display:-webkit-box;
    		-webkit-box-orient:vertical;
    		-webkit-line-clamp:7;
    	}
      .zxDText a{
      margin-top: 21px;
      text-decoration: none !important;
      }
      .zxDText a i{
        margin-left: 5px;
      }
    	.zxFD img{
    		width: 258px;
    		height: 169px;
    	}
    }
    @media (min-width:768px) and (max-width: 1200px){
      .zixun{
      		/* margin-top: 300px; */
      		display: flex;
      		width: 100%;
      		flex-direction: column;
          height: 720px;
      	}
      .faDataP{
          height: 26%;
      		margin-top: 40px;
      		margin-bottom: 49px;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
      	}
    .zxDate{
    	display: flex;
    	display: -webkit-flex;
    	position: relative;
    	height: 59%;
    	width: 80%;
    	margin: 0 auto;
    }
    .zxDate ul{
    	background-color: #4da1e4;
    	height: 100%;
    	width: 86%;
    }
    .zxDate ul li{
    	width: 80%;
    	display: flex;
    	display: -webkit-flex;
    	height: 25%;
    	list-style-type:none;
      align-items: center;
    }
    .createRight{
    	width: 30px;
    	height: 60px;
    	display: flex;
    	align-items: center;
    }
    .zxLeft{
    	height: 60px;
    	width: 53px;
    	/* padding-left: 4%; */
    	text-align: center;
    	align-items: center;
    	/* float: left; */
    	border-right: 1 solid #FFFFFF;
    	padding-right: 15px;
    	cursor: pointer;
    	display: flex;
    	display: -webkit-flex;
    	justify-content: center;
    	/* align-items: center; */
    	flex-direction: column;
    }
    .zxLeftp{
    	font-size: 2.25rem;
    	color: #ffffff;
    }
    .zxLeftpp{
    	font-size: 0.875rem;
    	color: #ffffff;
    }
    .caretRight{
    	color: #FFFFFF;
    	/* margin-left: 33px; */
    	margin: 0 auto;
    	display: flex;
    	display: -webkit-flex;
    	align-items: center;
    }
    .zxRight{
    	/* float: left; */
    	width: 50%;
    	text-align: left;
    	/* padding-left: 25px; */
    }
    .zxRight p{
    	font-size: 1rem;
    	line-height: 30px;
    	color: #ffffff;
    }
    .zxRight span{
    	font-size: 0.875rem;
    	color: #2e8ae6;
    	line-height: 30px;
    	background-color: #ffffff;
    	border-radius: 2px;
    }

    .zxDateFD{
    	width: 50%;
    	height: 300px;
    	background-color: #fafbfc;
    	box-shadow: 1px 2px 8px 0px rgba(125, 143, 178, 0.2);
    	border-radius: 4px;
    	/* padding-left: 10px; */
    	z-index: 10;
    	margin-left: 45px;
    	position: absolute;
    	left: 42%;
    	top: 50%;
    	margin-top: -150px;
    	display: flex;
    	display: -webkit-flex;
      flex-direction: column;
    	/* justify-content: center; */

    }

    .zxFD{
    	width: 100%;
    	height: 75%;
    	display: flex;
    	display: -webkit-flex;
    	/* flex-direction: ; */
    	margin-left: 4%;
    }
    .AhXx{
    	width: 100%;
    	height: 73px;
    	text-align: left;
    	/* padding-left: 0.3125rem;
    	padding-top: 0.625rem; */
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	margin-left: 4%;
    }
    .AhXx span{
    	width: 350px;
    	height: 30px;
    	font-size: 1.5rem;
    	line-height: 30px;
    	color: #1f2533;
    }
    .AhXx p{
    	width: 74px;
    	height: 20px;
    	font-size: 14px;
    	line-height: 30px;
    	color: #2e384d;
    }
    .zxDText{
    	/* display: none; */
    	text-align: left;
    	width: 50%;
    	display: flex;
    	display: -webkit-flex;
    	flex-direction: column;
    	/* float: left; */
    	height: 90%;
    	position: relative;
    	margin-top: 5px;
    }
    .zxDText p{
      color: #1f2533;
    	line-height: 22px;
    	font-size: 0.875rem;
    	height: 73%;
    	text-indent: 20px;
    	overflow:hidden;
    	display:-webkit-box;
    	-webkit-box-orient:vertical;
    	-webkit-line-clamp:7;
    }
    .zxDText a{
    margin-top: 21px;
    text-decoration: none !important;
    }
    .zxDText a i{
      margin-left: 5px;
    }
    .zxFD img{
    	width: 46%;
    	height: 50%;
    }
    }
    /* 公司地板 */
    .gsblockB{
    	width: 100%;
    	height: 410px;
    	position: relative;
      overflow: hidden;
    }
    .gsblockBImg{
      position: absolute;
      margin-left: 50%;
      transform: translateX(-50%);
    	/* width: 100%;
    	height: 100%; */
    }
    	.gsblockText{
        width: 100%;
    		position: absolute;
    		top: 50%;
    		margin-top: -21px;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    	}
    .gsblockTextp{
    	font-size: 1.75rem;
    	line-height: 27px;
    	color: #1f2533;
    }
    .gsblockTextpp{
    	font-size: 1rem;
    	line-height: 46px;
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
    	position: relative;
    	/* right: 50px; */
    	display: flex;
    	display: -webkit-flex;
    	align-items: center;
    }
    .fbQRp i, .fbQRpp i{
    	margin-right: 5px;
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
    		color: #ffffff !important;
    }
    .fbQR{
    	width: 350px;
    	/* float: right; */
    	text-align: left;
    	color: #FFFFFF;
    	margin-left: 111px;
    	margin-top: 2x0px;
    }
    .fbbottom{
    	  width: 90%;
    	  margin: 0 auto;
    	  height: 263px;
    	  padding-top: 20px;
    	  display: flex;
    	  display: -webkit-flex;
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
    	  cursor: pointer;
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
    	  padding-top: 20px;
    	  display: flex;
    	  display: -webkit-flex;
    	  flex-direction: column;
    }
    }
    .FbBottom{
    	width: 100%;
    	height: 40px;
    	background-color: #0f131a;
    	/* text-align: center; */
    	display: flex;
    	display: -webkit-flex;
    	align-items: center;
    	justify-content: center;
    }
    .FbBottom p{
    	font-size: 12px;
    	line-height: 30px;
    	letter-spacing: 0px;
    	color: #b8c7e6;
    }
  }

</style>
