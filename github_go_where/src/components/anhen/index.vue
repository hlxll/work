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
    background-color: #eff2fa;
}
.titlePadd{
    width: 100%;
    overflow: hidden;
    .HeadTitle{
        font-size: 32px;
        line-height: 80px;
        color: #ffffff;
        width: 100%;
        height: 80px;
        padding-left: 45px;
        background-color: #4a93fe;
    }
}
    
    .searchTitle{
        width: 100%;
        height: 39px;
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        background-color: #eff2fa;
        margin-bottom: 0.039rem;
        p{
            line-height: 39px;
	        letter-spacing: 1px;
	        color: #515a6e;
            margin-right: auto;
            margin-left: 45px;
            font-size: 0.055rem;
        }
        .el-cascader{
            margin-right: 0.26rem;
            .el-input{
                height: 39px;
                .el-input__inner{
                    height: 39px;
                }
            }
        }
    }
</style>