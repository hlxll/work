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
        padding-left: 0.062rem;
        // height: 360px;
        // width: 72%;
        display: flex;
        background-color: #eff2fa;
        .el-row{
            width: 72%;
            height: 1.406rem;
            &>div{
                height: 100%;
            }
        }
        .numUnit{
            margin-left:0.094rem;
            background-color: #ffffff;
            // width: 24%;
            // height: 360px;
            .Allnum{
                // width: 277px;
                height: 0.563rem;
                border-bottom:1px solid #eeeeee;
                .AllnumOne{
                    // width: 148px;
                    color: #333333;
                    line-height: 0.277rem;
                    font-size: 0.16rem;
                    height: 0.16rem;
                    text-align:left;
                    margin-left: 0.219rem;
                    padding-top: 0.133rem;
                    padding-bottom: 0.059rem;
                }
                .AllnumTwo{
                    color: #333333;
                    opacity: 0.8;
                    line-height: 0.129rem;
                    font-size: 0.074rem;
                    height: 0.102rem;
                    text-align:left;
                    margin-left: 0.219rem;
                }
            }
            .Childunit{
                // width:300px;
                height:0.84rem;
                // margin-left: 9px;
                background-repeat:no-repeat;
                background-position:right bottom;
                background-size: 0.53rem 0.586rem;
                div{
                    padding-top: 0.094rem;
                    .ChildunitOne{
                        color: #666666;
                        line-height: 0.164rem;
                        height: 0.094rem;
                        // width: 73px;
                        text-align:left;
                        margin-left: 0.219rem;
                        margin-bottom:0.051rem;
                        font-size: 0.094rem;
                    }
                    .ChildunitTwo{
                        text-align:left;
                        margin-left: 0.219rem;
                        color: #999999;
                        // width: 95px;
                        height:0.102rem;
                        line-height: 0.129rem;
                        font-size: 0.074rem;
                    }
                }
            }
        }
        .unitOrprople{
            margin-left:0.078rem;
            width: 28%;
            height: 1.406rem;
            .unit{
                background-color: #ffffff;
                height: 0.664rem;
                margin-bottom:0.078rem;
                display: flex;
                img{
                    padding-top: 0.168rem;
                    width:0.328rem;
                    height: 0.328rem;
                    margin-left:0.105rem; 
                }
                &>div{
                    padding-top:0.215rem;
                    margin-left:0.156rem;
                    // height: 84px;
                    display:flex;
                    flex-direction:column;
                    // justify-content:center;
                    .unitOne{
                        color: #333333;
                        height: 0.133rem;
                        line-height: 0.133rem;
                        width: 0.48rem;
                        font-size: 0.133rem;
                    }
                    .unitTwo{
                        color: #666666;
                        height: 0.109rem;
                        line-height: 0.109rem;
                        font-size: 0.078rem;
                        margin-top: 0.023rem;
                    }
                }
            }
            .People{
                background-color: #ffffff;
                height: 0.664rem;
                margin-bottom:0.078rem;
                display: flex;
                img{
                    padding-top: 0.168rem;
                    width:0.328rem;
                    height: 0.328rem;
                    margin-left:0.105rem;  
                }
                div{
                    padding-top:0.215rem;
                    margin-left:0.156rem;
                    // height: 84px;
                    display:flex;
                    flex-direction:column;
                    .peopleOne{
                        color: #333333;
                        height: 0.133rem;
                        line-height: 0.133rem;
                        width: 0.48rem;
                        font-size: 0.133rem;
                    }
                    .peopleTwo{
                        color: #666666;
                        height: 0.109rem;
                        line-height: 0.109rem;
                        font-size: 0.078rem;
                        margin-top: 0.023rem;
                    }
                }
            }
        }
    }
    .Alltable{
        width: 100%;
        // margin-left: 0.156rem;
        margin-top: 0.078rem;
        height: 1.523rem;
        .AlltableOne{
            display:flex;
            height:1.523rem;
            .echarts{
                width: 52%;
                background-color: #ffffff;
                margin-left: 0.156rem;
            }
            .moneyecharts{
                margin-left: 0.078rem;
                width: 46%;
                background-color: #ffffff;
            }
        }
    }
    .backlog{
        width: 23.4%;
        height: 3.008rem;
        margin-left: 0.082rem;
        background-color: #ffffff;
    }
    .BottomThree{
        width: 100%;
        // overflow: hidden;
    }
</style>