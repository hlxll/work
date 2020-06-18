<template>
    <div class="assetEcharts">
        <div :style="{height:'1.797rem',width:'70%'}" :auto-resize="true" ref="assetEchart"></div>
        <div class="Titledata">
            <p class="assetTitle">备案情况</p>
            <div v-for="(item,index) in TitleText" :key="index" class="beianArr">
                <p>{{item.name}}</p><p>{{item.num}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import echarts from "echarts";
    import {fontSize} from "./tableSize/fontSize"
    import {getWidth} from './tableSize/watchWidth.js'
    export default {
        name: "echarts",
        props: ["userJson"],
        data() {
        return {
            watchData: '',
            TitleText: [
                {
                    name: '系统备案',
                    num: 40
                },
                {
                    name: '域名备案',
                    num: 40
                },
                {
                    name: 'I P 备案',
                    num: '40'
                }
            ],
            chart: null
        };
        },
        watch: {
            watchData: function(){
                this.chinaConfigure()
                console.log('Asset改动')
            }
        },
        mounted() {
            this.chinaConfigure();
            getWidth(document,window,this)
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
                // console.log(this.userJson)
                let myChart = echarts.init(this.$refs.assetEchart); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                window.addEventListener('resize', myChart.resize)
                myChart.setOption({
                    title: {
                        text: '新增资产走势',
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
                        trigger: 'axis',
                        formatter: function(params) {
                            var tip = "";
                            if(params){
                                // console.log(params[0])
                                tip += '2020年' + params[0].name + '<br/>'
                                    for(let i=0;i<params.length;i++){
                                        tip += '<p style="margin-right: 15px;display: inline-block;width: 30px;text-align: right;" class="zoushi">'+params[i].seriesName+'</p>' + params[i].data + '<br/>'
                                    }
                            }
                            return tip;
                        },
                        itemWidth: fontSize(0.844),
                        backgroundColor: '#ffffff',
                        textStyle: {
                            color: '#666666',
                            fontSize: fontSize(0.09)
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '12%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: fontSize(0.078),
                                color: '#999999'
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#d2d2d2',
                            }
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: fontSize(0.078),
                                color: '#999999'
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#d2d2d2',
                            }
                        },
                        // offset: 10
                    },
                    color: ['#9170ca', '#4c9afb', '#5ad8a6'],
                    legend: {
                        orient: 'horizontal',
                        left: 'center',
                        bottom: 5,
                        itemWidth:14,
                        itemGap: 40,
                        itemHeight:10,
                        icon: 'circle',
                        formatter: function(params) {
                            return params
                        },
                        textStyle: { 
                            color: '#999999',
                            fontSize: fontSize(0.078),
                        }
                    },
                    series: [
                        {
                            name: '系统',
                            type: 'line',
                            // stack: '总量',
                            areaStyle: {
                                color: 'rgba(145,112,202,0.5)'
                            },
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                },
                            },
                            data: [12,123,20,40,50,60,70,80,90,100,145,123]
                        },
                        {
                            name: '域名',
                            type: 'line',
                            areaStyle: {
                                color: 'rgba(76,154,251,0.5)'
                            },
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                },
                            },
                            // stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310,3,4,5,6,87]
                        },
                        {
                            name: 'I P',
                            type: 'line',
                            areaStyle: {
                                color: 'rgba(90,216,166,0.5)'
                            },
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                },
                            },
                            // stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410,1,2,3,5,7]
                        }
                    ]
                });
            }
        }
    }
</script>
<style lang='scss' scoped>
.zoushi{
    color: '#666666'
}
    .assetEcharts{
        width: 100%;
        padding-left: 0.156rem;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.078rem;
        background-color: #eff2fa;
        .assetFenlei{
            width: 70%;
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
        div{
            background-color: #ffffff;
        }
        .Titledata{
            width: 23.4%;
            height: 1.797rem;
            margin-left: 0.082rem;
            .assetTitle{
                padding: 0 0.082rem;
                margin-top: 0.059rem;
                font-size: 0.086rem;
                height: 0.117rem;
                margin-bottom: 0.129rem;
                color: #333333;
                font-weight: normal;
            }
            .beianArr{
                margin: 0 0.082rem;
                height: 0.391rem;
                line-height: 0.391rem;
                text-align: center;
                background-color: #f7fcff;
                display: flex;
                margin-bottom: 0.12rem;
                p{
                    width: 50%;
                    font-size: 0.094rem;
                    color: #666666;
                }
            }
        }
    }
</style>