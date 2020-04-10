<template>
  <div class="banner">
    <div class="item">
      <!-- <img :src=""> -->
      <video autoplay="autoplay" loop="loop" muted="muted" class="mp4Banner">
        <source :src="dataList[currentIndex]" type="video/mp4">
      </video>
    </div>
    <div class="page" v-if="this.dataList.length > 1">
      <ul class="pageUL">
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li v-for="(item,index) in dataList" @click="gotoPage(index)" :class="{'current':currentIndex == index}">  {{index+1}}</li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        dataList:["./images/another_index/banner3.mp4","https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg","https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
        currentIndex: 0,   //默认显示图片
        timer: null    //定时器
      }
    },
    mounted() {

    },
    methods: {
      gotoPage(index) {
        this.currentIndex = index;
      }
      // runInv() {
      //   this.timer = setInterval(() => {
      //     this.gotoPage(this.nextIndex)
      //   }, 1000)
      // }
    },
    computed: {
      //上一张
      prevIndex() {
        if(this.currentIndex == 0) {
          return this.dataList.length - 1;
        }else{
          return this.currentIndex - 1;
        }
      },
      //下一张
      nextIndex() {
        if(this.currentIndex == this.dataList.length - 1) {
          return 0;
        }else {
          return this.currentIndex + 1;
        }
      }
    }
  }
</script>

<style>
  .page{
    width: 100%;
  }
  .pageUL{
    margin: 0 auto;
    width: 50%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    background-color: #000000;
  }
  .pageUL > li{
    text-align: center;
    width: 20%;
    color: #FFFFFF;
  }
  .item > img{
    width: 100%;
  }
</style>
