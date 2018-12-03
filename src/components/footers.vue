<template>
     <div id="footer">
            <div class="bg">
                <img src="../assets/images/marketing_background_image@2x.png"/>
                <div class="info">
                    <div class="tel">
                        <span>电话:0551-65260260</span>
                    </div>
                    <div class="mainbox">
                        <span>邮箱:service@ahjinjie.cn</span>
                    </div>
                    <div class="address">
                        <span>地址:安徽省合肥市经开区中环城A座1623室</span>
                    </div>
                    <div class="nav">
                        <ul>
                            <li @click='linktoIndex'>首页</li>
                            <li class="line"></li>
                            <li @click='linktoAbout'>关于进阶</li>
                            <li class="line"></li>
                            <li class="service-foot" @click="isbl">
                                <div class="solutions">
                                    <div class="solutions-box1" >
                                        解决方案
                                    </div>
                                   
                                    </div>
                                
                            </li>
                             
                                
                                    
                            <li class="line"></li>
                            <li  @click='linktoCaseShow'>案例</li>
                            <li class="line"></li>
                            <li @click='linktoJoinUs'>加入进阶</li>
                            <li class="line"></li>
                            <li @click='linktoContactUs'>联系进阶</li>
                        </ul>
                    </div>
                     <div class="solutions-box" v-show="bl">
                                        <div  @click='linktoMarket'>电商互动营销</div>
                                        <div @click="linktoRetail">新零售解决方案</div>
                                        <div @click="linktoSoftware">软件服务</div>
                                        <div  @click="linktoService">客服托管</div>
                                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
               bl:false
        }
       
    },
    methods:{
         linktoAbout(){
				this.$router.push('/aboutUs')
			},
			linktoCaseShow(){
				this.$router.push('/caseShow')
			},
			linktoContactUs(){
				this.$router.push('/contactUs')
			},
			linktoJoinUs(){
				this.$router.push('/joinUs')
			},
			linktoMarket(){
				this.$router.push('/Market')
			},
			linktoRetail(){
				this.$router.push('/Retail')
			},
			linktoService(){
				this.$router.push('/Service')
			},
			linktoSoftware(){
				this.$router.push('/Software')
			},
			linktoIndex(){
				this.$router.push('/index')
            },
            
         isbl(){
             this.bl=!this.bl
         }
    }
}
</script>

<style scoped lang="less">
 #footer{
        height: 444px;
        margin-top: 80px;
        font-size: 10px;
        .bg{
            position: relative;
            img{
                width: 100%;
                height: 444px;
            }
            .info{
                width: 100%;
                position: absolute;
                top: 100px;
                left: 0;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                div{
                    width: 100%;
                     text-align: center;
                    span{
                        color: #fff;
                        font-size:12px;/*px*/
                        line-height: 40px;
                       
                    }
                }
                .nav{
                    ul{
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                        
                        li{
                            color: #fff;
                            font-size: 10px;/*px*/
                            margin-right: 12px;
                            
                        }
                        
                        .line{
                            width: 2px;
                            height: 20px;
                            background: #fff;
                            margin-top: 4px;
                           
                        }
                         
                    }
                    
                 
                }
                 
            }
        }
         .solutions-box{
                        line-height: 33px;
                        color: #ffffff;
                        position: absolute;
                       top: 170px;
                       right: 60px;
                       

                    }
    }
</style>
