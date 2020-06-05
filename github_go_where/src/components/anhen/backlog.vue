<template>
    <div>
        <div class="backlogTitle">
            <p>待办事项</p>
            <el-button type="text">查看更多></el-button>
        </div>
        <div class="examine" v-for="(item, index) in 4" :key="index">
            <img src="/static/img/Image/路径234.png" />
            <div>
                <p class="examineTitle">新疆少数名族公共文化网络出版平台</p>
                <p class="examineMain">事件：系统资产申报-系统资产复审</p>
                <div class="examineButton">
                    <span>2020-05-11</span>
                    <el-button round>审批</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .backlogTitle{
        display: flex;
        margin: 0 20px;
        p{
            margin-right: auto;
            line-height: 47px;
            color: #333333;
        }
        button{
            span{
                line-height: 47px;
                color: #66afff;
            }
        }
    }
    .examine{
        margin: 0 20px;
        margin-top: 30px;
        display: flex;
        border-bottom: 2px solid #eeeeee;
        padding-bottom: 21px;
        img{
            width: 24px;
            height: 24px;
            margin-right: 28px;
        }
        div{
            .examineTitle{
                font-size: 20px;
                line-height: 28px;
                color: #333333;
            }
            .examineMain{
                font-size: 20px;
                letter-spacing: 0px;
                color: #66afff;
            }
            .examineButton{
                span{
                    font-size: 18px;
                    line-height: 47px;
                    color: #999999;
                }
                .el-button{
                    padding: 0;
                    margin-left: 110px;
                    background-color: #66afff;
                    color: #ffffff;
                    height: 34px;
                    width: 60px;
                    font-size: 18px;
                    text-align: center;
                }
            }
        }
    }
</style>