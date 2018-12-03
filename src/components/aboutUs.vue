<template>
    <div>
           <headers></headers>
        <!-- 轮播 -->
        <div id="banner">
            <img src="../assets/images/about_banner_move@2x.png"/>
            <div class="join">
                <h2>关于我们</h2>
                <div>九万里风鹏正举，风休住</div>
                <div>蓬舟吹取三山去</div>
            </div>
        </div>
        <!-- 关于我们 -->
        <div id="aboutUs">
            <div class="head">
                <h3>关于我们</h3>
                <div class="line"></div>
                <p class="article">
                    安徽进阶信息技术有限公司成立于2018年。是一家专注于利用云计算、移动计算、互联网、大数据、人工智能等高新技术以及增强现实、虚拟现实等可视化技术为企业提供创新互动服务的高科技公司。
                    目前公司主要有三大核心业务领域：电商互动解决方案、新零售解决方案、软件技术服务。
                </p>
            </div>
            <div class="aboutPic">
                <img src="../assets/images/about_background@2x.png"/>
                <div class="about">
                    <h2>轻松开放的工作氛围</h2>
                    <p>
                        我们是一群对工作爱到狂热的人，也是一个年轻有活力的团队。在这里，我们畅所欲言、各抒己见、求同存异、互帮互助、协同进步。博学，深知，信任，积极，责任感，对细节的尊重，挑战权威是我们的关键词。
                    </p>
                </div>
            </div>
        </div>
        <!-- 核心领域 -->
        <div id="heart">
            <div class="head">
                <h3>进阶核心领域</h3>
                <div class="line"></div>
                <p class="article">
                    在我们的领域里，我们是认真的
                </p>
            </div>
            <div class="aboutPic-1">
                <img src="../assets/images/about_marketing@2x.png"/>
                <div class="about">
                    <h2>互动营销</h2>
                    <p>
                        在电商互动营销解决方案方面，安徽进阶信息技术有限公司真正做到赋能商家、创变未来。在服务的过程当中一直秉承“客户第一”的服务理念。在技术层面，我们研发了一批具有自主知识产权的技术，其中包括图形图像、VR、AR、等技术，在业内我们一直保持着领先的技术实力。我们拥有的一切能力只为更好的为我们的服务对象赋能和提能，通过实战能力的提升来进一步的优化我们对客户的服务能力。
                    </p>
                </div>
            </div>
            <div class="aboutPic-2">
                <img src="../assets/images/about_new_retail@2x.png"/>
                <div class="about">
                    <h2>新零售</h2>
                    <p>
                        在新零售方面，我们在“人、货、场”的关系优化方面积累了丰富的经验，以坚实过硬的技术和服务能力，努力去拉近人与货的物理距离和心智距离，构建符合新零售生态的新零售场景。在我们努力践行新零售的经验和实战中，我们已积累了众多的新零售解决方案，如快闪店、智慧门店、试妆魔镜、门店客流分析等方案。进阶希望通过我们在电商和智能行业的丰富经验来改善线下零售的现状，如商品流通效率的提升、库存优化、线下用户体验的提升、线下营销和运营效率的提升。
                    </p>
                </div>
            </div>
            <div class="aboutPic-3">
                <img src="../assets/images/about_software@2x.png"/>
                <div class="about">
                    <h2>软件服务</h2>
                    <p>
                        在软件技术方面，安徽进阶信息技术有限公司以云计算、物联网、大数据以及人工智能等技术为主，为企业提供海量智能设备接入及管控技术，分布式企业服务架构及应用治理平台，深入研究云计算和微服务架构技术，实现微服务架构下的设计、开发和运维管理体系。进阶还拥有工具化平台，具备自主知识产权的较高技术水平和能力。
                    </p>
                </div>
            </div>
        </div>
        <!-- 合作伙伴 -->
        <div id="partner">
            <div class="head">
                <h3>我们的合作伙伴</h3>
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
        name:'index',
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
#aboutUs{
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
            width: 152px;
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
            color: #333;
            font-size: 12px;/*px*/
            span{
                font-weight:bold;
                color: #333;
                line-height: 36px;
            }
        }
    }
    .aboutPic{
        width:100%;
        height: 400px;
        margin-top: 80px;
        position: relative;
        img{
            width: 100%;
            height: 120%;
        }
        .about{
            position: relative;
            bottom: 280px;
            left: 0;
            h2{
                font-size: 16px;/*px*/
                color: #fff;
                width: 100%;
                text-align: center;
                margin-bottom: 36px;
            }
            p{
                font-size: 12px;/*px*/
                color: #fff;
                line-height: 40px;
                padding: 0 60px;
            }
        }
    }
}
#heart{
    width: 100%;
    .head{
        width: 100%;
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
            margin-top: 40px;
        }
        .line{
            justify-content: center;
            width: 240px;
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
            line-height: 90px;
            height: 90px;
            color: #666;
            font-size: 12px;/*px*/
            text-align: center;
        }
    }
    .aboutPic-1{
        width:100%;
        height: 400px;
        margin-top: 20px;
        img{
            width: 74%;
            height: 100%;
            padding: 0 13%;
        }
        .about{
            margin-bottom: 80px;
            h2{
                font-size: 15px;/*px*/
                color: #333;
                width: 100%;
                text-align: center;
                height: 106px;
                line-height: 106px;
                font-weight:bold;
            }
            p{
                font-size: 12px;/*px*/
                color: #333;
                line-height: 40px;
                padding: 0 30px;
            }
        }
    }
    .aboutPic-2{
        width:100%;
        height: 400px;
        margin-top: 420px;
        img{
            width: 74%;
            height: 100%;
            padding: 0 13%;
        }
        .about{
            margin-bottom: 80px;
            h2{
                font-size: 15px;/*px*/
                color: #333;
                width: 100%;
                text-align: center;
                height: 106px;
                line-height: 106px;
                font-weight:bold;
            }
            p{
                font-size: 12px;/*px*/
                color: #333;
                line-height: 40px;
                padding: 0 30px;
            }
        }
    }
    .aboutPic-3{
        width:100%;
        height: 400px;
        margin-top: 500px;
        img{
            width: 74%;
            height: 100%;
            padding: 0 13%;
        }
        .about{
               margin-bottom: 80px;
            h2{
                font-size: 15px;/*px*/
                color: #333;
                width: 100%;
                text-align: center;
                height: 106px;
                line-height: 106px;
                font-weight:bold;
            }
            p{
                font-size: 12px;/*px*/
                color: #333;
                line-height: 40px;
                padding: 0 30px;
            }
        }
    }
}
#partner{
        width: 100%;
        margin-top: 430px;
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