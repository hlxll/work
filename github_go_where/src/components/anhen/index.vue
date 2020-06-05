<template>
    <div class="shouye">
        <p class="HeadTitle">{{Allname}}</p>
        <div class="searchTitle">
            <p>资产管理/首页</p>
            <el-cascader
                v-model="Plantionvalue"
                :options="options"
                @change="handleChange">
            </el-cascader>
        </div>
        <home></home>
    </div>
</template>
<script>
import home from './home.vue'
    export default {
        data() {
            return {
                Allname: '江苏省点击',
                Plantionvalue:'',
                options: [
                    {
                        value: 'one',
                        label: 'one'
                    },
                    {
                        value: 'two',
                        label: 'two'
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
    background-color: #eff2fa;
}
    .HeadTitle{
        font-size: 32px;
        line-height: 80px;
        color: #ffffff;
        width: 100%;
        height: 80px;
        padding-left: 45px;
        background-color: #4a93fe;
    }
    .searchTitle{
        width: 100%;
        height: 39px;
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        background-color: #eff2fa;
        p{
            line-height: 39px;
	        letter-spacing: 1px;
	        color: #515a6e;
            margin-right: auto;
            margin-left: 45px;
        }
        .el-cascader{
            .el-input{
                height: 39px;
                .el-input__inner{
                    height: 39px;
                }
            }
        }
    }
</style>