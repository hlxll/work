<template>
  <div class="BackImg">
    <div class="loginmain">
      <div class="TitleImg">
        <img src="/static/imgs/home/.png" @error="defaultIng($event)" ref="defaultImgRef"/>
      </div>
      <div class="loginText">
        <div class="loginTitle">
          <p :class="{'colorClass':colorVersity}" @click="changeColor(true)">二维码登陆</p>
          <p :class="{'colorClass':!colorVersity}" @click="changeColor(false)">密码登陆</p>
        </div>
        <tel-login v-show="!colorVersity"></tel-login>
        <qr-code v-show="colorVersity"></qr-code>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  import telLogin from './telLogin'
  import qrCode from './qrCode'
  export default {
    components:{
      telLogin,
      qrCode
    },
    data(){
      return{
        colorVersity: false
      }
    },
    methods: {
      defaultIng(){
        let data = 'defaultImgRef'
        console.log(this.$refs[data].src)
        this.$refs.defaultImgRef.src = '/static/img/big.png'
      },
      changeColor(bloom){
        this.colorVersity = bloom
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .colorClass{
    padding: 0 10px;
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
