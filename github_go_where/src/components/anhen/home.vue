<template>
    <div class="homeMain">
        <div style="width: 72%;">
            <div class="numShow">
                <el-row>
                    <el-col :span="8" v-for="(item,index) in homeNumAll" :key="index">
                        <div class="numUnit">
                    <div class="Allnum">
                        <p class="AllnumOne">{{item.allNum}}</p>
                        <p class="AllnumTwo">{{item.name}}总数</p>
                    </div>
                    <div class="Childunit" :style="'background-image:url(/static/img/Image/'+item.name+'.png'">
                        <div>
                        <p class="ChildunitOne">{{item.problemNum}}</p>
                        <p class="ChildunitTwo">问题{{item.name}}</p>
                        </div>
                        <div>
                        <p class="ChildunitOne" style="margin-top: 10px;">{{item.warmNum}}</p>
                        <p class="ChildunitTwo">影响单位数</p>
                        </div>
                    </div>
                    </div>
                    </el-col>
                </el-row>
                <div class="unitOrprople">
                    <div class="unit">
                        <img src="/static/img/Image/danwei.png"/>
                        <div>
                            <p class="unitOne">{{unitAllNum}}</p>
                            <p class="unitTwo">单位总数</p>
                        </div>
                    </div>
                    <div class="People">
                        <img src="/static/img/Image/people.png"/>
                        <div>
                            <p class="peopleOne">{{peopleNum}}</p>
                            <p class="peopleTwo">安全人员数量</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Alltable">
                <div class="AlltableOne">
                    <moneyLoca :localname = "localname" :cascaJson="cascaJson"></moneyLoca>
                    <moneyFind></moneyFind>
                </div>
            </div>
        </div>
        <div class="backlog">
            <backlog></backlog>
        </div>
        <div style="width: 100%;">
            <assetgo></assetgo>
        </div>
        <div class="BottomThree">
            <ThreeTable></ThreeTable>
        </div>
    </div>
</template>
<script>
import moneyLoca from './moneyLoca.vue'
import backlog from './backlog.vue'
import moneyFind from './moneyFind.vue'
import assetgo from './assetgo.vue'
import ThreeTable from './ThreeTable.vue'
    export default{
        props: {
            cascaJson: Array
        },
        data(){
            return{
                localname: 'anhui',
                //获取到的动态数据
                Allincreas:[144,143,142],
                problemincreas:[244,243,242],
                unitincreas:[344,343,342],
                unitAllincreas:666,
                peopleincreas: 777,
                //渲染数据
                unitAllNum:1,
                peopleNum: 1,
                homeNumAll: [
                {
                    name:'系统',
                    allNum:1,
                    problemNum:1,
                    warmNum:1
                },
                {
                    name:'域名',
                    allNum:1,
                    problemNum:1,
                    warmNum:1
                },
                {
                    name:'IP',
                    allNum:1,
                    problemNum:1,
                    warmNum:1
                }
                ]
            }
        },
        methods: {
            //总数
            gethomeNumAll(){
                this.timerAll = setInterval(() => {
                    for(let i=0;i<this.homeNumAll.length;i++){
                        if(this.homeNumAll[i].allNum<this.Allincreas[i]){
                            this.homeNumAll[i].allNum = this.homeNumAll[i].allNum+1 
                        }
                    }
                    if(this.homeNumAll[0].allNum>=this.Allincreas[0]&&this.homeNumAll[1].allNum>=this.Allincreas[1]&&this.homeNumAll[2].allNum>=this.Allincreas[2]){
                        clearInterval(this.timerAll);
                    }
                }, 1);
            },
            //系统
            getproblemNum(){
                this.timerproblem = setInterval(() => {
                    for(let i=0;i<this.homeNumAll.length;i++){
                        if(this.homeNumAll[i].problemNum<this.problemincreas[i]){
                            this.homeNumAll[i].problemNum = this.homeNumAll[i].problemNum+1 
                        }
                    }
                    if(this.homeNumAll[0].problemNum>=this.problemincreas[0]&&this.homeNumAll[1].problemNum>=this.problemincreas[1]&&this.homeNumAll[2].problemNum>=this.problemincreas[2]){
                        clearInterval(this.timerproblem);
                    }
                }, 1);
            },
            //单位数
            getwarmNum(){
                this.timerunit = setInterval(() => {
                    for(let i=0;i<this.homeNumAll.length;i++){
                        if(this.homeNumAll[i].warmNum<this.unitincreas[i]){
                            this.homeNumAll[i].warmNum = this.homeNumAll[i].warmNum+1 
                        }
                    }
                    if(this.homeNumAll[0].warmNum>=this.unitincreas[0]&&this.homeNumAll[1].warmNum>=this.unitincreas[1]&&this.homeNumAll[2].warmNum>=this.unitincreas[2]){
                        clearInterval(this.timerunit);
                    }
                }, 1);
            },
            //单位总数
            getCode() {
                this.timer = setInterval(() => {
                if (this.unitAllNum < this.unitAllincreas) {
                    this.unitAllNum = this.unitAllNum+1;
                } else {
                    clearInterval(this.timer);
                }
                }, 1);
            },
            //人员数量
            getpeopleNum() {
                this.timerpeople = setInterval(() => {
                if (this.peopleNum < this.peopleincreas) {
                    this.peopleNum = this.peopleNum+1;
                } else {
                    clearInterval(this.timerpeople);
                }
                }, 1);
            }
        },
        mounted:function() {
	        this.getCode()
            this.getpeopleNum()
            this.gethomeNumAll()
            this.getproblemNum()
            this.getwarmNum()
        },
        components: {
            backlog,
            moneyLoca,
            moneyFind,
            assetgo,
            ThreeTable
        }
    }
