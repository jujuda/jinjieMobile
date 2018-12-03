<template>
    <div>
       <headers></headers>
        <!-- 轮播 -->
        <div id="banner">
            <img src="../assets/images/customer_service_banner_move@2x.png"/>
            <div class="join">
                <h2>电商客服外包</h2>
                <div>进阶用心，让服务更有温度</div>
            </div>
        </div>
        <!-- 互动营销 -->
        <div id="marketing">
            <div class="head">
                <h3>电商客服外包</h3>
                <div class="line"></div>
                <p class="article">
                    进阶电商客服团队是由一批专业客服人才组成，有着完善的管理、考核和培训体系，目前已为众多品牌提供了客服服务，并一致得到好评。进阶客服团队在整个服务的过程中坚持客户第一的原则，深入挖掘客服本身价值，从而提高客服质量。
                </p>
            </div>
            <div class="idea">
                <h2>客服服务理念</h2>
                <div class="line"></div>
                <div>
                    <img src="../assets/images/customer_service_number_one@2x.png" class="first"/>
                    <img src="../assets/images/customer_service_patient@2x.png"/>
                    <img src="../assets/images/customer_service_seek_truth@2x.png" class="first"/>
                    <img src="../assets/images/customer_service_respect@2x.png"/>
                </div>
            </div>
            <div class="aboutPic">
                <div class="about">
                    <h2>进阶客服类型</h2>
                    <div class="line"></div>
                    <div>
                        <img src="../assets/images/customer_service_pre_sale@2x.png"/>
                        <div class="desc">
                            <h4>售前客服</h4>
                            <p>在商品销售前为客户提供服务，引导客户购买并促成交易。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/customer_service_after_sale@2x.png"/>
                        <div class="desc">
                            <h4>售后客服</h4>
                            <p>在商品销售完成后为客户提供服务，减少纠纷，优化服务。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/customer_service_temporary@2x.png"/>
                        <div class="desc">
                            <h4>临时客服</h4>
                            <p>承接各电商平台活动应急时，所需要的客服服务。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/customer_service_one_or_one@2x.png"/>
                        <div class="desc">
                            <h4>一对一客服</h4>
                            <p>客户专属客服，有针对性的只服务于某一客户的客服。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/customer_service_promotion@2x.png"/>
                        <div class="desc">
                            <h4>大促客服</h4>
                            <p>在双十一或其它一些大型促销活动时，所需要的客服。</p>
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
            width: 230px;
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
    .idea{
        width: 100%;
        box-sizing: border-box;
        margin-top: 80px;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;  
        padding: 0 74px;
        font-size: 0;
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
             width: 205px;
             height: 2px;
             background: -webkit-linear-gradient(left, #fff, #000,#fff); /* Safari 5.1 - 6.0 */
             background: -o-linear-gradient(right, #fff, #000,#fff); /* Opera 11.1 - 12.0 */
             background: -moz-linear-gradient(right, #fff, #000,#fff); /* Firefox 3.6 - 15 */
             background: linear-gradient(to right,  #fff, #000,#fff); /* 标准的语法 */
             margin-top: 10px;
             margin-bottom: 80px;
            }
        img{
            width: 300px;
            height: 300px;
            margin-bottom: 2px;
        }
        img.first{
            margin-right: 2px;
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
                width: 205px;
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
        padding-bottom: 560px;
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
            width: 245px;
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
  
</style>