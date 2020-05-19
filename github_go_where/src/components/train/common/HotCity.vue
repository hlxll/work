<template>
  <div class="HotCity">
    <p>热门城市
      <i class="el-icon-close"></i>
    </p>
    <div class="HotCityP">
      <p v-for="item in HotCity">
        {{item}}
      </p>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        HotCity: ['北京','上海','广州','深圳','重庆','南京']
      }
    }
  }
</script>

<style>
  .HotCity{
    width: 200px;
  }
  .HotCityP{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
