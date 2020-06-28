<template>
    <div class="moneyecharts">
        <div :style="{height:'1.523rem',width:'100%'}" :auto-resize=true ref="moneymyEchart"></div>
    </div>
</template>
<script>
    import echarts from "echarts";
    import {fontSize} from "./tableSize/fontSize"
    import {getWidth} from './tableSize/watchWidth.js'
    export default{
        props: ["userJson"],
        data() {
            return {
                watchData: '',
                tableData :[
                    {value: 40, name: '云端'},
                    {value: 35, name: 'gedb'},
                    {value: 25, name: '第三方'}
                ],
                chart: null
            };
        },
        mounted() {
            this.chinaConfigure();
            getWidth(document,window,this)
        },
        watch: {
            watchData: function(){
                this.chinaConfigure()
                console.log('Find改动')
            }
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
                var that = this
                let myChart = echarts.init(this.$refs.moneymyEchart); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                window.addEventListener('resize', myChart.resize)
                myChart.setOption({
                    color: ['#9170ca', '#4c9afb', '#5ad8a6'],
                    title: {
                        text: '资产发现形式分布',
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
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: [{
                        orient: 'vertical',
                        top: 'center',
                        itemWidth:14,
                        padding: [5,0,5,0],
                        itemHeight:10,
                        itemGap: 30,
                        // height: 20,
                        right: '20%',
                        icon: 'circle',
                        data: that.tableData,
                        textStyle: { 
                            fontSize: fontSize(0.078),
                            color: '#999999'
                        },
                        formatter: function(params) {
                            return params
                        }
                    },{
                        orient: 'vertical',
                        top: 'center',
                        itemWidth: 7,
                        itemHeight: 10,
                        right: '10%',
                        itemGap: 30,
                        bottom: 2,
                        icon: 'none',
                        data: that.tableData,
                        textStyle: { 
                            fontSize: fontSize(0.078),
                            color: '#999999'
                        },
                        formatter: function(params) {
                            let tip = ''
                            for(let i=0;i<that.tableData.length;i++){
                                if(params == that.tableData[i].name){
                                    tip = that.tableData[i].value
                                }
                            }
                            return tip+ '%'
                        }
                    }],
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            center: ['35%','55%'],
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgba(255,255,255,1)',
                                    borderWidth: 4,
                                    borderType : 'solid',
                                    shadowColor: 'rgba(255,255,255,1)'
                                }
                            },
                            data: that.tableData
                        }
                    ]
                })
                // window.onresize = myChart.resize;
            }
        }
    }
</script>
