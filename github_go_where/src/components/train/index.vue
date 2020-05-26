<template>
  <div>
    <div>
      <t-head></t-head>
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
          picker-options=""
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
            <template slot-scope="scope">
              <p><span style="background-color: #0074D9;color: white;">始</span>{{scope.row.url[0]}}</p>
              <p><span style="background-color: #13CE66;color: white;">终</span>{{scope.row.url[1]}}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            label="发/到时间">
            <template slot-scope="scope">
              <p style="font-size: 20px;">{{scope.row.date[0]}}</p>
              <p>{{scope.row.date[1]}}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="runTime"
            label="运行时间">
          </el-table-column>
          <el-table-column
            prop="money"
            label="参考票价">
            <template slot-scope="scope">
              <p>二等座{{scope.row.money[0]}}</p>
              <p>一等座{{scope.row.money[1]}}</p>
              <p>商务座{{scope.row.money[2]}}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="num"
            label="剩余票量">
            <template slot-scope="scope">
              <p>{{scope.row.num[0]}}</p>
              <p>{{scope.row.num[1]}}</p>
              <p>{{scope.row.num[2]}}</p>
            </template>
          </el-table-column>
          <el-table-column
                label="操作"
                width="100"
                prop="tag"
                >
            <template slot-scope="scope" class="shoppTrain">
              <p>
                <el-button @click="shoppTicket(scope.$index, scope.row,0)" type="text" size="small"
                  >{{scope.row.tag = scope.row.num[0] <=50 ? '抢票' : '购买'}}</el-button>
              </p>
              <p>
                <el-button @click="shoppTicket(scope.$index, scope.row,1)" type="text" size="small"
                  >{{scope.row.tag = scope.row.num[1] <=50 ? '抢票' : '购买'}}</el-button>
              </p>
              <p>
                <el-button @click="shoppTicket(scope.$index, scope.row,2)" type="text" size="small"
                  >{{scope.row.tag = scope.row.num[2] <=50 ? '抢票' : '购买'}}</el-button>
              </p>
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
  import tHead from './common/Head.vue'
  export default {
    data(){
      return{
        DateLimit: '',
        HeadCity: '',
        OverCity: '',
        HeadShow: false,
        OverShow: false,
        dateDay: '',
        tableData: []
      }
    },
    created() {
      console.log(this.$store.state.name)
    },
    methods:{
      shoppTicket(row,column,index){
        console.log(column.num[index])
        if(column.num[index]<=0){
          this.$message('车票已售完')
          return false
        }
        let loginToken = window.sessionStorage.getItem('token') || null
        let telephone = this.$store.state.name || null
        let trainTicket = column.name || null
        let Money = column.money[index] || null
        let day = 5.19 || null
        axios.get('http://127.0.0.1:8081/addTrain',{
          params: {
            index: index,
            telephone: telephone,
            trainTicket: trainTicket,
            Money: Money,
            day: day
          }
        })
        .then((res)=>{
          console.log('插入成功')
          this.searchTrain()
        })
        //买完票刷新页面票数量
        
      },
      searchTrain(){
        this.tableData = []
        let Headurl = this.HeadCity || null
        let Overurl = this.OverCity || null
        axios.get('http://127.0.0.1:8081/queryTrain',{
          params: {
            Headurl: Headurl,
            Overurl: Overurl
          }
        })
        .then((res)=>{
          let trainData = [...res.data]
          for(let i=0;i<trainData.length;i++){
            let url = []
            let date = []
             // var d = new Date(trainData[i].date[0]);
            // var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            let dateOne = trainData[i].date[0]
            let timeOne = dateOne.getHours() + ':' + dateOne.getMinutes()
            let dateTwo = trainData[i].date[1]
            let timeTwo = dateTwo.getHours() + ':' + dateTwo.getMinutes()
            date.push(timeOne)
            date.push(timeTwo)
            url.push(trainData[i].Headurl)
            url.push(trainData[i].Overurl)
            let data = {
              name: trainData[i].name,
              url: url,
              date: date,
              runTime: trainData[i].runTime,
              money: trainData[i].money,
              num: trainData[i].num
            }
            this.tableData.push(data)
          }
        })
      }
    },
    components:{
      hotCity,
      tHead
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
