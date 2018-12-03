<template>
    <div>
             <headers></headers>
        <!-- 轮播 -->
        <div id="banner">
            <img src="../assets/images/case_banner_move@2x.png"/>
            <div class="join">
                <h2>案例展示</h2>
                <div>每一个成果都来自于精心打磨</div>
                <div class="line-1"></div>
                <div class="line-2"></div>
            </div>
        </div>
        <div id="main">
            <div class="case">
                <h2>CASE&nbsp;WORK</h2>
                <p>案例作品</p>
            </div>
            <div class="pic-detail">
                <img src="../assets/images/case_nba@2x.png"/>
                <p>NBA双球衣退役</p>
            </div>
            <div class="pic-detail">
                <img src="../assets/images/case_nike@2x.png"/>
                <p>NIKE速度挑战赛互动</p>
            </div>
            <div class="pic-detail">
                <img src="../assets/images/case_fotile@2x.png"/>
                <p>方太6周年</p>
            </div>
            <div class="pic-detail">
                <img src="../assets/images/case_vodka@2x.png"/>
                <p>伏特加&emsp;中国有嘻哈</p>
            </div>
            <div class="pic-detail">
                <img src="../assets/images/case_green@2x.png"/>
                <p>格力&emsp;全民嘻哈</p>
            </div>
            <div class="pic-detail">
                <img src="../assets/images/case_linsi@2x.png"/>
                <p>凌仕皮肤测试黑科技活动</p>
            </div>
            <div id="hidden-7" v-show="istrue">
                <div class="pic-detail">
                    <img src="../assets/images/case_markfairwhale@2x.png"/>
                    <p>马克华菲店铺二楼互动</p>
                </div>
                    <div class="pic-detail">
                    <img src="../assets/images/case_mouse@2x.png"/>
                    <p>马克华菲店铺二楼互动</p>
                </div>
                <div class="pic-detail">
                    <img src="../assets/images/case_iphone@2x.png"/>
                    <p>iPhone8/X天猫首发</p>
                </div>
                <div class="pic-detail">
                    <img src="../assets/images/case_hotair@2x.png"/>
                    <p>热风吹口气H5 </p>
                </div>
                <div class="pic-detail">
                    <img src="../assets/images/case_)smith@2x.png"/>
                    <p>A.O.史密斯记忆力大挑战</p>
                </div>
                <div class="pic-detail">
                    <img src="../assets/images/case_skechers@2x.png"/>
                    <p>斯凯奇定制礼盒</p>
                </div>
            </div>
            <img src="../assets/images/case_more_butten@2x.png" alt="" class="moreInfo" @click="HiddenIntro7" v-show="ismore">
             <img src="../assets/images/return@2x.png" alt="" class="moreInfo" @click="HiddenIntro7" v-show="!ismore">
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
                isShow:'false',
                ismore:true,
                istrue:false
            }
        },
        methods:{
            HiddenIntro7(){
               this.ismore=!this.ismore;
                this.istrue=!this.istrue
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
// 头部


// 轮播
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
        div.line-1{
            width:6%;
            margin: 0 47%;
            height: 2px;
            background:#fff;
        }
        div.line-2{
            width:2%;
            margin: 0 49%;
            margin-top: 5px;
            height: 2px;
            background:#fff;
        }
    }
}
// 主体展示
#main{
    width:100%;
    .case{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        h2{
            color: #333;
            font-size: 17px;/*px*/
            line-height: 60px;
            height: 60px; 
            width: 100%;
            text-align: center;
            margin-top: 40px;
        }
        p{
            color: #666;
            font-size: 14px;/*px*/
            width: 100%;
            text-align: center; 
            margin-bottom: 40px;
        }
    }
    .pic-detail{
             width: 100%;
             margin-bottom: 30px;
             img{
                 width: 80%;
                 padding: 0 10%;
             }
             p{
                font-size: 14px;/*px*/ 
                width: 78%;
                padding: 0 11%;
                color: #666;
                line-height: 60px;
                height: 60px; 
        }
    }
        .moreInfo{
                    width: 145px;
                    height: 48px;
                    margin-top: 60px;
                    padding-left: 11%;
                }
}

</style>