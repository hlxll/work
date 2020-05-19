<template>
  <div class="BackImg">
    <div class="loginmain">
      <div class="TitleImg"></div>
      <div class="loginText">
        <div class="loginTitle">
          <p :class="{'colorClass':colorVersity}" @click="changeColor(true)">二维码登陆</p>
          <p :class="{'colorClass':!colorVersity}" @click="changeColor(false)">密码登陆</p>
        </div>
        <tel-login></tel-login>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  import telLogin from './telLogin.vue'
  export default {
    components:{
      telLogin
    },
    data(){
      return{
        colorVersity: false
      }
    },
    methods: {
      changeColor(bloom){
        this.colorVersity = bloom
      }
    }
  }
</script>

<style scoped="scoped">
  .colorClass{
    border-bottom: 2px solid #2b85e4;
  }
  .BackImg{
    background-image: url();
    width: 100%;
    height: 500px;
  }
  .loginmain{
    width: 860px;
    margin: 0 auto;
    min-width: 860px;
    display: flex;
    flex-direction: row;
    margin-top: 100px;
  }
  .TitleImg{
    background-color: #0074D9;
    background-image: url();
    width: 430px;
    height: 480px;
  }
  .loginText{
    width: 430px;
    height: 480px;
    background-color: #FFFFFF;
  }
  .loginTitle{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #DDDDDD;
    margin-bottom: 20px;
  }
  .loginTitle>p{
    width: 50%;
    text-align: center;
    cursor: pointer;
  }

</style>
