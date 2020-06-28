<template>
    <div class="AllPhone">
        <div class="headImg">
            <el-image
                style="width: 100%; height: 4.21rem"
                src="/static/img/phone/head.png">
            </el-image>
        </div>
        <div class="apply">
            <div class="safety">
                <p>远程在线安全</p>
            </div>
            <div class="applyImg">
                <el-image
                    style="width: 0.864rem; height: 0.476rem"
                    src="/static/img/phone/21.png">
                </el-image>
            </div>
            <div class="applyBtn">
            <div v-for="item in 5" :key="item">
                <applyBtn :ApplyData="ApplyData[item-1]"></applyBtn>
            </div>
            </div>
        </div>
        <div class="apply" style="margin-top: 0.741rem;">
            <div class="localtion">
                <p>区域经济小脑</p>
            </div>
            <div class="applyImg">
                <el-image
                    style="width: 0.864rem; height: 0.476rem"
                    src="/static/img/phone/21.png">
                </el-image>
            </div>
            <div class="applyBtn">
            <div v-for="item in 3" :key="item">
                <applyBtn :ApplyData="ApplyMoneyData[item-1]"></applyBtn>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import applyBtn from './applyBtn.vue'
export default{
    components:{
        applyBtn
    },
    data(){
        return{
            ApplyData: [
                {
                    img: '疫情h5_03.png',
                    title: 'DDoS高防服务',
                    ArrTitle: ['2.5T防御带宽','业务全天在线','专业级CC防护','可视化防护报表','防护3-7层DDoS攻击','可视化防护报表','支持TCP/UDP/HTTP/HTTPS等协议']
                },
                {
                    img: '疫情h5_10.png',
                    title: 'SaaS云检测服务',
                    ArrTitle: ['漏洞扫描','暗链监测','篡改监测','内容监测','可用性监测']
                },
                {
                    img: '疫情h5_03.png',
                    title: 'SaaS云防护服务',
                    ArrTitle: ['Web应用防护','大数据流量分析','一键秒级关停','APP数据报告','网站永久在线','CDN加速服务']
                },
                {
                    img: '疫情h5_16.png',
                    title: '网络资产绘测服务',
                    ArrTitle: ['网络空间边界测绘','网络安全责任界定','重点资产有效保护','落实资产管理责任制']
                },
                {
                    img: '疫情h5_18.png',
                    title: '关键基础设施监管服务',
                    ArrTitle: ['摸清关键资产家底','关基常态化监测','全生命周期监管','建立威胁情报共享','辖区全息画像分析','扁平化信息化管理']
                }
            ],
            ApplyMoneyData: [
                {
                    img: '疫情h5_20.png',
                    title: '关键基础设施监管服务',
                    ArrTitle: ['全息掌握辖区企业/员工底数','自动统计分析复工企业数据','关联分析人员疫情期活动轨迹','疫情信息数字化一屏通览']
                },
                {
                    img: '疫情h5_22.png',
                    title: '关键基础设施监管服务',
                    ArrTitle: ['宏观掌握辖区内的舆情态势','查找虚假宣传、不良谣言舆情','查找哄抬物价、售假贩假舆情','梳理辖区企业救援支撑数据','推动辖区良好网络空间建设']
                },
                {
                    img: '疫情h5_24.png',
                    title: '关键基础设施监管服务',
                    ArrTitle: ['分析区域内经济影响因素','分析区域内企业运行状况','监管特定经济政策的落实','实现区域资产优化配置','精细化带动区域经济发展']
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.AllPhone{
    background-color: #004b87;
}
.headImg{
    width: 100%;
}
.apply{
    width: 97.3%;
    margin: 0 auto;
    background-color: #ffffff;
    transform:translateY(-2.04rem);
    display: flex;
    flex-wrap: wrap;
    .safety{
        width: 1.54rem;
        height: 0.41rem;
        background-color: #51b5f0;
        text-align: center;
        transform:translateY(-0.35rem);
        p{
            color: #ffffff;
            margin: 0;
            font-size: 0.2rem;
            line-height: 0.41rem;
            height: 0.41rem;
        }
    }
    .localtion{
        width: 1.54rem;
        height: 0.41rem;
        background-color: #2371e7;
        text-align: center;
        transform:translateY(-0.35rem);
        p{
            color: #ffffff;
            margin: 0;
            font-size: 0.2rem;
            line-height: 0.41rem;
            height: 0.41rem;
        }
    }
    .applyImg{
        width: 0.864rem;
        margin-left: auto;
        height: 0.476rem;
        .el-image{
            display: block;
            transform:translateY(-0.054rem);
        }
    }
    .applyBtn{
        width: 94%;
        margin: 0 auto;
    }
}
</style>