<template>
  <div>
    <div>
      <div class="search">
        <el-input placeholder="输入城市名或车站名" v-model="HeadCity">
          <template slot="prepend">出发</template>
        </el-input>
        <div v-show="HeadShow">
          <hot-city></hot-city>
        </div>
        <el-input placeholder="输入城市名或车站名" v-model="OverCity">
          <template slot="prepend">出发</template>
        </el-input>
        <div v-show="OverShow">
          <hot-city></hot-city>
        </div>
        <el-date-picker
          v-model="dateDay"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        <el-button type="danger" @click="searchTrain">搜索</el-button>
        <div class="searchSpan"><span>出票申请</span>|<span>退票申请</span></div>
      </div>
      <div>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="车次/类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="url"
            label="发站/到站"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="发/到时间">
          </el-table-column>
          <el-table-column
            prop="runTime"
            label="运行时间">
          </el-table-column>
          <el-table-column
            prop="money"
            label="参考票价">
          </el-table-column>
          <el-table-column
            prop="num"
            label="剩余票量">
          </el-table-column>
          <el-table-column
                label="操作"
                width="100">
            <template slot-scope="scope" class="shoppTrain">
              <el-button @click="" type="text" size="small">购买</el-button>
              <el-button type="text" size="small">抢票</el-button>
              <el-button type="text" size="small">购买</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import Vueaxios from 'vue-axios'
  Vue.use(Vueaxios, axios)
  import hotCity from './common/HotCity.vue'
  export default {
    data(){
      return{
        HeadCity: '',
        OverCity: '',
        HeadShow: false,
        OverShow: false,
        dateDay: '',
        tableData: [{
          name: 'G101',
          url: '北京南',
          date: '08:00',
          runTime: '4',
          money: '100',
          num: '10'
        }]
      }
    },
    methods:{
      searchTrain(){
        axios.get('http://127.0.0.1:8081/queryTrain')
        .then((res)=>{
          console.log(res.data)
        })
      }
    },
    components:{
      hotCity
    }
  }
</script>

<style scoped="scoped">
  .search{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    background-color: #2B85E4;
  }
  .search .el-input{
    width: 18%;
    margin-right: 10px;
  }
  .search > button{
    margin-right: 10px;
  }
  .searchSpan{
    color: white;
  }
  .searchSpan span{
    margin: 0 5px;
  }
</style>
