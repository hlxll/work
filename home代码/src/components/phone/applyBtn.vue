<template>
    <div class="applYBtn">
        <el-row type="flex" align-item="center">
            <el-col :span="5">
                    <el-image
                        style="width: 100%;"
                        :src="'/static/img/phone/'+ApplyData.img">
                    </el-image>
            </el-col>
            <el-col :span="14">
                <div class="centerText">
                    <p>{{ApplyData.title}}</p>
                    <li v-for="(item, index) in ApplyData.ArrTitle" :key='index'>
                        <div></div><span>{{item}}</span>
                    </li>
                </div>
            </el-col>
            <el-col :span="5">
                <el-image
                    @click="OpenApply"
                    class="ApplyBtn"
                    style="width: 100%;"
                    src="/static/img/phone/疫情h5_06.png">
                </el-image>
            </el-col>
        </el-row>
        <el-dialog
            class="dialogMe"
            :append-to-body="true"
            :show-close="false"
            :visible.sync="centerDialogVisible"
            width="70%"
            center>
            <i class="el-icon-close delModal" @click="centerDialogVisible = false"></i>
            <p class="dialogTitle">免费申请</p>
            <el-input v-model="diaName" @blur="nameApply" placeholder="请输入申请者姓名" class="dialogInput"></el-input>
            <p class="massageText" v-show="ShowName">姓名不能为空</p>
            <el-input v-model="diaTele" @blur="teleApply" placeholder="请输入联系电话" class="dialogInput"></el-input>
            <p class="massagetel" v-show="ShowTele">手机号码不正确，请重写</p>
            <el-button type="primary" @click="SubmitApply" class="confirmDialog">确 定</el-button>
            
        </el-dialog>
    </div>
