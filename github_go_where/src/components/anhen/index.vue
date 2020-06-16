<template>
    <div class="shouye">
        <div class="titlePadd">
            <p class="HeadTitle">{{Allname}}</p>
        </div>
        <div class="searchTitle">
            <p>资产管理/首页</p>
            <el-cascader
                v-model="Plantionvalue"
                :options="options"
                @change="handleChange">
            </el-cascader>
        </div>
        <home :cascaJson="Plantionvalue"></home>
    </div>
</template>
<script>
import home from './home.vue'
    export default {
        data() {
            return {
                Allname: '江苏省点击',
                Plantionvalue: [],
                options: [
                    {
                        value: 'jiangxi',
                        label: 'jiangxi'
                    },
                    {
                        value: 'anhui',
                        label: 'anhui'
                    }
                ]
            }
        },
        methods: {
            handleChange(value) {
                console.log(value)
            }
        },
        components: {
            home
        }
    }
</script>
<style socped lang="scss">
div , p{
    margin: 0;
}
.shouye{
    width: 100%;
    min-width: 1100px;
    background-color: #eff2fa;
    overflow: hidden;
}
.titlePadd{
    width: 100%;
    overflow: hidden;
    height:0.313rem;
    background-color: #4a93fe;
    line-height: 0.313rem;
    .HeadTitle{
        font-size: 0.125rem;
        line-height: 0.313rem;
        color: #ffffff;
        width: 100%;
        height: 0.313rem;
        padding-left: 0.156rem;
    }
}
    
    .searchTitle{
        width: 100%;
        height: 39px;
        display: flex;
        flex-direction: row;
        margin-top: 0.063rem;
        background-color: #eff2fa;
        margin-bottom: 0.039rem;
        align-items: center;
        p{
            line-height: 0.082rem;
	        letter-spacing: 1px;
	        color: #515a6e;
            margin-right: auto;
            margin-left: 0.156rem;
            font-size: 0.055rem;
        }
        .el-cascader{
            margin-right: 0.26rem;
            .el-input{
                height: 0.141rem;
                .el-input__inner{
                    height: 0.141rem;
                }
            }
        }
    }
</style>