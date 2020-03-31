<template>
  <div class="hello">
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
      <div class="hello_tr">
      <tr>
       <td>请<router-link to="/login">登陆</router-link></td>
       <td>或<router-link to="/register">免费注册</router-link></td>
       <td style="cursor:pointer;"><router-link to="/news">消息</router-link></td>
       <td style="cursor:pointer;"><router-link to="/order">查看订单</router-link></td>
       <td style="cursor:pointer;"><router-link to="/shopp">积分商城</router-link></td>
       <td style="cursor:pointer;"><router-link to="/contact">联系客服</router-link></td>
      </tr>
  </div>
  <div class="hello_data">
      <input value="搜索目的地" type="text" /><span>搜索</span>
      <table>
      <td>图片</td>
      <td>
        <tr>国内</tr>
        <tr>国际</tr>
      </td>
      </table>
  </div>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello_td{
		display: inline-block;
	}
    .hello_tr tr td span{
      color: aqua;
    }
	.hello_data{
		float: right;
		display: inline-block;
	}
	.hello_tr{
		float: right;
		display: inline-block;
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
</style>
