<template>
  <div class="hello" style="overflow: hidden;">
    <div class="hello_tr">
        <div class="hellodiv" v-show="!versityLogin">
          请<router-link to="/login">登陆</router-link>或<router-link to="/register">免费注册</router-link>
        </div>
        <div v-show="versityLogin">
          <span>登陆成功</span>
        </div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/news">消息</router-link></div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/order">查看订单</router-link></div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/shopp">积分商城</router-link></div>
        <div style="cursor:pointer;" class="hellotrdiv"><router-link to="/contact">联系客服</router-link></div>
    </div>
    <div>
    <div class="right_tr">
      <router-link to="/shouye">首页</router-link>
      <router-link to="">机票</router-link>
      <router-link to="">酒店</router-link>
      <router-link to="">团购</router-link>
      <router-link to="">邮轮</router-link>
      <router-link to="">门票</router-link>
      <router-link to="/train">火车票</router-link>
      <router-link to="">攻略</router-link>
      <router-link to="">当地人</router-link>
      <router-link to="">汽车票</router-link>
      <router-link to="">境外</router-link>
      <router-link to="">保险</router-link>
      <router-link to="">车车</router-link>
    </div>
    </div>
	<router-view/>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import Vueaxios from 'vue-axios'
  Vue.use(Vueaxios, axios)
  var FileSaver = require('file-saver');
export default {
  name: 'HelloWorld',
  data () {
    return {
      versityLogin: false
    }
  },
  created() {
    console.log(window.sessionStorage.getItem('token') || '')
    let loginToken = window.sessionStorage.getItem('token') || ''
    axios.get('http://127.0.0.1:8081/Verifylogin',{
      params: {
           token: loginToken
         }
    })
    .then((res)=>{
      console.log(res.data)
      if(res.data.status == 1){
        this.versityLogin = true
      }else{
        this.versityLogin = false
      }
    })
  }
}
</script>
<style scoped>
	.hello_td{
		display: inline-block;
	}
	.hello_data{
		display: inline-block;
	}
	.hello_tr{
    height: 30px;
    line-height: 30px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    width: 600px;
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
  .hellodiv{
    width: 140px;
    font-size: 12px;
  }
  .hellodiv>a{
    margin: 0 5px;
  }
  .hello_tr div a{
    text-decoration:none;
    font-size: 12px;
  }
	.right_tr{
		color: black;
		width: 90%;
		padding-left: 10%;
	}
	.right_tr a{
		width: 8%;
    height: 30px;
		line-height: 30px;
    font-size: 20px;
		text-align: center;
		padding: 3px;
    text-decoration: none;
    color: #000000;
	}
  .search{
    width: 100%;
    margin: 10px auto;
    height: 40px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
  }
  .search > button{
    border: none;
    border-radius: 0;
  }
  .searchInput{
    width: 80%;
    height: 25px;
    padding: 5px 0;
    padding-left: 5px;
    border: 1px solid #409EFF;
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
    display: flex;
    flex-direction: row;
    width: 260px;
    height: 20px;
    line-height: 20px;
  }
  .remind{
    position: fixed;
    left: 0;
    top: 50px;
    width: 50px;
  }
</style>