</template>
<script>
export default{
    props: {
        ApplyData: Object
    },
    data(){
        return {
            centerDialogVisible: false,
            diaName: '',
            diaTele: '',
            ShowName: false,
            ShowTele: false
        }
    },
    mounted:function() {
    },
    methods: {
        OpenApply(){
            this.centerDialogVisible = true
            this.diaName = ''
            this.diaTele = ''
            this.ShowName = false
            this.ShowTele = false
        },
        SubmitApply(){
            if(!this.diaName){
                this.ShowName = true
                return true;
            }else{
                this.ShowName = false
            }
            if(!(/^1[3456789]\d{9}$/.test(this.diaTele))){ 
                this.ShowTele = true
                return true;
            }else{
                this.ShowTele = false
            }
            this.centerDialogVisible = false
        },
        nameApply(){
            if(!this.diaName){
                this.ShowName = true
            }else{
                this.ShowName = false
            }
        },
        teleApply(){
            if(!(/^1[0123456789]\d{9}$/.test(this.diaTele))){ 
                this.ShowTele = true
            }else{
                this.ShowTele = false
            }
        },
        openAlter() {
            const h = this.$createElement;
            this.$msgbox({
            title: '免费申请',
            center: true,
            message: h('div', {style: ''}, [
                h('input',{class: 'MsgInput'}),
                h('input',{class: 'MsgInput'}),
                h('el-button',{class: 'MsgButton'},[
                    h('span','确定',{onclick: 'confirmBtn'},{class: 'MsgButtonText'})
                ])
            ]),
            customClass: 'scrm-confirm-modal',
            showConfirmButton: true,
            confirmButtonClass: 'confirmClass',
            beforeClose: (action, instance, done) => {
                console.log(action)
                done();
                instance.confirmButtonLoading = false;
            }
            }).then(action => {
            console.log(action)
            });
        }
    }
}
</script>
<style lang="scss">
.massageText{
    position: absolute;
    top: 90px;
    margin: 0;
    color: red;
}
.massagetel{
    position: absolute;
    top: 150px;
    margin: 0;
    color: red;
}
.delModal{
    position:absolute;
    right: 4px;
    top: 4px;
    font-size: 20px;
}
.dialogMe{
    color: red;
    padding-top: 0 !important;
    .el-dialog--center{
        color: red;
        .el-dialog__body{
            padding-top: 0;
        }
    }
    div{
        div{
            padding-top: 0;
        }
    }
}
.dialogMe>.el-dialog--center> .el-dialog__body{
    padding-top: 0;
}
.dialogTitle{
    text-align: center;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #333333;
}
.dialogInput{
    // height: 50px;
    margin-bottom: 20px;
}
.confirmDialog{
    width: 100%;
    background-image: linear-gradient(122deg, 
		rgba(83, 185, 241, 0.62) 0%, 
		rgba(59, 136, 229, 0.62) 47%, 
		rgba(35, 87, 216, 0.62) 100%), 
	linear-gradient(
		#22f2ff, 
		#22f2ff);
	background-blend-mode: normal, 
		normal;
}
.confirmClass{
    width: 80%;
    height: 100px;
}
.MsgButton{
    width: 80%;
    border-radius: 5px;
    background-image: linear-gradient(122deg, 
		rgba(83, 185, 241, 0.62) 0%, 
		rgba(59, 136, 229, 0.62) 47%, 
		rgba(35, 87, 216, 0.62) 100%), 
	linear-gradient(
		#22f2ff, 
		#22f2ff);
	background-blend-mode: normal, 
		normal;
    span{
        span{
            color: #ffffff;
        }
    }
}
.MsgInput{
    height: 40px;
    width: 80%;
    border-radius: 3px;
    border: 1px solid #999999;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
}

@media only screen and (max-width: 370px){
    .applYBtn{
        border-bottom: 1px dashed #999999;
        margin-top: 0.259rem;
        // margin-left: 0.075rem;
        padding-bottom: 0.075rem;
        // height: 2.5rem;
        overflow: hidden;
    }
    .centerText{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.143rem;
        p{
            width: 100%;
            font-size: 0.204rem;
            line-height: 0.3rem;
            // height: 0.204rem;
            color: #333333;
            margin: 0;
            margin-bottom: 0.129rem;
            
        }
        li{
            list-style-type: none;
            display: flex;
            // height: 0.264rem;
            line-height: 0.219rem;
            min-width: 50%;
            max-width: 95%;
            div{
                margin: auto 0;
                background-color: #44d0f6;
                // display: inline-block;
                width: 0.04rem;
                height: 0.04rem;
                margin-right: 0.082rem;
                border-radius: 0.02rem;
            }
            span{
                // height: 0.264rem;
                font-size: 0.136rem;
                line-height: 0.364rem;
                color: #999999;
            }
        }
    }
}
@media only screen and (min-width: 370px){
    .applYBtn{
        border-bottom: 1px dashed #999999;
        margin-top: 0.259rem;
        // margin-left: 0.075rem;
        // height: 1.78rem;
        padding-bottom: 0.075rem;
    }
    .centerText{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.143rem;
        p{
            width: 100%;
            font-size: 0.204rem;
            line-height: 0.219rem;
            // height: 0.204rem;
            color: #333333;
            margin: 0;
            margin-bottom: 0.129rem;
            
        }
        li{
            list-style-type: none;
            display: flex;
            // height: 0.224rem;
            // line-height: 0.219rem;
            min-width: 50%;
            max-width: 95%;
            div{
                margin: auto 0;
                background-color: #44d0f6;
                // display: inline-block;
                width: 0.04rem;
                height: 0.04rem;
                margin-right: 0.082rem;
                border-radius: 0.02rem;
            }
            span{
                // height: 0.219rem;
                font-size: 0.136rem;
                line-height: 0.365rem;
                color: #999999;
            }
        }
    }
}
.ApplyBtn{
    height: 0.4rem;
    margin-bottom: 0.333rem;
    
}
</style>
<style>
    .add-dialog .el-dialog__body {
        background-color: red !important;
    }
</style>