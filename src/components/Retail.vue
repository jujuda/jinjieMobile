<template>
    <div>
    <headers></headers>
        <!-- 轮播 -->
        <div id="banner">
            <img src="../assets/images/new_retail_banner_move@2x.png"/>
            <div class="join">
                <h2>新零售智慧门店</h2>
                <div>赋能品牌门店，重构消费连接</div>
            </div>
        </div>
        <!-- 互动营销 -->
        <div id="marketing">
            <div class="head">
                <h3>新零售智慧门店的优势</h3>
                <div class="line"></div>
                <p class="article">
                   线上流量红利日益缩减，传统零售净利逐渐下滑。面对线上线下都无力增加利益的困境，线上线下同时进行，联动，重新组织零售场景是必经之路。
                </p>
            </div>
            <div class="aboutPic">
                <div class="about">
                    <h2>数字化门店不得不说的全景规划</h2>
                    <div class="line"></div>
                    <div>
                        <img src="../assets/images/new_retail_window@2x.png"/>
                        <div class="desc">
                            <h4>橱窗互动+可移动性广告位互动</h4>
                            <p>互动体验吸引用户定制化流程，传递品牌理念。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/new_retail_nakajima_shunt@2x.png"/>
                        <div class="desc">
                            <h4>磁石点/中岛体验+店门口分流</h4>
                            <p>利用游戏互动增强用户体验，定制化分流手段指引用户逛店。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/new_retai_counter@2x.png"/>
                        <div class="desc">
                            <h4>壁面/柜台货架互动体验</h4>
                            <p>店内商品智能化呈现，节省展示空间，精准推荐高效购物权益，引导帮助销售转化。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/new_retai_pay@2x.png"/>
                        <div class="desc">
                            <h4>智能化、自助化收银台便捷付款</h4>
                            <p>智能化支付方式提供便捷支付体验，更短的时间，更安全的方式，利用3D视觉技术更加直观，更加真实的表现商品。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/new_retai_date@2x.png"/>
                        <div class="desc">
                            <h4>门店全域转化数据可视化报表</h4>
                            <p>线下人货场全链路触点数据统计，追溯线下触点引导全域延伸转化。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 合作伙伴 -->
        <div id="partner">
            <div class="head">
                <h3>进阶为伙伴提供服务</h3>
                <div class="line"></div>
                <div class="main">
                    <div class="pic">
                        <img src="../assets/images/marketing_morefun@2x.png"/>
                        <img src="../assets/images/marketing_apple@2x.png"/>
                    </div>
                    <div class="pic">
                        <img src="../assets/images/marketing_hotwind@2x.png"/>
                        <img src="../assets/images/marketing_fairwhale@2x.png"/>
                    </div>
                    <div class="pic">
                        <img src="../assets/images/marketing_smith@2x.png"/>
                        <img src="../assets/images/marketing_fotile@2x.png"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
      <footers></footers>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import { Navbar, TabItem } from 'mint-ui'
import headers from './headers';
import footers from './footers';
    export default {
        name:'Market',
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
        },

        mounted(){
             window.addEventListener('scroll', this.handleScroll);
        },
        
        components:{
             headers,
             footers
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
    }
}
#app .mu-popover{
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
    padding-top: 283px;
    line-height: 100px;
    color:#fff;
    z-index: 9999;
    li>a{
        font-size: 21px;/*px*/
        .mu-item-title{
            color: #fff;
            }
        }
    }
#banner{
    width: 100%;
    height: 563px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    .join{
        position: absolute;
        top:293px;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        h2{
            height: 40px;
            width:750px;
            text-align: center;
            color: #fff;
            font-size: 20px;/*px*/
            font-family:"microsoft yahei";
            margin-bottom: 20px;
            font-weight: bold;
        }
        div{
            color: #fff;
            text-align: center;
            line-height: 40px;
            width: 100%;
            font-size: 10px;/*px*/
            font-family:"microsoft yahei";
        }
    }
}
#marketing{
    width: 100%;
    .head{
        width: 100%;
        padding:80px 0;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;  
        background: #F2F9FF;                                            
        h3{
            width: 100%;
            font-size: 17px;/*px*/
            color: #333;
            text-align: center;
            font-weight:bold;
            letter-spacing:2px;
        }
        .line{
            justify-content: center;
            width: 400px;
            height: 2px;
            background: -webkit-linear-gradient(left, #fff, #000,#fff); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #fff, #000,#fff); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #fff, #000,#fff); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right,  #fff, #000,#fff); /* 标准的语法 */
            margin-top: 10px;
            margin-bottom: 13px;
        }
        p{
            width: 100%;
            padding-left:24px;
            padding-right:24px;
            line-height: 40px;
            letter-spacing:2px;
            color: #666;
            font-size: 10px;/*px*/
        }
    }
    .aboutPic{
        width:100%;
        margin-top: 80px;
        .about{
            width: 100%;
            display: flex;
            flex-wrap:wrap;
            justify-content: center;  
            img{
                width: 600px;
                height: 600px;
                padding: 0 75px;
            }
            h2{
                font-size: 15px;/*px*/
                color: #333;
                width: 100%;
                text-align: center;
                font-weight: bold;
                letter-spacing:2px;
            }
            .line{
                justify-content: center;
                width: 450px;
                height: 2px;
                background: -webkit-linear-gradient(left, #fff, #000,#fff); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, #fff, #000,#fff); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, #fff, #000,#fff); /* Firefox 3.6 - 15 */
                background: linear-gradient(to right,  #fff, #000,#fff); /* 标准的语法 */
                margin-top: 10px;
                margin-bottom: 40px;
            }
            .desc{
                padding: 0 90px;
                h4{
                    font-size: 15px;/*px*/
                    color: #333;
                    line-height: 40px;
                    font-weight: bold;
                    letter-spacing:2px;
                }
                p{
                    font-size: 12px;/*px*/
                    color: #333;
                    line-height: 40px;
                    letter-spacing:2px;
                    margin-top: 10px;
                    margin-bottom: 80px;
            }
            }
            
        }
    }
}
#partner{
        width: 100%;
        .head{
        width: 100%;
        height: 225px;
        margin-top: 80px;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;                                              
        h3{
            width: 100%;
            font-size: 17px;/*px*/
            color: #333;
            text-align: center;
            font-weight:bold;
        }
        .line{
            justify-content: center;
            width: 285px;
            height: 2px;
            background: -webkit-linear-gradient(left, #fff, #000,#fff); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #fff, #000,#fff); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #fff, #000,#fff); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right,  #fff, #000,#fff); /* 标准的语法 */
            margin-top: 10px;
            margin-bottom: 13px;
        }
    }
        .main{
            width: 100%;
            margin-top: 44px;
            .pic{
                width:100%;
                flex-wrap: wrap;
                box-sizing: border-box;
                display: flex;
                padding-left: 76px;
                img{
                width:290px;
                height:216px; 
                border:2px solid #666;
                }
            } 
        }
    }
    #footer{
        height: 444px;
        margin-top: 700px;
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
                        font-size:10px;/*px*/
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
    }
</style>