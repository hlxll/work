<template>
    <div class="moneyecharts">
        <div :style="{height:'400px',width:'100%'}" ref="moneymyEchart"></div>
    </div>
</template>
<script>
import echarts from "echarts";
    export default{
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
                let myChart = echarts.init(this.$refs.moneymyEchart); //这里是为了获得容器所在位置
                window.onresize = myChart.resize;
                myChart.setOption({
                    color: ['#9170ca', '#4c9afb', '#5ad8a6'],
                    title: {
                        text: '资产发现形式分布',
                        left: 10,
                        top: 10
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
                        data: ['云端', 'gedb', '第三方']
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
                                {value: 40, name: '云端'},
                                {value: 35, name: 'gedb'},
                                {value: 25, name: '第三方'}
                            ]
                        }
                    ]
                })
            }
    }
    } 
</script>