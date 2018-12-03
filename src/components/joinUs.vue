<template>
    <div>
        <!-- 头部 -->
            <headers></headers>
        <!-- 轮播图 -->
        <div id="banner">
            <img src="../assets/images/jion_us_banner_move@2x.png"/>
            <div class="join">
                <h2>加入我们</h2>
                <p>你的能量，超乎你想象</p>
            </div>
        </div>
        <!-- 主体介绍 -->
        <div id="main">
            <div class="invite">
                <img src="../assets/images/jion_us_project_manager@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">人员需求:1名</h5>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                            1、 基本职责就是确保项目目标的实现，领导项目团队准时、优质地完成全部工作。<br/>
                            <div>
                                 2、 与客户沟通，了解项目的整体需求。并与客户保持一定的联系，即时反馈阶段性的成果，和即时更改客户提出的合理需求。<br/>
                            </div>
                           
                        </div>
                        <div id="hidden-1" style="display:none;">
                            3、 制定项目开发计划文档，量化任务，并合理分配给相应的人员。<br/>
                            4、 跟踪项目的进度，协调项目组成员之间的合作。<br/>
                            
                            <span>任职要求：</span><br/>
                            1、大专及以上学历，具备4年以上前端开发工作经验，1年以上项目管理及团队合作经验； <br/>
                            2、熟悉手机软件及互联网产品研发的全过程； <br/>
                            4、良好的沟通协调和学习能力，敏捷的思维辨证能力，优秀的团队合作精神；<br/> 
                            5、有工作热情，具有良好的沟通技巧和团队合作精神，抗压能力强；<br/> 
                            6、具有H5/NODE.JS经验者优。<br/>
                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro1">
                    </div>
                </div>
            </div>
            <div class="invite">
                <img src="../assets/images/jion_us_web_front_end@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">级别和人员需求:初中级、中级;1名</h5>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                            1、 根据需求完成Web前端项目开发。<br/>
                            2、 前端与后台服务数据交互的开发。<br/>
                            3、 分析并解决软件开发过程中的问题。<br/>
                        </div>
                        <div id="hidden-2" style="display:none;">
                            <span>任职要求：</span><br/>
                            1、精通HTML 5/CSS 3/Javascript等主流WEB前端技术； <br/>
                            2、熟悉angularJs、vueJs 、Reactjs至少一种框架，并能够对其特性和应用有较深的了解； <br/>
                            3、精通DIV+CSS布局的HTML代码编写，能够书写符合W3C标准的代码，并有严苛的编码风格和良好的编码习惯；<br/> 
                            4、熟悉webpack、gulp、grunt等至少一项前端打包工具；<br/> 
                            5、熟练掌握git（或svn）的使用包括常用命令；<br/>
                            6、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；<br/>
                            7、本科以上学历，计算机相关专业，1年以上前端开发工作经验。<br/>
                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro2">
                    </div>
                </div>
            </div>
            <div class="invite">
                <img src="../assets/images/jion_us_react_js@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">级别和人员需求:REACTJS方向;初中级，中级;1名</h5><br/>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                            1、 react相关技术栈搭建；<br/>
                            2、 维护优化Html页面整体效果；<br/>
                            3、参与Web前端用户体验的改进。
                        </div>
                        <div id="hidden-3" style="display:none;">
                            <span>任职要求：</span><br/>
                            1、至少精通vue.js、React.js、Angular.js一种框架且有过实际项目开发经验；<br/>
                            2、熟练掌握JavaScript语言，对闭包、事件和异步有深入的理解，包括核心原理、面向对象设计编程，并掌握常用的基于JavaScript的框架或类库；<br/>
                            3、熟练使用es5或es6进行前端开发，熟悉React.js,优先考虑；<br/>
                            4、精通HTML 5/CSS 3/Javascript等主流WEB前端技术；<br/>
                            5、熟悉jQuery、angularJs、vueJs 、Reactjs至少一种框架，并能够对其特性和应用有较深的了解；<br/>
                            6、精通DIV+CSS布局的HTML代码编写，能够书写符合W3C标准的代码，并有严苛的编码风格和良好的编码习惯；<br/>
                            7、熟悉webpack、gulp、grunt等至少一项前端打包工具；<br/>
                            8、熟练掌握git（或svn）的使用包括常用命令；<br/>
                            9、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；<br/>
                            10、本科以上学历，计算机相关专业，2年以上前端开发工作经验。<br/>

                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro3">
                    </div>
                </div>
            </div>
            <div class="invite">
                <img src="../assets/images/jion_us_web_h5@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">级别和人员需求:H5动画方向;初中级，中级;1名</h5><br/>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                           1、负责H5动画或游戏等产品前端研发；<br/>
                           2、负责H5动画或游戏的功能开发和性能优化；<br/>
                           3、负责H5前沿技术研究。<br/>
                        </div>
                        <div id="hidden-4" style="display:none;">
                            <span>任职要求：</span><br/>
                           1、精通JavaScript语言，包括核心原理、面向对象设计编程；<br/>
                           2、熟悉HTML5 Canvas、SVG、WebGL等Web图形动画开发知识的加分，熟悉各种H5动态效果，能熟练使用canvas画布；<br/>
                           3、熟悉HTML5/CSS3尤其动画相关的编写能力，要求可自定义定制各种需求的动画效果，以及做好兼容工作和性能评估；<br/>
                           4、精通HTML 5/CSS 3/Javascript等主流WEB前端技术 ；<br/>
                           5、熟悉jQuery、angularJs、vueJs 、Reactjs至少一种框架，并能够对其特性和应用有较深的了解；<br/>
                           6、精通DIV+CSS布局的HTML代码编写，能够书写符合W3C标准的代码，并有严苛的编码风格和良好的编码习惯；<br/>
                           7、熟悉webpack、gulp、grunt等至少一项前端打包工具；<br/>
                           8、熟练掌握git（或svn）的使用包括常用命令；<br/>
                           9、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；<br/>
                           10、本科以上学历，计算机相关专业，2年以上前端开发工作经验。<br/>

                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro4">
                    </div>
                </div>
            </div>
            <div class="invite">
                <img src="../assets/images/jion_us_web_cw@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">级别和人员需求:Canvas，WebGL方向;中级;1名</h5><br/>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                            1. 负责业务前端动画及效果的开发；<br/>
                            2. 依据上司要求报告个人工作内容及进度；<br/>									
                            3. 在他人指导下同客户进行工作相关的简单沟通。<br/>
                        </div>
                        <div id="hidden-5" style="display:none;">
                            <span>任职要求：</span><br/>
                            1.精通JavaScript语言，包括核心原理、面向对象设计编程。<br/> 
                            2.熟悉HTML5 Canvas、SVG、WebGL等Web图形动画开发知识的，熟悉各种H5动态效果，能熟练使用canvas画布。<br/> 
                            3、熟悉HTML5/CSS3尤其动画相关的编写能力，要求可自定义定制各种需求的动画效果，以及做好兼容工作和性能评估；<br/> 
                            4、精通HTML 5/CSS 3/Javascript等主流WEB前端技术; <br/> 
                            5、熟悉jQuery、angularJs、vueJs 、Reactjs至少一种框架，并能够对其特性和应用有较深的了解；<br/>
                            6、精通DIV+CSS布局的HTML代码编写，能够书写符合W3C标准的代码，并有严苛的编码风格和良好的编码习惯；<br/>
                            7、熟悉webpack、gulp、grunt等至少一项前端打包工具；<br/> 
                            8、熟练掌握git（或svn）的使用包括常用命令；<br/>
                            9、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；<br/>
                            10、本科以上学历，计算机相关专业，2年以上前端开发工作经验； 有以下经验/能力者优先.<br/>

                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro5">
                    </div>
                </div>
            </div>
            <div class="invite">
                <img src="../assets/images/jion_us_rear_end@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">级别和人员需求:初中级,中级;1名</h5>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                            1.根据客户需求,负责设计系统方案与技术方案，构建后端框架，实现服务器功能；<br/>
                            2.配合前端技术实现功能开发与调试；<br/>
                            3.调研，对接第三方api接口。<br/>
                        </div>
                        <div id="hidden-6" style="display:none;">
                            <span>任职要求：</span><br/>
                            1.计算机相关专业，本科以上学历,有较为全面的计算机专业知识和扎实的编码功底；<br/>
                            2.熟悉Nodejs或java，能够快速搭建代码框架并进行开发;<br/>
                            3.熟悉MySQL、Mongo等后端常用技术。熟悉linux环境;<br/>
                            4.熟悉 HTTP 协议及缓存，了解Web安全;<br/>
                            5.熟悉网络编程，有高并发、高性能、分布式开发经验者优先;<br/>
                            6.具有较好的沟通能力及团队协作意识。<br/>

                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro6">
                    </div>
                </div>
            </div>
            <div class="invite">
                <img src="../assets/images/jion_us_node_js@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">级别和人员需求:初中级,中级;1名</h5>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                            1、负责项目服务端，对Restful API开发有一定经验；<br/>
                            2、配合前端开发接口；<br/>
                            3、设计并维护数据表。<br/>
                        </div>
                        <div id="hidden-7" style="display:none;">
                            <span>任职要求：</span><br/>
                           1、熟悉nodejs且有过实际项目开发经验；<br/>
                           2、熟练并能使用一种或多种主流数据库，如（不限于）：MySql、Mongodb等；<br/>
                           3、熟悉Express、Hapi、Egg等任意一个框架者优先考虑；<br/>
                           4、熟练 Nodejs 服务端开发，掌握各个系统模块的使用，理解 TCP/IP 、 Http 、 Websocket 通讯协议；<br/>
                           4、精通HTML 5/CSS 3/Javascript等主流WEB前端技术；<br/>
                           5、熟悉jQuery、angularJs、vueJs 、Reactjs至少一种框架，并能够对其特性和应用有较深的了解；<br/>
                           6、精通DIV+CSS布局的HTML代码编写，能够书写符合W3C标准的代码，并有严苛的编码风格和良好的编码习惯；<br/>
                           7、熟悉webpack、gulp、grunt等至少一项前端打包工具；<br/>
                           8、熟练掌握git（或svn）的使用包括常用命令；<br/>
                           9、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；<br/>
                           10、本科以上学历，计算机相关专业，2年以上前端开发工作经验。<br/>
                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro7">
                    </div>
                </div>
            </div>
            <div class="invite">
                <img src="../assets/images/jion_us_softeware_test@2x.png" class="pic"/>
                <div class="application">
                    <h5 class="need">级别和人员需求:REACT JS方向;初中级,中级;1名</h5><br/>
                    <h5 class="introduce">职位描述</h5>
                    <div class="detail">
                        <span>岗位职责:</span>
                        <div class="top">
                           1、 在计划时间内完成对软件的功能、性能、安全等各项测试工作，定时汇报测试进度，对所测软件的质量负责；<br/>
                           2、 编制测试各个环节的相关文档，包括测试计划、测试用例、测试小结、测试报告。<br/>
                        </div>
                        <div id="hidden-8" style="display:none;">
                            <span>任职要求：</span><br/>
                            1、掌握基本的软件测试理论，熟悉软件测试的基本方法、流程和规范；<br/>
                            2、熟悉LoadRunner12、WINDOWS 2008R2、SQL Server 2008R2，可独立搭建测试环境，可使用基本的sql语句辅助测试；<br/>
                            3、本科以上学历，计算机专业相关，1年以上相关经验者优先。<br/>
                        </div>
                        <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro8">
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
import { Navbar, TabItem } from 'mint-ui';
import headers from './headers';
import footers from './footers';
    export default {
        name:'joinUs',
        data(){
            return{
                isShow:'false'
            }
        },
        methods:{
            showMenu(){
                $("#menu-body").slideToggle();
            },
            HiddenIntro1(){
                $("#hidden-1").slideToggle();
            },
            HiddenIntro2(){
                $("#hidden-2").slideToggle();
            },
            HiddenIntro3(){
                $("#hidden-3").slideToggle();
            },
            HiddenIntro4(){
                $("#hidden-4").slideToggle();
            },
            HiddenIntro5(){
                $("#hidden-5").slideToggle();
            },
            HiddenIntro6(){
                $("#hidden-6").slideToggle();
            },
            HiddenIntro7(){
                $("#hidden-7").slideToggle();
            },
            HiddenIntro8(){
                $("#hidden-8").slideToggle();
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
                autoplay:4000, //6秒延迟
                effect: "slide",
                pagination : '.swiper-pagination',
            });
             var mySwiper = new Swiper('.words', {
                 direction : 'vertical',
                effect : 'coverflow',
                slidesPerView: "3",
                coverflowEffect: {
                  rotate: 30,
                  stretch: 100,
                  depth: 60,
                  modifier: 2,
                  slideShadows : true
                },
                height: 200,
                speed: 2000,
                
                autoplay:4000,
            });
        },
        
        components:{
             headers,
             footers 
	    },
    }
</script>

<style scoped lang='less'>

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
        }
        p{
            color: #fff;
            font-size: 10px;/*px*/
            font-family:"microsoft yahei";
        }
    }
}
#main{
    width: 100%;
    .invite{
        width: 90%;
        margin:5%;
        box-shadow:#999 0 0 6px 4px;
        display: flex;
        .pic{
            width: 110px;
            height: 150px;
            margin-top: 40px;
            margin-left: 45px;
        }
        .application{
            padding-left: 45px;
            padding-right: 45px;
            h5{
                color: #a1a1a1;
                font-size: 12px;/*px*/
                line-height: 40px;
                height: 40px;
            }
            .need{
                margin-top: 40px;
            }
            .detail{
                font-size: 12px;/*px*/
                color: #333;
                line-height: 40px;
                span{
                   font-size: 14px;/*px*/ 
                   line-height: 40px;
                   height: 40px;
                }
                .moreInfo{
                    width: 72px;
                    height: 22px;
                    margin-top: 60px;
                }
            }
        }
    }
}

</style>