<template>
    <div class="applYBtn">
        <el-row>
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <el-image
                        style="width: 100%;"
                        :src="'/static/img/phone/'+ApplyData.img">
                    </el-image>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light centerText">
                    <p>{{ApplyData.title}}</p>
                    <li v-for="(item, index) in ApplyData.ArrTitle" :key='index'>
                        <div></div><span>{{item}}</span>
                    </li>
                </div>
            </el-col>
            <el-col :span="5">
                <el-image
                    class="ApplyBtn"
                    style="width: 100%;"
                    src="/static/img/phone/疫情h5_06.png">
                </el-image>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default{
    props: {
        ApplyData: Object
    },
    data(){
        return {
        }
    },
    mounted:function() {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.centerText{
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.143rem;
    p{
        width: 100%;
        font-size: 0.204rem;
        line-height: 0.204rem;
        height: 0.204rem;
        color: #333333;
        margin: 0;
        margin-bottom: 0.129rem;
    }
    li{
        list-style-type: none;
        display: flex;
        height: 0.214rem;
        line-height: 0.214rem;
        min-width: 50%;
        div{
            margin: auto 0;
            background-color: #44d0f6;
            // display: inline-block;
            width: 4px;
            height: 4px;
            margin-right: 0.082rem;
            border-radius: 2px;
        }
        span{
            font-size: 0.136rem;
            line-height: 0.204rem;
            color: #999999;
        }
    }
}
.ApplyBtn{
    height: 0.4rem;
    margin-bottom: 0.333rem;
}
</style>