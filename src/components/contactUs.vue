<template>
    <div>
         <headers></headers>
        <!-- 轮播 -->
        <div id="banner">
            <img src="../assets/images/contact_us_banner_move@2x.png"/>
            <div class="join">
                <h2>联系我们</h2>
                <div>细心于我们的服务</div>
                <div>专心于我们的专业</div>
            </div>
        </div>
        <!-- 主体部分 -->
        <div id="main">
            <div class="main-top">
                <p class="ad">无论您想与我们合作还是想更多的了解我们的工作 我们都乐意听取您的意见</p>
                <div class="tel">
                    <div>业务联系</div>
                    <div>0551-65260260</div>
                </div>
                <div class="email">
                    <div>电子邮箱</div>
                    <div>service@ahjinjie.cn</div>
                </div>
                <div class="address">
                    <div>联系地址</div>
                    <div>安徽省合肥市经开区中环城A座1623室</div>
                </div>
                <div class="work-time">
                    我们的工作时间是 9：00~18：00（周一至周五）
                </div>
            </div>
            <div class="main-bottom">
                <input  v-model="fromnum.name" @blur='nameBlurReg' placeholder="您的姓名">
                <span v-show="showNameErr" class="nextspring"> 用户名格式不正确!</span>	
                <input type="text" name='phone' v-model="fromnum.phone" @blur='phoneBlurReg' placeholder="您的手机">
                <span v-show="showPhoneErr" class="nextspring"> 手机号格式不正确! </span>		
                <input type="text" v-model="fromnum.email" @blur='emailBlurReg' placeholder="您的邮件">
                <span v-show="showEmailErr" class="nextspring" > 邮箱格式不正确! </span>
                <textarea  v-model="fromnum.need" @blur='needBlurReg' placeholder="您的需求/描述"></textarea>
                <span v-show="showNeedErr" class="nextspring" >需求格式不正确!</span>	
                <button id="btn-submit" @click='submitbtn()'>
                    <img src="../assets/images/contace_us_submit_button@2x.png"/>
                </button>
                <div class="map">
                    <img src="../assets/images/contact_us_map@2x.png"/>
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
import {isChn,isPoneAvailable,isEmail,isneed} from '@/assets/js/jschn';
import headers from './headers';
import footers from './footers';
import Vue from 'vue'; 
import toast from "../toast/toast.js";
Vue.prototype.$toast = toast; 
    export default {
        name:'index',
        data(){
            return{
                isShow:'false',
                fromnum:{
                    name:"",
			        phone:"",
			        email:"" ,
			        need:"" // 描述
                },
                showNameErr:false,
                showPhoneErr:false,
                showEmailErr:false,
                showNeedErr:false
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
            nameBlurReg(e){
		        if(!isChn(e.target.value)){
                    this.showNameErr  = true
                }else{
                    this.showNameErr  = false
                }
            },
            phoneBlurReg(e){
		        if(!isPoneAvailable(e.target.value)){
                    this.showPhoneErr  = true
                }else{
                    this.showPhoneErr  = false
                }
            },
            emailBlurReg(e){
		        if(!isEmail(e.target.value)){
                    this.showEmailErr  = true
                }else{
                    this.showEmailErr  = false
                }
            },
            needBlurReg(e){
		        if(!isneed(e.target.value)){
                    this.showNeedErr  = true
                }else{
                    this.showNeedErr  = false
                }
            },
           submitbtn(){
			
                if(this.fromnum.name==''||this.showNameErr){
                    this.$toast('用户名不能为空');
                    return;
                }
                if(this.fromnum.phone==''||this.showPhoneErr){
                    this.$toast('电话号码不能为空');
                    return;
                }
                if(this.fromnum.email==''||this.showEmailErr){
                    this.$toast('邮箱不能为空');
                    return;
				}
				  if(this.fromnum.need==''||this.showNeedErr){
                    this.$toast('需求/描述不能为空');
                    return;
                }
					  let formdata = new FormData();
						   formdata.append('name',this.fromnum.name);
						 formdata.append('tel',this.fromnum.phone);
						  formdata.append('email',this.fromnum.email);
						   formdata.append('demand',this.fromnum.need);
						   let config = {
						            headers: {
						                'Content-Type': 'multipart/form-data'
						            }
						        };
					  this.$http.post('/www.test.com/index.php/?c=pchome&m=set_info', formdata, config).then( (res) => {

						          if(res.data.status==true){
                                    window.location.reload()
								  }
								  console.log(res)
						    }).catch((error) =>{						       
						    });
				
		}
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
        top:243px;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        margin-left: -340px;
        h2{
            height: 40px;
            width:750px;
            text-align: center;
            color: #fff;
            font-size: 20px;/*px*/
            font-family:"microsoft yahei";
            margin-bottom: 20px;
            font-weight: bold;
            letter-spacing:2px;
        }
        div{
            color: #fff;
            text-align: center;
            line-height: 40px;
            width: 100%;
            font-size: 10px;/*px*/
            font-family:"microsoft yahei";
            letter-spacing:2px;
        }
    }
}
// 主体展示
#main{
    width:100%;
    .main-top{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .ad{
            color: #999;
            text-align: center;
            line-height: 30px;
            font-size: 10px;/*px*/
            font-family:"microsoft yahei";
            letter-spacing:3px;
            padding: 80px 60px;
        }
        .tel{
            width: 100%;
            margin-bottom: 40px;
            div{
                color: #333;
                text-align: center;
                line-height: 45px;
                font-size: 15px;/*px*/
                font-family:"microsoft yahei";
                letter-spacing:3px;
            }
        }
        .email{
            width: 100%;
            margin-bottom: 40px;
            div{
                color: #333;
                text-align: center;
                line-height: 45px;
                font-size: 15px;/*px*/
                font-family:"microsoft yahei";
                letter-spacing:3px;
            }
        }
        .address{
            width: 100%;
            margin-bottom: 40px;
            div{
                color: #333;
                text-align: center;
                line-height: 45px;
                font-size: 15px;/*px*/
                font-family:"microsoft yahei";
                letter-spacing:3px;
            }
        }
        .work-time{
            color: #999;
            text-align: center;
            line-height: 30px;
            font-size: 10px;/*px*/
            font-family:"microsoft yahei";
            letter-spacing:3px;
            padding: 40px 60px;
        }
    }
    .main-bottom{
        width:100%;
        margin-top: 65px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        input{
            border:2px solid #999;
            padding-left: 40px;
            font-size: 10px;/*px*/
            color: #999;
            width: 80%;
            height: 76px;
            margin:20px 10%;
            outline: none;
            letter-spacing:3px;
        }
        span{
            font-size: 10px;/*px*/
            color: rgb(233, 79, 79);
            width: 100%;
            line-height: 20px;
            text-align: center;
        }
        textarea{
            border:2px solid #999;
            padding-left: 40px;
            font-size: 10px;/*px*/
            color: #999;
            width: 80%;
            height: 396px;
            margin:30px 10%;
            outline: none;
            letter-spacing:3px;
        }
        button{
            width: 200px;
            height: 50px;
            margin:60px 0;
            padding: 0;
            border: 1px solid transparent;
            outline: none; 
            background: none;
            img{
                width:100%;
                height:100%;
            }
        }
        .map{
            width: 500px;
            height: 375px;
            border-radius: 15px;
            margin:0 125px;
            img{
                width:100%;
                height:100%;
            }
        }
    }
}

</style>