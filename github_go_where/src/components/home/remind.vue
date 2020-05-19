<template>
  <div>
    <div class="remind_main" v-show="closeRemind">
      <i class="el-icon-close" @click="close"></i>
      <i class="el-icon-user"></i>
      <div>
        <i class="el-icon-tickets"></i>
        <span>消息</span>
      </div>
      <div>
        <i class="el-icon-suitcase"></i>
        <span>订单</span>
      </div>
      <div>
        <i class="el-icon-school"></i>
        <span>账户</span>
      </div>
      <div>
        <i class="el-icon-film"></i>
        <span>扫码</span>
      </div>
    </div>

    <div v-show="!closeRemind" class="imgOpen">
      <img src="../fb/imgs/fa.png" @click="close">
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        closeRemind: true
      }
    },
    methods:{
      close(){
        this.closeRemind = !this.closeRemind
      }
    }
  }
</script>

<style>
  .remind_main{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E4E4E4;
  }
  .remind_main>i{
    margin-top: 20px;
    cursor: pointer;
  }
  .remind_main>div{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .imgOpen{
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    padding-left: 20px;
    background-color: #E4E4E4;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: 30px;
  }
  .imgOpen>img{
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
</style>
