<template>
	<div class="register">
		<router-link to="/">去哪儿网首页</router-link>
      <tr>国家/地区<input type="text" name="state" value="中国 86" class="real"/></tr>
          <div class="iconxiangxiasanjiaoxing1 iconfont" id="abso" @click="change_unfold"></div>
          <div class="every_register">
				<span :class="[this.unfold?'zhankai':'delete']">
					<td><a v-for="item in english" :key="item" href="#" class="unfold_a">{{item}}</a></td>
					<td><div class="iconfont iconguanbi"></div></td>
					<div style="background-color: red;width: 100%;height: 100px;"></div>
				</span>
          </div>
      <tr>手机号码<input type="number" name="telephone" placeholder="请输入手机号码" v-model="telephone"/>可用于激活码获取、密码找回、订单查询等</tr>
      <tr>登录密码<input type="number" name="password" placeholder="请输入登录密码" v-model="password"/></tr>
      <tr><td>验证码 <input type="number" name="verify" placeholder="请输入验证码" v-model="verify_num"/></td>
	  <td><cpn></cpn></td>
	  <div class="code" @click="refreshCode">
	     <s-identify :identifyCode="identifyCode"></s-identify>
	  <span @click="refreshCode">换一个</span>
	  </div>
	  </tr>
      <tr>
	   激活码 <input type="number" name="phone" placeholder="请输入激活码"/>
	   <input type="button" name="phone" value="获取激活码"/>
	 </tr>
      <tr><input type="checkbox" v-model="check"/>我已阅读并同意遵守 <a href="#">《去哪儿用户服务协议》</a></tr>
      <tr><input type="button" @click="register" :disabled="!check" value="同意协议并注册"/>使用<input type="button" value="邮箱注册"/></tr>
      <p>{{ data_set }}</p>
	</div>
</template>

<script>
import code from '@/components/shouye/2/code'
import SIdentify from '@/components/shouye/2/identify'
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios, axios)
Vue.component('cpn', code)
Vue.component('SIdentify', SIdentify)
export default {
  data () {
    return {
    data_set: {'b': 1},
      english: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
      unfold: false,
        identifyCodes: '1234567890',
        identifyCode: '',
        check: '',
        telephone: '',
        password: '',
		verify_num: ''
    }
  },
  mounted() {
      this.identifyCode = ""
      this.makeCode(this.identifyCodes, 4)
      this.$set(this.data_set, 'a', 1)
      this.data_set.b = 0
    },
    methods: {
      register () {
      this.data_set.c = 2
      console.log(this.data_set)
	  if(this.verify_num !== this.identifyCode) {
		  alert('验证码错误')
		}
      axios.get('http://127.0.0.1:8081/register', {
        params: {
          telephone: this.telephone,
          password: this.password
        }
        })
        .then(function (res) {
          console.log(res)
        })
        .catch(function (error){
          console.log(error)
        })
     },
           change_unfold () {
              this.unfold = !this.unfold
            },
           randomNum(min, max) {
             return Math.floor(Math.random() * (max - min) + min);
       },
           refreshCode() {
	     this.identifyCode = "";
	     this.makeCode(this.identifyCodes, 4);
           },
        makeCode(o, l) {
         for (let i = 0; i < l; i++) {
           this.identifyCode += this.identifyCodes[
           this.randomNum(0, this.identifyCodes.length)
       ]
     }
      console.log(this.identifyCode);
    }
	  }
}
</script>

<style>
  @import "http://at.alicdn.com/t/font_1190499_2hmkh77av8r.css";
  #abso{
      display: inline-block;
  }
  .real{
     display: inline-block;
  }
  .unfold_a{
      width: 7%;
  }
  .zhankai{
      height: 100px;
  }
  .delete{
      display: none;
  }
</style>
