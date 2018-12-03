<template>
    <div>
      <headers></headers>
        <!-- 轮播 -->
        <div id="banner">
            <img src="../assets/images/marketing_banner_move@2x.png"/>
            <div class="join">
                <h2>电商互动营销</h2>
                <div>给品牌带来前所未见的体验与延展</div>
            </div>
        </div>
        <!-- 互动营销 -->
        <div id="marketing">
            <div class="head">
                <h3>为什么要做互动营销</h3>
                <div class="line"></div>
                <p class="article">
                    现今，互联网技术在生活中的应用尤为广泛，互动营销成为我们必不可少的一个重要组成部分，也是无线时代的一个主流趋势。消费者浏览载体也逐渐多样化，大众视野也逐渐从PC端转向各种移动设备，手机和ipad最为常见。时代在变化，电商营销手段也与时俱进，变得更加多样化，从以前单纯的平面视觉展示和简单的购物流程演变到如今更多的平面互动流程，通过进一步的与消费者的互动来打动消费者，互动本身的趣味性和易用性更利于品牌的传播，以此来加深消费者对产品或品牌的印象。进阶凭借着在电商行业多年的经验积累，在与各电商平台的合作中积累了丰富的电商互动经验，已为众多类目TOP商家成功提供互动营销的解决方案。
                </p>
            </div>
            <div class="aboutPic">
                <div class="about">
                    <h2>互动营销玩起来</h2>
                    <div class="line"></div>
                    <div>
                        <img src="../assets/images/marketing_scenes@2x.png"/>
                        <div class="desc">
                            <h4>场景营销</h4>
                            <p>利用真实场景让用户有代入感以及购物的真实感受,刺激用户对商品选择的兴趣和消费。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/marketing_recommend@2x.png"/>
                        <div class="desc">
                            <h4>智能推荐</h4>
                            <p>通过用户的购物记录快速推荐相关产品，帮助用户选择合适自己的产品，增强用户的体验感。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/marketing_html5@2x.png"/>
                        <div class="desc">
                            <h4>HTML5</h4>
                            <p>让店铺的个性张扬，活力四射，外观上更有吸引力。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/marketing_ar@2x.png"/>
                        <div class="desc">
                            <h4>AR</h4>
                            <p>利用3D视觉技术，更加直观更加真实的表现商品。</p>
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
// 头部
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
            width: 350px;
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
                width: 265px;
                height: 2px;
                background: -webkit-linear-gradient(left, #fff, #000,#fff); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, #fff, #000,#fff); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, #fff, #000,#fff); /* Firefox 3.6 - 15 */
                background: linear-gradient(to right,  #fff, #000,#fff); /* 标准的语法 */
                margin-top: 10px;
                margin-bottom: 80px;
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