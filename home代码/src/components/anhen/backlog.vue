<template>
    <div>
        <div class="backlogTitle">
            <p>待办事项</p>
            <el-button type="text">查看更多></el-button>
        </div>
        <div class="examine" v-for="(item, index) in 5" :key="index">
            <img src="/static/img/Image/路径234.png" />
            <div>
                <p class="examineTitle">新疆少数名族公共文化网络出版平台</p>
                <p class="examineMain">事件：系统资产申报-系统资产复审</p>
                <div class="examineButton">
                    <p>2020-05-11</p>
                    <el-button round>审批</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 1920px){
    body,html{
        font-size: 10px
    }
}
@media screen and (max-width: 1200px){
    body,html{
        font-size: 7px
    }
}
    .backlogTitle{
        display: flex;
        align-items: center;
        margin: 0 0.109rem;
        height: 0.117rem;
        margin-top: 0.055rem;
        margin-bottom: 0.066rem;
        p{
            margin-right: auto;
            line-height: 0.117rem;
            color: #333333;
            font-size: 0.086rem;
        }
        button{
            span{
                line-height: 0.184rem;
                color: #66afff;
            }
        }
    }
    .examine{
        margin: 0 0.055rem;
        margin-top: 0.066rem;
        height: 0.48rem;
        display: flex;
        border-bottom: 2px solid #eeeeee;
        // padding-bottom: 21px;
        img{
            width: 0.094rem;
            height: 0.094rem;
            margin-right: 0.109rem;
            margin-left: 0.054rem;
        }
        div{
            .examineTitle{
                font-size: 0.078rem;
                line-height: 0.109rem;
                color: #333333;
            }
            .examineMain{
                font-size: 0.078rem;
                letter-spacing: 0px;
                color: #66afff;
            }
            .examineButton{
                display: flex;
                align-items: center;
                margin-top: 0.039rem;
                p{
                    font-size: 0.07rem;
                    line-height: 0.184rem;
                    color: #999999;
                    margin-right: auto;
                }
                .el-button{
                    padding: 0;
                    // margin-left: ;
                    // margin-top: 0.039rem;
                    background-color: #66afff;
                    color: #ffffff;
                    height: 0.133rem;
                    width: 0.234rem;
                    font-size: 0.07rem;
                    text-align: center;
                }
            }
        }
    }
</style>