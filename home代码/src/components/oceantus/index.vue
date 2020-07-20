<template>
    <div style="background-color: #041223;padding: 100px 0;">
        <div class="oceanTitle">
            <p>
                Oceantus（海莲花）历史事件
            </p>
        </div>
        <div style="width: 80%;height: 0.96rem;overflow: hidden;margin: 0 auto;margin-top: 0.14rem;">
            <div style="width: 100%;" :style="{transform}" ref="AllMedium">
                <div class="medium" v-for="(item,index) in ListData" :key="index">
                    <p style="color: #dff5fd;margin-right: 5px;text-aligns: center;">{{item.time}}</p>
                    <div class="jinduZero">
                        <div class="yuan"></div>
                        <div class="xian" :ref="index"></div>
                    </div>
                    <p style="color: #1a8ba9;margin-left: 5px;text-aligns: left;">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                ListData: [
                    {
                        time: '2019.02',
                        name: '勒索病毒wannary1'
                    },
                    {
                        time: '2019.03',
                        name: '勒索病毒w席卷全球2'
                    },
                    {
                        time: '2019.02',
                        name: '勒wannary席卷全球3'
                    },
                    {
                        time: '2019.02',
                        name: '勒索病全球4'
                    },
                    {
                        time: '2019.02',
                        name: 'nary席卷全球5'
                    },
                    {
                        time: '2019.02',
                        name: '勒索病毒wannary1'
                    },
                    {
                        time: '2019.02',
                        name: '勒索病毒w席卷全球2'
                    },
                ],
                times: 0,
                transform: '',
                //每一项高度，也是滚动的距离
                itemHeight: '0.32',
                transY: ''
            }
        },
        mounted: function(){
            this.next()
        },
        created() {
            this.setIntervalMedium()
        },
        methods: {
            setIntervalMedium(){
                setInterval(()=>{
                    this.next();
                },2000)
            },
            async next(){
                if(this.times<5){
                    const refData = this.$refs.AllMedium.childNodes[this.times].childNodes
                    // 第一个字体加颜色
                    refData[0].classList.remove('changeColor')
                    refData[4].classList.remove('changeColor')
                    refData[2].classList.remove('changeBackColor')
                }
                if(this.times<5){
                    const LineStyle = this.$refs.AllMedium.childNodes[this.times + 2].childNodes
                    LineStyle[2].classList.remove('changeLine')
                }
                this.times++;
                if (this.times === 5) {
                    this.times = 0;
                    this.goTo(0);
                }else{
                    await this.goTo(this.times * this.itemHeight);
                }
                // 滚到最后一个时,重置并直接回到原位
                
            },
            // 直达
            async goTo(distance) {
                clearInterval(this.transY)
                
                if(1<=this.times<5){
                    let distanceData = 0.32*(this.times - 1)
                    this.transY = setInterval(()=>{
                        distanceData +=  0.01
                        this.transform = `translateY(-${distanceData}rem)`;
                        if(distanceData >= distance){
                            clearInterval(this.transY)
                        }
                },1)
                }else{
                    let distanceData = -0.32
                    this.transY = setInterval(()=>{
                        distanceData +=  0.01
                        this.transform = `translateY(-${distanceData}rem)`;
                        if(distanceData >= 0){
                            clearInterval(this.transY)
                        }
                },1)
                }
                
                // await 
                if(this.times<5){
                    const refData = this.$refs.AllMedium.childNodes[this.times].childNodes
                    refData[0].classList.add('changeColor')
                    refData[4].classList.add('changeColor')
                    refData[2].classList.add('changeBackColor')
                }
                if(this.times<5){
                    
                    const LineStyle = this.$refs.AllMedium.childNodes[this.times + 2].childNodes
                    LineStyle[2].classList.add('changeLine')
                    console.log(LineStyle)
                }
            },
        }
    }
</script>
<style lang="scss">
.changeColor{
    color: #ff9019 !important;
}
.changeBackColor{
    .yuan{
        background-color: #ff9019 !important;
    }
}
.changeLine{
    .xian{
        opacity: 0;
    }
}
.medium{
    // line-height: 200px;
    margin: 0;
    display: flex;
    align-items: center;
    p{
        font-size: 14px;
        height: 14px;
        margin: 0;
        margin-bottom: auto;
        padding-bottom: 7px;
    }
    .jinduZero{
        width: 0.06rem;
        height: 0.32rem;
        .yuan{
            width: 0.05rem;
            height: 0.05rem;
            border-radius: 0.025rem;
            background-color: #1a8ba9;
            margin: 0 auto;
            margin-top: 0.01rem;
        }
        .xian{
            width: 2px;
            height: 0.26rem;
            background-color: #1a8ba9;
            margin: 0 auto;
            // margin-top: 7px;
        }
    }
}
.oceanTitle{
    width: 80%;
    background-image: url('/static/img/apt-_06.png');
    background-size: 100% 1rem;
    margin: 0 auto;
    p{
        margin: 0;
        font-size: 0.1rem;
        padding-left: 0.16rem;
        height: 0.146rem;
        line-height: 0.146rem;
        color: #26aff6;
    }
}
</style>