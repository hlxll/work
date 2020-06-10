<template>
    <div class="assetEcharts">
        <div :style="{height:'400px',width:'70%'}" ref="assetEchart"></div>
        <div class="Titledata">
            <p class="assetTitle">备案情况</p>
            <div v-for="(item,index) in TitleText" :key="index" class="beianArr">
                <p>{{item.name}}</p><p>{{item.num}}</p>
            </div>
        </div>
        <div class="assetFenlei">
            <li style="background-color: #9170ca;"></li>系统
            <li style="background-color: #4c9afb;"></li>域名
            <li style="background-color: #5ad8a6"></li>IP
        </div>
    </div>
</template>
<script>
    import echarts from "echarts";
    export default {
        name: "echarts",
        props: ["userJson"],
        data() {
        return {
                TitleText: [
                    {
                        name: '系统备案',
                        num: 40
                    },
                    {
                        name: '系统备案',
                        num: 40
                    },
                    {
                        name: '系统备案',
                        num: '40'
                    }
                ],
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
            let myChart = echarts.init(this.$refs.assetEchart); //这里是为了获得容器所在位置
            window.onresize = myChart.resize;
            myChart.setOption({ 
                title: {
                    text: '新增资产走势',
                    left: 10,
                    top: 10
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        var tip = "";
                        if(params){
                            console.log(params[0])
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
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                },
                yAxis: {
                    type: 'value'
                },
                color: ['#9170ca', '#4c9afb', '#5ad8a6'],
                series: [
                    {
                        name: '系统',
                        type: 'line',
                        // stack: '总量',
                        data: [12,123,20,40,50,60,70,80,90,100,145,123]
                    },
                    {
                        name: '域名',
                        type: 'line',
                        // stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310,3,4,5,6,87]
                    },
                    {
                        name: 'IP',
                        type: 'line',
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
            width: 23%;
            height: 400px;
            margin-left: 0.082rem;
            padding: 0 0.082rem;
            .assetTitle{
                margin-top: 0.059rem;
                font-size: 0.086rem;
                margin-bottom: 0.129rem;
            }
            .beianArr{
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