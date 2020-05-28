<template>
  <div>
    <div class="hello_tr">
      <div class="LoginTOhome">
        <div>
          <router-link to="/news">去哪儿网首页</router-link>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-s-fold"></i>网址导航<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span>机票</span><span>酒店</span><span>团购</span><span>度假</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span>机票</span><span>酒店</span><span>机票</span><span>酒店</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="hellodiv">
        <span>{{username}}</span>
        <span @click="backLogin">退出</span>
        <div style="cursor:pointer;" class="hellotrdiv">
          <router-link to="/news">消息</router-link>
        </div>
        <div style="cursor:pointer;" class="hellotrdiv">
          <router-link to="/order">查看订单</router-link>
        </div>
        <div style="cursor:pointer;" class="hellotrdiv">
          <router-link to="/shopp">积分商城</router-link>
        </div>
        <div style="cursor:pointer;" class="hellotrdiv">
          <router-link to="/contact">联系客服</router-link>
        </div>
      </div>
    </div>
    <div class="datafenlei">
      <img src=""/>
      <p @click="change(0)">个人信息</p>
      <p @click="change(1)">账号安全</p>
      <p @click="change(2)">我的账户</p>
      <p @click="change(3)">消息</p>
    </div>
    <div>
      <el-carousel :interval="5000" arrow="never" :autoplay="false" ref="carousel">
        <el-carousel-item v-for="item in 4" :key="item">
          <account></account>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Account from './account.vue'
  export default {
    components:{
      account:Account
    },
    data(){
      return{
        username:''
      }
    },
    methods:{
      change(index){
        this.$refs.carousel.setActiveItem(index)
      },
      backLogin(){
        window.sessionStorage.removeItem('token');
        this.$router.push({path: '/'});
      }
    }
  }
</script>

<style scoped="scoped">
  .hello_tr{
    display: flex;
  }
  .LoginTOhome{
    display: flex;
  }
  .hellodiv{
    display: flex;
    width: 50%;
    margin-left: auto;
  }
  .hellodiv>span{
    cursor: pointer;
  }
  .hellodiv>div{
    width: 15%;
    text-align: center;
  }
  .hellodiv>div>a{
    text-decoration: none;
  }
  .datafenlei{
    display: flex;
    height: 40px;
  }
  .datafenlei > p{
    width: 10%;
    line-height: 40px;
    height: 40px;
    cursor: pointer;
  }
</style>
