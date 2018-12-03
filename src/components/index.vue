<template>
    <div>
  <headers></headers>
        <!-- 轮播 -->
        <div class="swiper-container" id="banner">
			<div class="swiper-wrapper">
			    <div class="swiper-slide">
					<img src="../assets/images/home_banner-1.png"/>
                    <p>我懂你的了不起</p>
                    <span>跟自己作对，才能把难题做对</span>

				</div>
			    <div class="swiper-slide">
                    <img src="../assets/images/home_banner-2.png"/>
                     <p>电商互动营销</p>
                     <span>给品牌带来前所未见的体验与延展</span>
                </div>
			    <div class="swiper-slide">
                   <img src="../assets/images/home_banner-3.png"/>
                    <p>新零售智慧门店</p>
                    <span>感受科技的力量，拉近你我的距离</span>
                </div>
			</div>
            <div class="swiper-pagination"></div>				   
		</div>
        <!-- 关于我们 -->
        <div id="aboutUs">
            <div class="head">
                <h3>关于我们</h3>
                <div class="line"></div>
                <p class="article">安徽进阶信息技术有限公司成立于2018年。是一家专注于利用云计算、移动计算、互联网、大数据、人工智能等高新技术以及增强现实、虚拟现实等可视化技术为企业提供创新互动服务的高科技公司。
                    目前公司主要有三大核心业务领域：<span>电商互动解决方案、新零售解决方案、软件技术服务。</span>
                </p>
            </div>
        </div>
        <!-- 解决方案 -->
        <div id="solution">
            <div class="head">
                <h3>解决方案</h3>
                <div class="line"></div>
                <div class="introduce">
                    <img src="../assets/images/about_marketing@2x.png"/>
                    <div class="des">
                        <h5>电商互动营销</h5>
                        <p>进阶通过生动有趣的感官互动来实现与消费者的沟通，从而达到消费者对品牌或者商品的深度了解，提升品牌与消费者之间的粘性。</p>
                    </div>
                </div>
                <div class="introduce">
                    <div class="des">
                        <h5>新零售解决方案</h5>
                        <p>整合线上线下数据，为线下零售店铺提供智能化的解决方案，优化线下零售用户体验，为线下零售提供更丰富更有价值的数据支持。</p>
                    </div>
                    <img src="../assets/images/about_new_retail@2x.png"/>
                </div>
                <div class="introduce">
                    <img src="../assets/images/about_software@2x.png"/>
                    <div class="des">
                        <h5>软件服务</h5>
                        <p>进阶通过生动有趣的感官互动来实现与消费者的沟通，从而达到消费者对品牌或者商品的深度了解，提升品牌与消费者之间的粘性。</p>
                    </div>
                </div>
                <div class="introduce">
                    <div class="des">
                        <h5>客服托管</h5>
                        <p>进阶通过生动有趣的感官互动来实现与消费者的沟通，从而达到消费者对品牌或者商品的深度了解，提升品牌与消费者之间的粘性。</p>
                    </div>
                    <img src="../assets/images/customer_service_temporary@2x.png"/>
                </div>
            </div>
        </div>
        <!-- 关于新零售 -->
        <div id="words">
            <div class="head">
                <h3>关于新零售，我们有话说</h3>
                <div class="line"></div>
                <div class="swiper-container words">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide">
				        	<img src="../assets/images/home_Intelligent _data.png"/>
                            <div class="word-mask"></div>
                            <div class="adver">
                                <h5>智能数据大屏</h5>
                                <p>数据全面打通数据银行ECRM，提供精准的会员属性、行为、商品热度等系统。为店铺提供决策依据以及数据行为分析能力。</p>
                            </div>
				        </div>
			            <div class="swiper-slide">
                            <img src="../assets/images/home_experience.png"/>
                            <div class="word-mask"></div>
                            <div class="adver">
                                <h5>云货架</h5>
                                <p>线上线下商品数据同步，智能上下架、价格库存自动更新、扫码快速加购、线上商品线下快速购买交易。</p>
                            </div>
                        </div>
			            <div class="swiper-slide">
                            <img src="../assets/images/home_cloud_shelf.png"/>
                            <div class="word-mask"></div>
                            <div class="adver">
                                <h5>互动智慧大屏</h5>
                                <p>通过人脸游戏、体感游戏、手势游戏、3D互动等实现人流聚集、快速引流到店内以及增加实体店铺的趣味性。</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <img src="../assets/images/home_interactive.png"/>
                            <div class="word-mask"></div>
                            <div class="adver">
                                <h5>体验智慧大屏</h5>
                                <p>试妆镜、试衣镜等增强线下体验，实现衣服搭配推荐，美妆产品推荐、产品宣传、导购等消费引导。</p>
                            </div>
                        </div>
			        </div>			   
		       </div>
            </div>
        </div>
        <!-- 合作伙伴 -->
        <div id="partner">
            <div class="head">
                <h3>我们的合作伙伴</h3>
                <div class="line"></div>
                <table class="main" style="border-collapse:collapse;cellspacing:0">
                    <tr class="pic">
                        <td><img src="../assets/images/marketing_morefun@2x.png"/></td>
                        <td><img src="../assets/images/marketing_apple@2x.png"/></td>
                    </tr>
                    <tr class="pic">
                        <td><img src="../assets/images/marketing_hotwind@2x.png"/></td>
                        <td><img src="../assets/images/marketing_fairwhale@2x.png"/></td>
                    </tr>
                    <tr class="pic">
                        <td><img src="../assets/images/marketing_smith@2x.png"/></td>
                        <td><img src="../assets/images/marketing_fotile@2x.png"/></td>
                    </tr>
                </table>
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
        name:'index',
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

            var mySwiper = new Swiper('#banner', {
                loop: true, // 循环模式选项
                speed: 2000,
                autoplay:2000, //6秒延迟
                effect: "slide",
                pagination : '.swiper-pagination',
            });
             var mySwiper = new Swiper('.words', {
                loop: true, // 循环模式选项
                speed: 2000,
                autoplay:1000, //6秒延迟
                effect: "slide",
            });
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
        height: 562px;
        img{
            width: 100%;
            height: 100%;
            position: relative;
        }
        p{
            position: absolute;
            top: 290px;
            color: #fff;
            font-size: 40px;
            left: 30%;
        }
        span{
            display: block;
            position: absolute;
            top: 350px;
            left:30% ;
            font-size: 20px;
            color: #fff;
        }
    }
    #aboutUs{
        width: 100%;
        height: 305px;
    }
    .head{
        width: 100%;
        height: 225px;
        margin-top: 80px;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        
        h3{
            width: 100%;
            font-size: 20px;/*px*/
            color: #333;
            text-align: center;
            font-weight:500;

        }
        .line{
            justify-content: center;
            width: 170px;
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
            padding-left:25px;
            padding-right:25px;
            line-height: 38px;
            color: #666;
            font-size: 14px;/*px*/
            span{
                font-weight:bold;
                color: #333;
                line-height: 36px;
            }
        }
    }
    #solution{
        width: 100%;
        .head{
            margin-top: 0;
        }
        .line{
            margin-bottom: 40px;
            margin-top:15px;
        }
        .introduce{
            width: 100%;
            height: 282px;
            display: flex;
            padding:0;
            .des{
                width: 50%;
                height: 100%;
                h5{
                    font-size: 16px;/*px*/
                    text-align: center;
                    font-weight: bold;
                    margin-bottom: 30px;
                    margin-top: 35px;
                }
                p{
                    width: 90%;
                    padding-left:5%; 
                    padding-right:5%; 
                    font-size: 12px;/*px*/
                    line-height: 36px;
                    margin-bottom:0;
                }
            }
            img{
            width: 50%;
            height:100%;
        }
        }
        
    }
    #words{
        width: 100%;
        height: 435px;
        margin-top: 1080px;
        .line{
            width: 410px;
            margin-top: 15px;
            margin-bottom: 40px;
        }
        .words{
            width: 100%;
            .swiper-slide{
                height: 300px;
                position: relative;
                .word-mask{
                    position: absolute;
                    left:0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,.5);
                }
                img{
                height: 300px;
                width:100%;
                }
                .adver{
                    position: absolute;
                    left:5%;
                    right: 5%;
                    top: 168px;
                    h5{
                        color: #fff;
                        font-size:20px;/*px*/
                        margin-top: -40px;
                        width: 100%;
                        text-align: center;
                    }
                    p{
                        color: #fff;
                        font-size:10px;/*px*/
                        margin-top:36px;
                        line-height: 30px;
                        
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