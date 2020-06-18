<template>
  <div class="echarts">
    <div :style="{height:'1.523rem',width:'100%'}" :auto-resize=true ref="myEchart"></div>
  </div>
</template>
<script>
  import echarts from "echarts";
  import {fontSize} from "./tableSize/fontSize"
  import {getWidth} from './tableSize/watchWidth.js'
  export default {
    name: "echarts",
    props: {
      localname: String,
      cascaJson: Array
    },
    data() {
      return {
        watchData: '',
        optionData: '',
        chart: null,
        subordinateData: []
      };
    },
    mounted() {
      this.getLocationJson()
      getWidth(document,window,this)
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
      },
      watchData: function(){
        this.getLocationJson()
        console.log('local改动')
      }
    },
    methods: {
      getLocationJson(){
        let urlName = this.cascaJson[0] || this.$route.query.name || 'zhejiang'
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
        Jsondata.forEach((item, index)=>{
          let JSON = {
            name: item.properties.name,
            ask_num: 1,
            board_num: 2,
            sign_num: 3,
            value: index*100
          }
          this.subordinateData.push(JSON)
        })
      },
      //画地图
      chinaConfigure(Jsonname) {
        // console.log(Jsonname)
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
        // window.onresize = myChart.resize;// 覆盖了
        window.addEventListener('resize', myChart.resize)
        myChart.setOption({ // 进行相关配置
            title: {
                text: '资产区域分布',
                x:'left',
                left: 10,
                top: 10,
                textStyle: {
                  color: '#333333',
                  fontWeight: 'normal',
                  fontFamily: 'SourceHanSansCN-Regular',
                  fontSize: fontSize(0.086)
                }
            },
            visualMap: {
                show: false,
                min: 0, // 指定 visualMapContinuous 组件的允许的最小值。'min' 必须用户指定。[visualMap.min, visualMax.max] 形成了视觉映射的『定义域』。
                max: 1000, // 指定 visualMapContinuous 组件的允许的最大值
                inRange: {
                    color: ['#0494e1', '#004098']//地图颜色范围
                }
            },
            tooltip: {
                show: true,
                formatter: function(params) {
                    if (params.data) {
                        return '<p class="shujutishi">系统</p>' +params.data.ask_num+'个' + '<br>' 
                        + '<p class="shujutishi">域名</p>' + params.data.board_num +'个' + '<br>' + 
                        '<p class="shujutishi">I P</p>' + params.data.sign_num +'个' +  '<br>';
                    } else {
                        return '系统' + 0 + '<br>' + '域名' + 0 + '<br>' + 'IP' + 0 + '<br>';
                    }
                },
                textStyle: {
                    color: '#ffffff',
                    fontSize: 18,
                    lineHeight: 30,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    letterSpacing: 0
                },
                backgroundColor : 'rgba(0,0,0,0.5)'
            },
            series:[
            	{
            		name:'系统',
            		type:'map',
            		map: Jsonname,
            		mapLocation:{
            			y:60
            		},
                label: {
                  show: true,
                  color: '#999999'
                },
                emphasis: {
                  borderWidth:4,
                  borderColor:'black',
                  areaColor: 'red',
                  label: {
                      show: true,
                      textStyle: {
                          color: '#ffffff',
                      }
                  },
                  itemSytle: {
                    show: true,
                    areaColor: '#4c9afb',
                    color: '#4c9afb',
                  }
                },
            		data: this.subordinateData
            	}
            ]
        })
        // window.onresize = myChart.resize;
      }
    }
  }
</script>
<style>
  .shujutishi{
    width: 0.3rem;
    text-align: right;
    padding-right: 10px;
    display: inline-block;
    margin-right: 10px;
  }
</style>
