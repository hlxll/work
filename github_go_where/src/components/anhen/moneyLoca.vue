<template>
  <div class="echarts">
    <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
  </div>
</template>
<script>
  import echarts from "echarts";
  import '../../../node_modules/echarts/map/js/province/jiangxi.js'
  export default {
    name: "echarts",
    props: ["userJson"],
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.chinaConfigure();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      chinaConfigure() {
        console.log(this.userJson)
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
            title: {
                text: '资产区域分布',
                x:'left'
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
                // position: {
                //     top: 10,
                //     left: 10
                // }
            },
            series:[
            	{
            		name:'系统',
            		type:'map',
            		map:'江西',
            		mapLocation:{
            			y:60
            		},
            		itemSytle:{
            			emphasis:{
                            label:{show:false}
                        }
            		},
            		data:[
            			{
                            name:'上饶市',
                            ask_num: 1,
                            board_num: 2,
                            sign_num: 3
                        },
                        {
                            name:'鹰潭市',
                            ask_num: 1,
                            board_num: 2,
                            sign_num: 3
                        },
                        {
                            name:'抚州市',
                            ask_num: 1,
                            board_num: 2,
                            sign_num: 3
                        },
                        {
                            name:'宜春市',
                            ask_num: 1,
                            board_num: 2,
                            sign_num: 3
                        },
                        {
                            name:'新余市',
                            ask_num: 1,
                            board_num: 2,
                            sign_num: 3
                        }
            		]
            	}
            ],
        })
      }
    }
  }
</script>

