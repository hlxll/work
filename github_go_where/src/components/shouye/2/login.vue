<template>
	<div>
		<tr>手机号码<input type="number" name="telephone" placeholder="请输入手机号码" v-model="telephone"/></tr>
		<tr>登录密码<input type="number" name="password" placeholder="请输入登录密码" v-model="password"/></tr>
		<tr><input type="button" @click="login" value="登陆"/></tr>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios, axios)
export default {
  data(){
    return {
      telephone: '',
      password: ''
     }
  },
  methods: {
    login () {
      axios.get('http://127.0.0.1:8081/login', {
        params: {
           telephone: this.telephone,
           password: this.password
          }
      })
        .then((res) => {
          console.log(res.data)
          if(res.data){
            this.$router.push({path: '/', query: {alert: true}})
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      // 路由挑战,传递值
    }
  }
}
</script>

<style>
</style>
