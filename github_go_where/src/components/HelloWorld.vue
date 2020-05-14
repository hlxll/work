<template>
  <div class="hello">
    <div class="hello_tr">
        <div class="hellodiv">请<router-link to="/login">登陆</router-link>或<router-link to="/register">免费注册</router-link></div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/news">消息</router-link></div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/order">查看订单</router-link></div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/shopp">积分商城</router-link></div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/contact">联系客服</router-link></div>
        <div @click="download">下载文件</div>
    </div>
    <div class="search">
      <img src=""/>
      <input value="搜索目的地" type="text" class="searchInput"/><span class="searchSpan">搜索</span>
      <div class="searchDiv">
        <img class="searchImg"/>
        <div class="searchMain">
          <div class="searchMainText">
            <textarea>国内客服</textarea>
            <textarea>95117</textarea>
          </div>
          <div class="searchMainText">
            <textarea>国际客服</textarea>
            <textarea>+(8610)82872677</textarea>
          </div>
        </div>
      </div>
    </div>
	  <!-- 路由跳转，传递值，使用$route -->
	  <p>提示：{{this.$route.query.alert}}</p>
     <td class="hello_td">
      <tr>删除</tr>
      <tr>消息</tr>
      <tr>订单</tr>
      <tr>账户</tr>
      <tr>扫码</tr>
      <tr>用户</tr>
     </td>
  <img />
    <div>
    <tr class="right_tr">
       <router-link to="/shouye">首页</router-link>
        <router-link to="/jipiao">机票</router-link>
		<router-link to="/mulu/3">酒店</router-link>
		<router-link to="/mulu/4">团购</router-link>
		<router-link to="/mulu/5">邮轮</router-link>
		<router-link to="/mulu/6">门票</router-link>
		<router-link to="/mulu/7">火车票</router-link>
		<router-link to="/mulu/8">攻略</router-link>
		<router-link to="/mulu/9">当地人</router-link>
		<router-link to="/mulu/10">汽车票</router-link>
		<router-link to="/mulu/11">境外</router-link>
		<router-link to="/mulu/12">保险</router-link>
		<router-link to="/mulu/13">车车</router-link>
	</tr>
    </div>
	<router-view/>

  </div>
</template>
<script>
  var FileSaver = require('file-saver');
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created() {
    console.log(window.sessionStorage.getItem('token') || '')
  },
  methods:{
    download(){
      var content = JSON.stringify(Jsondata);
      var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "save.json");
    }
  }
}
</script>
<style scoped>
	.hello_td{
		display: inline-block;
	}
  .hello_tr tr td span{
    color: aqua;
  }
	.hello_data{
		display: inline-block;
	}
	.hello_tr{
		width: 100%;
    height: 21px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    width: 500px;
	}
  .helloonediv{
    width: 32%;
    line-height: 14px;
    height: 14px;
    text-align: center;
  }
  .hellotrdiv {
    text-align: center;
    width: 17%;
    height: 14px;
    line-height: 14px;
  }
  .hello_tr div a{
    text-decoration:none;
    font-size: 12px;
  }
	.right_tr{
		background-color:#00FFFF;
		color: white;
		width: 100%;
	}
	.right_tr td{
		width: 8%;
		line-height: 20px;
		text-align: center;
		padding: 3px;
	}
  .search{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
  }
  .searchDiv{
    width: 18%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
  }
  .searchMain{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }
  .searchMainText{
    width: 160px;
    height: 25px;
    line-height: 25px;
  }
</style>
