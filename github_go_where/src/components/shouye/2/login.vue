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
                   $this.$store.commit('set_token',resp.msg);       //本地存入token
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
    // login () {
    //   axios.get('http://127.0.0.1:8081/login', {
    //     params: {
    //        telephone: this.telephone,
    //        password: this.password
    //       }
    //   })
    //     .then((res) => {
    //       let resp = {...res.data}
    //       if(resp.status == 0){
    //         (state,data){                             //state中的全部数据
    //                 state.token = data;
    //                 window.sessionStorage.setItem('token',data);     //临时存储--刷新保留--窗口关闭消失
    //               }
    //       }
    //       if(res.data){
    //         this.$router.push({path: '/', query: {alert: true}})
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    //   // 路由挑战,传递值
    // }
  }
}
</script>

<style>
</style>
