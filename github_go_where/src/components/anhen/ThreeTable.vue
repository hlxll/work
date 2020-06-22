<template>
    <div class="threeTable">
        <div :style="{height:'1.797rem',width:'37.5%',position:'relative'}" :auto-resize='true' class="assetEcharts" >
            <div class="changeTable">
                <el-button type="text" :class="wek" @click="changeTable('wek')">周</el-button>
                <el-button type="text" :class="month" @click="changeTable('month')">月</el-button>
            </div>
            <div :style="{height:'1.797rem',width:'100%'}" :auto-resize=true ref="OneEchart"></div>
        </div>
        <div :style="{height:'1.797rem',width:'24%'}" :auto-resize=true ref="TwoEchart"></div>
        <div :style="{height:'1.797rem',width:'32.3%'}" :auto-resize=true ref="ThreeEchart"></div>
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
                watchData:'',
                setTime: '',
                // screenWidth: document.body.clientWidth,
                wek: 'white',
                month: 'lanse',
                chart: null,
                oneData: [
                    [10,40,30,10,50,20],
                    [20,30,10,50,60,20],
                    [30,40,80,30,70,50]
                ],
                WekoneData: [
                    [10,40,30,10,50,30,40],
                    [20,50,40,50,60,80,23],
                    [30,40,10,60,70,80,10]
                ],
                ThreeData: [
                    {value: 18, name: 'web服务'},
                    {value: 25, name: '前端框架'},
                    {value: 36, name: '系统类型'},
                    {value: 21, name: '服务器类型'},
                    {value: 12, name: '语音类型'},
                    {value: 23, name: '防护类型'},
                ]
            };
        },
        watch: {
            screenWidth (val) {
                console.log(1)
            },
            watchData: function(){
                this.oneConfigure();
                this.twoConfigure();
                this.threeConfigure()
                console.log('三个表格改动')
            }
        },
        mounted() {
            this.oneConfigure();
            this.twoConfigure();
            this.threeConfigure()
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
            changeTable(item){
                console.log(item)
                if(item == 'wek'){
                    this.wek = 'lanse'
                    this.month = 'white'
                    let myChart = echarts.init(this.$refs.OneEchart)
                    window.onresize = myChart.clear();
                    this.wekOneConfigure()
                }else{
                    this.wek = 'white'
                    this.month = 'lanse'
                    let myChart = echarts.init(this.$refs.OneEchart)
                    window.onresize = myChart.clear();
                    this.oneConfigure()
                }
            },
            oneConfigure() {
                let onemyChart = echarts.init(this.$refs.OneEchart); //这里是为了获得容器所在位置
                window.onresize = onemyChart.resize;
                window.addEventListener('resize', onemyChart.resize)
                onemyChart.setOption({ 
                    title: {
                        text: '资产问题汇总',
                        left: 10,
                        top: 10,
                        textStyle: {
                            color: '#333333',
                            fontWeight: 'normal',
                            fontFamily: 'SourceHanSansCN-Regular',
                            fontSize: fontSize(0.086)
                        }
                    },
                    color: ['#b1000b', '#f93030', '#ffb01b'],
                    legend: {
                        orient: 'horizontal',
                        left: 'center',
                        bottom: 5,
                        itemGap: 30,
                        itemWidth:14,
                        itemHeight:10,
                        icon: 'circle',
                        formatter: function(params) {
                            return params
                        },
                        textStyle: { 
                            color: '#999999',
                            fontSize: fontSize(0.078)
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function(params) {
                            var tip = "";
                            if(params){
                                tip += '2020年' + params[0].name + '<br/>'
                                for(let i=0;i<params.length;i++){
                                    tip += '<p style="margin-right: 10px;display: inline-block;width: 30px;text-align: right;">'+params[i].seriesName+'</p>' + params[i].data + '<br/>'
                                }
                            }
                            return tip;
                        },
                        itemWidth: 40,
                        backgroundColor: '#ffffff',
                        textStyle: {
                            color: '#666666'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '12%',
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
                        data: ['1月','2月','3月','4月','5月','6月'],
                        splitLine: {
                            show: true,
                            interval: 0,
                            lineStyle: {
                                color: '#eeeeee',
                                type: 'solid',
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: fontSize(0.078),
                                color: '#999999'
                            },
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#d2d2d2',
                            }
                        },
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 400,
                        splitLine: {
                            show: true,
                            interval: 0,
                            lineStyle: {
                                color: '#eeeeee',
                                type: 'solid',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#d2d2d2',
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: fontSize(0.078),
                                color: '#999999'
                            },
                        },
                    },
                    series: [
                        {
                            name: '漏洞',
                            type: 'line',
                            // stack: '总量',  显示的数据是下面几个点加起来的
                            data: this.oneData[0],
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                }
                            },
                            smooth: true
                        },
                        {
                            name: '暗链',
                            type: 'line',
                            data: this.oneData[1],
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                }
                            },
                            mooth: true
                        },
                        {
                            name: '后门',
                            type: 'line',
                            data: this.oneData[2],
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                }
                            },
                            mooth: true
                        }
                    ]
                });
                // window.onresize = onemyChart.resize;
            },
            wekOneConfigure() {
                let wekmyChart = echarts.init(this.$refs.OneEchart); //这里是为了获得容器所在位置
                // window.onresize = wekmyChart.resize;
                window.addEventListener('resize', wekmyChart.resize)
                wekmyChart.setOption({ 
                    title: {
                        text: '资产问题汇总',
                        left: 10,
                        top: 10,
                        textStyle: {
                            color: '#333333',
                            fontWeight: 'normal',
                            fontFamily: 'SourceHanSansCN-Regular',
                            fontSize: fontSize(0.086)
                        }
                    },
                    color: ['#b1000b', '#f93030', '#ffb01b'],
                    legend: {
                        orient: 'horizontal',
                        left: 'center',
                        bottom: 5,
                        itemWidth:14,
                        itemHeight:10,
                        itemGap: 30,
                        icon: 'circle',
                        formatter: function(params) {
                            return params
                        },
                        textStyle: { 
                            color: '#999999',
                            fontSize: fontSize(0.078)
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function(params) {
                            var tip = "";
                            if(params){
                                tip += '2020年' + params[0].name + '<br/>'
                                for(let i=0;i<params.length;i++){
                                    tip += '<p style="margin-right: 10px;display: inline-block;width: 30px;text-align: right;">'+params[i].seriesName+'</p>' + params[i].data + '<br/>'
                                }
                            }
                            return tip;
                        },
                        itemWidth: 40,
                        backgroundColor: '#ffffff',
                        textStyle: {
                            color: '#666666'
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
                        data: ['周一','周二','周三','周四','周五','周六','周日'],
                        splitLine: {
                            show: true,
                            interval: 0,
                            lineStyle: {
                                color: '#eeeeee',
                                type: 'solid',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#d2d2d2',
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: fontSize(0.078),
                                color: '#999999'
                            },
                        }
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 400,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#d2d2d2',
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: fontSize(0.078),
                                color: '#999999'
                            },
                        },
                        splitLine: {
                            show: true,
                            interval: 0,
                            lineStyle: {
                                color: '#eeeeee',
                                type: 'solid',
                            }
                        }
                    },
                    series: [
                        {
                            name: '漏洞',
                            type: 'line',
                            // stack: '总量',  显示的数据是下面几个点加起来的
                            data: this.WekoneData[0],
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                }
                            },
                            smooth: true
                        },
                        {
                            name: '暗链',
                            type: 'line',
                            data: this.WekoneData[1],
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                }
                            },
                            smooth: true
                        },
                        {
                            name: '后门',
                            type: 'line',
                            data: this.WekoneData[2],
                            itemStyle: {
                                opacity: '0.1'
                            },
                            emphasis: {
                                itemStyle: {
                                    opacity: '1',
                                    borderWidth: 2
                                }
                            },
                            smooth: true
                        }
                    ]
                });
                // window.onresize = wekmyChart.resize;
            },
            twoConfigure(){
                let twomyChart = echarts.init(this.$refs.TwoEchart); //这里是为了获得容器所在位置
                // window.onresize = twomyChart.resize;
                window.addEventListener('resize', twomyChart.resize)
                twomyChart.setOption({
                    title: {
                        text: '指标占比',
                        left: 10,
                        top: 10,
                        textStyle: {
                            color: '#333333',
                            fontWeight: 'normal',
                            fontFamily: 'SourceHanSansCN-Regular',
                            fontSize: fontSize(0.086)
                        }
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '9%',
                        containLabel: true,
                        backgroundColor: '#ffffff'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['漏洞', '暗链', '后门'],
                        axisLabel: {
                            margin: 20,
                            color: '#999999',
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
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            // interval: 0,
                            lineStyle: {
                                color: '#eeeeee',
                                type: 'solid',
                            }
                        }
                    },
                    yAxis: [{
                        min: 0,
                        max: 100,
                        axisLabel: {
                            formatter: '{value}%',
                            textStyle: {
                                fontSize: fontSize(0.078),
                                color: '#999999',
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
                                color: '#eeeeee',
                                type: 'solid',
                            }
                        }
                    }],
                    series: [{
                        data: [55,48,39],
                        barWidth: '15px',
                        type: 'bar',
                        itemStyle: {
                            color: '#ffb01b'
                        },
                        label: {
                            show: true,
                            position: 'top',
                            fontSize: fontSize(0.078),
                            color: '#999999',
                            formatter: (params)=>{//单独对第一个label使用样式
                                    return params.value+'%'
                            },
                        }
                    }]
                })
            },
            threeConfigure() {
                var that = this
                // console.log(this.userJson)
                let ThreemyChart = echarts.init(this.$refs.ThreeEchart); //这里是为了获得容器所在位置
                // window.onresize = ThreemyChart.resize;
                window.addEventListener('resize', ThreemyChart.resize)
                ThreemyChart.setOption({
                    color: ['#9170ca', '#4c9afb', '#5ad8a6' ,'#ffb01b' ,'#ff7b33', '#b1000b'],
                    title: {
                        text: '指纹信息分布',
                        top: 10,
                        left: 10,
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
                        right: '12%',
                        top: 'center',
                        itemWidth:14,
                        itemHeight:10,
                        itemGap: 15,
                        icon: 'circle',
                        data: this.ThreeData,
                        formatter: function(params) {
                            return params 
                        },
                        textStyle: { 
                            color: '#999999',
                            fontSize: fontSize(0.078)
                        }
                    },{
                        orient: 'vertical',
                        right: '4%',
                        top: 'center',
                        itemWidth:7,
                        itemHeight:10,
                        icon: 'none',
                        itemGap: 15,
                        data: this.ThreeData,
                        textStyle: { 
                            color: '#999999',
                            fontSize: fontSize(0.078)
                        },
                        formatter: function(params) {
                            let tip = ''
                            for(let i=0;i<that.ThreeData.length;i++){
                                if(params == that.ThreeData[i].name){
                                    tip = that.ThreeData[i].value
                                }
                            }
                            return tip
                        }
                    }],
                    series: [
                        {
                            name: '指纹信息公布',
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
                                    shadowColor: 'rgba(255,255,255,1)'
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
                // window.onresize = ThreemyChart.resize;
            }
        }
    }
</script>
<style lang="scss" scoped>
.changeTable{
    font-size: 0.055rem;
    position: absolute;
    right: 6%;
    top: 0;
    margin-top: 0.078rem;
    display: flex;
    border: 1px solid #4c9afb;
    border-radius: 5px;
    float: right;
    z-index: 999;
    .white{
        color: #4c9afb;
        background-color: #ffffff;
    }
    .lanse{
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
        padding-left: 0.078rem;
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