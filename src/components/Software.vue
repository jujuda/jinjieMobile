<template>
    <div>
       <headers></headers>
        <!-- 轮播 -->
        <div id="banner">
            <img src="../assets/images/software_service_banner_move@2x.png"/>
            <div class="join">
                <h2>软件服务</h2>
                <div>基于DEvOps理念，提供“大云物移智”高技术软件服务</div>
            </div>
        </div>
        <!-- 互动营销 -->
        <div id="marketing">
            <div class="head">
                <h3>进阶软件服务</h3>
                <div class="line"></div>
                <p class="article">
                   基于DevOps理念，帮助企业消除开发与运维的信息鸿沟，加速IT精益运营，以云计算、物联网、大数据以及人工智能技术等核心技术，采用微服务架构技术，领域驱动设计方法，为企业提供究云IT信息化服务，共赢数字经济时代。
                </p>
            </div>
            <div class="idea">
                <h2>进阶软件服务领域</h2>
                <div class="line"></div>
                <table>
                    <tr>
                        <td><img src="../assets/images/software_service_big_date@2x.png"/></td>
                        <td><div class="empty"></div></td>
                        <td><img src="../assets/images/software_service_cloud@2x.png"/></td>
                    </tr>
                    <tr>
                        <td><div class="empty"></div></td>
                        <td><img src="../assets/images/software_service_things@2x.png"/></td>
                        <td><div class="empty"></div></td>
                    </tr>
                    <tr>
                        <td><img src="../assets/images/software_service_artificial_intelligence@2x.png"/></td>
                        <td><div class="empty"></div></td>
                        <td><img src="../assets/images/software_service_mobile_internet@2x.png"/></td>
                      </tr>
                </table>
            </div>
            <div class="aboutPic">
                <div class="about">
                    <h2>进阶软件所提供服务</h2>
                    <div class="line"></div>
                    <div>
                        <img src="../assets/images/software_service_consuiltation@2x.png"/>
                        <div class="desc">
                            <h4>咨询服务</h4>
                            <p>持续以深厚的行业积累和丰富的技术经验，为企业的数字化、信息化提供解决方案和咨询服务，帮助企业的数字化转型。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/software_service_digital_marketing@2x.png"/>
                        <div class="desc">
                            <h4>数字营销</h4>
                            <p>基于内容管理、客户管理，整合线上资源，基于良好用户体验以及创意设计，为客户提供线上线下的数字化营销，触达全域，推动销售增长。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/software_service_devops@2x.png"/>
                        <div class="desc">
                            <h4>DevOps</h4>
                            <p>传递DevOps理念，基于开源框架，从组织，技术，流程三个维度帮助客户加速IT精益运营，并提供自动化集成、自动化部署流水线有助于开发、测试、运维友好协作，形成DevOps演进闭环，有效的支撑业务创新，从而提高效率和产品质量。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/software_service_microservice@2x.png"/>
                        <div class="desc">
                            <h4>微服务</h4>
                            <p>基于微服务架构为用户提供分布式、弹性扩展的技术架构设计，提升企业信息化、互联网平台信息化服务的市场响应速度。</p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/software_service_consitomization@2x.png"/>
                        <div class="desc">
                            <h4>软件定制</h4>
                            <p>针对行业客户需求，为特定客户提供应用软件开发、系统维护、系统功能优化等应用开发与管理服务。公司的应用开发及管理服务旨在帮助客户实现对IT外包开支的科学管理，使得客户更加专注于其核心竞争力的建设。</p>
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
            table{
                margin: 0;
                padding: 0;
                border:none;
                border-collapse:collapse;
                tr>td{
                    height:100px;
                    font-size: 0;
                }
                img{
                width: 200px;
                height: 200px;
                flex-basis:auto;
            }
            .empty{
                width: 200px;
                height: 200px;
                flex-basis:auto;
            }
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
                width: 285px;
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