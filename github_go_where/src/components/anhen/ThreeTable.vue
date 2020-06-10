<template>
    <div class="threeTable">
        <div :style="{height:'400px',width:'37.5%'}" class="assetEcharts">
            <div class="changeTable">
                <el-button type="text" class="wekend">周</el-button>
                <el-button type="text" class="month">月</el-button>
            </div>
            <div :style="{height:'400px',width:'100%'}" ref="OneEchart"></div>
            <div class="assetFenlei">
                <li style="background-color: #b1000b;"></li>漏洞
                <li style="background-color: #f93030;"></li>暗链
                <li style="background-color: #ffb01b"></li>后门
            </div>
        </div>
        <div :style="{height:'400px',width:'24%'}" ref="TwoEchart"></div>
        <div :style="{height:'400px',width:'34%'}" ref="ThreeEchart"></div>
    </div>
</template>
<script>
    import echarts from "echarts";
    export default {
        name: "echarts",
        props: ["userJson"],
        data() {
        return {
            chart: null,
            oneData: [
                [10,20,30,40,50,60,70,80,90,100,120,130],
                [20,30,40,50,60,70,80,90,100,110,120,130],
                [30,40,50,60,70,80,90,100,110,120,130,140]
            ]
        };
        },
        mounted() {
            this.oneConfigure();
            this.twoConfigure();
            this.threeConfigure()
        },
        beforeDestroy() {
            if (!this.chart) {
                return;
            }
            this.chart.dispose();
            this.chart = null;
        },
        methods: {
            oneConfigure() {
                let myChart = echarts.init(this.$refs.OneEchart); //这里是为了获得容器所在位置
                window.onresize = myChart.resize;
                myChart.setOption({ 
                    title: {
                        text: '新增资产走势',
                        left: 10,
                        top: 10
                    },
                    color: ['#b1000b', '#f93030', '#ffb01b'],
                    tooltip: {
                        trigger: 'axis',
                        formatter: function(params) {
                            var tip = "";
                            if(params){
                                console.log(params)
                                tip += '2020年' + params[0].name + '<br/>'
                                for(let i=0;i<params.length;i++){
                                    tip += '<p style="margin-right: 10px;display: inline-block;width: 30px;text-align: right;">'+params[i].seriesName+'</p>' + params[i].data + '<br/>'
                                }
                            }
                            return tip;
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    // toolbox: {
                    //     feature: {
                    //         dataView: {show: true, readOnly: false}
                    //     }
                    // },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 400
                    },
                    series: [
                        {
                            name: '漏洞',
                            type: 'line',
                            // stack: '总量',  显示的数据是下面几个点加起来的
                            data: this.oneData[0]
                        },
                        {
                            name: '暗链',
                            type: 'line',
                            data: this.oneData[1]
                        },
                        {
                            name: '后门',
                            type: 'line',
                            data: this.oneData[2]
                        }
                    ]
                });
            },
            twoConfigure(){
                let myChart = echarts.init(this.$refs.TwoEchart); //这里是为了获得容器所在位置
                window.onresize = myChart.resize;
                myChart.setOption({
                    title: {
                        text: '指标占比',
                        left: 10,
                        top: 10
                    },
                    xAxis: {
                        type: 'category',
                        data: ['漏洞', '暗链', '后门'],
                        axisLabel: {
                            margin: 20,
                            color: '#999',
                            textStyle: {
                                fontSize: 18
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#d2d2d2',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                    },
                    yAxis: [{
                        min: 0,
                        max: 100,
                        axisLabel: {
                            formatter: '{value}%',
                            color: '#999',
                            textStyle: {
                                fontSize: 8
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        data: [55,48,39],
                        barWidth: '20px',
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top',
                            color: '#999999',
                            formatter: (params)=>{//单独对第一个label使用样式
                                    return params.value+'%'
                            },
                        }
                    }]
                })
            },
            threeConfigure() {
                console.log(this.userJson)
                let myChart = echarts.init(this.$refs.ThreeEchart); //这里是为了获得容器所在位置
                window.onresize = myChart.resize;
                myChart.setOption({
                    color: ['#9170ca', '#4c9afb', '#5ad8a6' ,'#ffb01b' ,'#ff7b33', '#b1000b'],
                    title: {
                        text: '指纹信息分布',
                        top: 10,
                        left: 10
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 100,
                        itemWidth:14,
                        itemHeight:14,
                        borderRadius: 14,
                        data: ['web服务', '前端框架', '系统类型', '服务器类型', '语音类型', '防护类型']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
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
                                    borderColor: '#eff2fa',
                                    borderWidth: 4
                                }
                            },
                            data: [
                                {value: 18, name: 'web服务'},
                                {value: 25, name: '前端框架'},
                                {value: 36, name: '系统类型'},
                                {value: 21, name: '服务器类型'},
                                {value: 12, name: '语音类型'},
                                {value: 23, name: '防护类型'},
                            ]
                        }
                    ]
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
.changeTable{
    font-size: 0.055rem;
    position: absolute;
    left: 34%;
    margin-top: 0.078rem;
    display: flex;
    border: 1px solid #4c9afb;
    border-radius: 0.028rem;
    .wekend{
        color: #4c9afb;
        background-color: #ffffff;
    }
    .month{
        color: #ffffff;
        background-color: #4c9afb;
    }
    .el-button{
        
        width: 0.127rem;
        height: 0.133rem;
        
        line-height: 0.133;
        margin-left: 0;
    }
}
    .threeTable{
        margin-top: 0.078rem;
        padding-left: 20px;
        display: flex;
        &>div{
            background-color: #ffffff;
            margin-left: 0.078rem;
        }
        .assetEcharts{
            // display: flex;
            .assetFenlei{
                width: 71%;
                font-size: 0.078rem;
                line-height: 0.137rem;
                color: #999999;
                display: flex;
                align-items: center;
                justify-content: center;
                li{
                    list-style: none;
                    width: 0.055rem;
                    height: 0.055rem;
                    border-radius: 0.0275rem;
                    margin-left: 0.18rem;
                    margin-right: 0.059rem;
                }
            }
        }
    }
</style>