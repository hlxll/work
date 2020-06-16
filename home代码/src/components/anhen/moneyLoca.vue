<template>
  <div class="echarts">
    <div :style="{height:'1.523rem',width:'100%'}" ref="myEchart"></div>
  </div>
</template>
<script>
  import echarts from "echarts";
  export default {
    name: "echarts",
    props: {
      localname: String,
      cascaJson: Array
    },
    data() {
      return {
        chart: null,
        subordinateData: []
      };
    },
    mounted() {
      this.getLocationJson()
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    watch: {
      cascaJson: function(val){
        this.getLocationJson()
      }
    },
    methods: {
      getLocationJson(){
        let urlName = this.cascaJson[0] || this.$route.query.name
        //通过传递的数据，判断使用哪个省份
        if(!urlName){
          return
        }
        let urls = '/static/json/province/'+urlName+'.json'
        this.axios.get(urls).then(res => {
           echarts.registerMap(urlName, res.data)
           this.subordinate(res.data.features)
           this.chinaConfigure(urlName)
        })
      },
      //处理下级
      subordinate(Jsondata){
        this.subordinateData = []
        Jsondata.forEach(item=>{
          let JSON = {
            name: item.properties.name,
            ask_num: 1,
            board_num: 2,
            sign_num: 3
          }
          this.subordinateData.push(JSON)
        })
      },
      //画地图
      chinaConfigure(Jsonname) {
        console.log(Jsonname)
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
            title: {
                text: '资产区域分布',
                x:'left',
                left: 10,
                top: 10
            },
            tooltip: {
                show: true,
                formatter: function(params) {
                    if (params.data) {
                        return '咨询数:' + params.data.ask_num + '<br>' + '留言数:' + params.data.board_num + '<br>' + '用户数:' + params.data.sign_num + '<br>';
                    } else {
                        return '咨询数:' + 0 + '<br>' + '留言数:' + 0 + '<br>' + '用户数:' + 0 + '<br>';
                    }
                },
                textStyle: {
                    color: '#ffffff',
                    fontSize: 18,
                    lineHeight: 30
                }
            },
            series:[
            	{
            		name:'系统',
            		type:'map',
            		map: Jsonname,
            		mapLocation:{
            			y:60
            		},
            		itemSytle:{
            			emphasis: {
                    borderWidth:2,
                    borderColor:'#fff',
                    areaColor: 'red',
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                 } 
            		},
            		data: this.subordinateData
            	}
            ]
        })
      }
    }
  }
</script>

