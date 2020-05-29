<template>
	<div class="backImg">
        <span>用户名</span>
        <!-- <input type="number" name="telephone" placeholder="请输入手机号码" v-model="telephone"/> -->
        <el-input v-model="telephone" placeholder="请输入手机号码"></el-input>
        <span>密码</span>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <!-- <input type="number" name="password" placeholder="请输入登录密码" v-model="password"/> -->
        <span>验证码</span><br>
        <el-input v-model="versityPass" placeholder="请输入验证码" class="apply"></el-input>
        <span style="color: #409EFF;cursor: pointer;"@click="getCode" v-show="isShow">获取验证码</span>
        <span v-show="!isShow">{{btnText}}秒</span>
        <!-- <input type="button" @click="login" value="登陆"/> -->
        <el-button type="primary" round @click="login">登陆</el-button>
        <div class="bottomTitle">
          <span>没有账号</span>
          <router-link to="/register">立即注册</router-link>
          <router-link to="" class="forgetPass">忘记密码</router-link>
        </div>
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
      timer: '',
      btnText: 60,
      isShow: true,
      versityPass: '',
      telephone: '',
      password: '',
      Headers: {
        Authorization: 'Bearer ' + window.sessionStorage.getItem('token')
      },
     }
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    toRegister(){
      router.push({ path: 'register' })
    },
    getCode() {
      this.timer = setInterval(() => {
        if (this.btnText > 0) {
            this.btnText--;
            this.isShow = false;
        } else {
          clearInterval(this.timer);
          this.isShow = true;
        }
      }, 1000);
      },
    login () {
          let $this = this;
          if (this.telephone === '' || this.password === '') {
            $this.$message({
              showClose: true,
              message: '账号或密码不能为空',
              type: 'error'
            })
            return false
          } else {
           axios.get('http://127.0.0.1:8081/login',{
             params: {
                  telephone: this.telephone,
                  password: this.password
                }
           })   //get方法和post方法的区别是get有参数加‘params:’
            .then((response)=>{
                console.log('response',response);
                let resp = {...response.data};
                if(resp.status===0){
                   $this.$store.commit('set_token',resp.token);       //本地存入token
                   $this.$store.commit('set_name',resp.name)
                   $this.$message({
                    showClose: true,
                    message: '登录成功',
                    type:'success'
                  });
                  this.$router.push({path: '/'});
                }else{
                  $this.$message({
                      showClose: true,
                      message: resp.message,
                      type: 'error'
                    })
                }
            })                                                                                                                                                                                                                                                                                                             }
        }
  }
  }
</script>

<style>
  .backImg{
    width: 80%;
    margin: 0 auto;
  }
  .backImg >.el-input{
    margin-bottom: 20px;
  }
  .backImg>button{
    width: 100%;
    margin-top: 20px;
  }
  .apply{
    width: 70%;
    margin-right: 15px;
  }
  .bottomTitle{
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 70px;
  }
  .forgetPass{
    margin-left: 140px;
  }
</style>