</script>
<style scoped lang="scss">
    *{
        margin: 0;
    }
    @media screen and (min-width:1200px){
        body,html{
            font-size: 10px;
        }
    }
    @media screen and (max-width:1199px){
        body,html{
            font-size: 1px;
        }
    }
    .homeMain{
        display: flex;
        flex-wrap: wrap;
    }
    .numShow{
        padding-left: 18px;
        height: 360px;
        // width: 72%;
        display: flex;
        background-color: #eff2fa;
        .el-row{
            width: 72%;
        }
        .numUnit{
            margin-left:22px;
            background-color: #ffffff;
            // width: 24%;
            height: 360px;
            .Allnum{
                // width: 277px;
                height: 144px;
                margin-left: 9px;
                margin-right: 24px;
                border-bottom:1px solid #eeeeee;
                .AllnumOne{
                    // width: 148px;
                    color: #333333;
                    line-height: 41px;
                    font-size: 0.16rem;
                    height: 41px;
                    text-align:left;
                    margin-left: 32px;
                    padding-top: 34px;
                    padding-bottom: 15px;
                }
                .AllnumTwo{
                    color: #333333;
                    opacity: 0.8;
                    line-height: 26px;
                    font-size: 0.074rem;
                    height: 26px;
                    text-align:left;
                    margin-left: 32px;
                }
            }
            .Childunit{
                // width:300px;
                height:215px;
                margin-left: 9px;
                background-repeat:no-repeat;
                background-position:right bottom;
                div{
                    padding-top: 25px;
                    .ChildunitOne{
                        color: #666666;
                        line-height: 24px;
                        height: 24px;
                        // width: 73px;
                        text-align:left;
                        margin-left: 32px;
                        margin-bottom:13px;
                        font-size: 0.094rem;
                    }
                    .ChildunitTwo{
                        text-align:left;
                        margin-left: 32px;
                        color: #999999;
                        // width: 95px;
                        height:26px;
                        line-height: 26px;
                        font-size: 0.074rem;
                    }
                }
            }
        }
        .unitOrprople{
            margin-left:23px;
            width: 28%;
            height: 360px;
            .unit{
                background-color: #ffffff;
                height: 170px;
                margin-bottom:20px;
                display: flex;
                img{
                    padding-top: 43px;
                    width:84px;
                    height: 84px;
                    margin-left:27px; 
                }
                div{
                    padding-top:43px;
                    margin-left:40px;
                    height: 84px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    .unitOne{
                        color: #333333;
                        height: 34px;
                        line-height: 34px;
                        width: 123px;
                        font-size: 0.133rem;
                        padding-bottom: 5px;
                    }
                    .unitTwo{
                        color: #666666;
                        height: 28px;
                        line-height: 28px;
                        font-size: 0.078rem;
                    }
                }
            }
            .People{
                background-color: #ffffff;
                height: 170px;
                margin-bottom:20px;
                display: flex;
                img{
                    padding-top: 43px;
                    width:84px;
                    height: 84px;
                    margin-left:27px; 
                }
                div{
                    padding-top:43px;
                    margin-left:40px;
                    height: 84px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    .peopleOne{
                        color: #333333;
                        height: 34px;
                        line-height: 34px;
                        width: 123px;
                        font-size: 0.133rem;
                        padding-bottom: 5px;
                    }
                    .peopleTwo{
                        color: #666666;
                        height: 28px;
                        line-height: 28px;
                        font-size: 0.078rem;
                    }
                }
            }
        }
    }
    .Alltable{
        width: 100%;
        margin-left: 40px;
        margin-top: 20px;
        .AlltableOne{
            display:flex;
            .echarts{
                width: 45%;
                background-color: #ffffff;
            }
            .moneyecharts{
                margin-left: 0.078rem;
                width: 50%;
                background-color: #ffffff;
            }
        }
    }
    .backlog{
        width: 23.4%;
        height: 770px;
        margin-left: 20px;
        background-color: #ffffff;
    }
    .BottomThree{
        width: 100%
    }
</style>