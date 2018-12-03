<template>
            <div id="head">
            <div class="logo">
                <img src="../assets/images/marketing_logo@2x.png"/>
            </div>
            <!-- 导航 -->
            <div id="nav">
                <div class="head-right" id="head-right">
					<div>
                        <div>
                            <div class="right-navlist-button" @click="ShowMain">
						        <div  class="menu">
						            <img src="../assets/images/marketing_menu@2x.png"/>
					            </div>
					        </div>
                        </div>
                        <div  id="menuMask" style="display:none;">
                            <div>
                                <div @click='linktoIndex' style="font-size:'20px'" class="listTitle">首页</div>
                            </div>
                            <div>
                                <div @click='linktoAbout' class="listTitle">关于进阶</div>
                            </div>
                            <div>
                                <div @click="showMenu" class="listTitle">
                                    解决方案
                                    <div id="menu-body" style="display:none;">
                                        <div class="first" @click='linktoMarket'>电商互动营销</div>
                                            <div @click="linktoRetail">新零售解决方案</div>
                                            <div @click="linktoSoftware">软件服务</div>
                                            <div class="last" @click="linktoService">客服托管</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div @click='linktoCaseShow' class="listTitle">案例</div>
                            </div>
                            <div>
                                <div @click='linktoJoinUs' class="listTitle">加入进阶</div>
                            </div>
                            <div>
                                <div @click='linktoContactUs' class="listTitle">联系进阶</div>
                            </div>
                            <div class="cancle" @click="cancleMenu">
                                <img src="../assets/images/home_icon_selected.png"/>
                            </div>
                        </div>
					</div>
				</div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
             isShow:'false'
        }
    },
      methods:{
            showMenu(){
                $("#menu-body").slideToggle();
            },
            ShowMain(){
                $('#menuMask').css({
                    display:"block"
                });
            },
            cancleMenu(){
                $('#menuMask').slideToggle();
            },
            handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 280){
                		$("#head").css({
                			background:"#333",
                		})       
                	}else{
                		$("#head").css({
                			background:"rgba(0,0,0,.6)",
                		})
	                }
            },
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
			}
        },
}
</script>
<style scoped lang="less">

#menu-body {
      div{
          font-size: 14px;/*px*/
          color: #B3B3B3;
          line-height: 50px; 
      }
      div.first{
          margin-top: 20px;
      }
      div.last{
          margin-bottom: 20px;
      }
}
.icon-cancle{
    display: none;
}
#head{
    width: 100%;
    height: 100px!important;
    position: fixed;
    left: 0;
    top:0;
    height: 0;
    background: rgba(0,0,0,.6);
    z-index: 9998;
    .logo{
        width: 197px;
        height: 54px;
        margin-left: 24px;
        margin-top: 24px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    #head-right{
        width: 40px;
        position: absolute;
        right: 24px;
        top: 38px;
    }
    .right-navlist-button{ 
        width: 100%;
        height: 100%;
        border:0;
        img{
            width: 40px;
            height: 25px;
            margin-bottom: 38px;
        } 
        .listTitle{
            font-size: 20px;
        }  
    }
}
#app .popover{
    position:static;
    max-width: 100%;
}
.cancle{
        width: 52px;
        height: 52px;
        margin-top: 80px;
        position: absolute;
        left: 50%;
        margin-left: -26px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    #menuMask>div>div{
        font-size: 21px;/*px*/
    }
#menuMask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 100px;
    line-height: 100px;
    color:#fff;
    z-index: 9999;
    
    li>a{
        font-size: 21px;/*px*/
        .item{
            color: #fff;
            }
        }
    }
    
</style>
