<template>
<div>
<!--轮播图 -->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="../../static/images/swiper1.jpg"></div>
			<div class="swiper-slide"><img src="../../static/images/swiper2.jpg"></div>
			<div class="swiper-slide"><img src="../../static/images/swiper3.jpg"></div>
			<div class="swiper-slide"><img src="../../static/images/swiper4.jpg"></div>
			<div class="swiper-slide"><img src="../../static/images/swiper5.jpg"></div>

		</div>
		<!-- 圆点 -->
		<div class="swiper-pagination"></div>
	</div>
<!-- 标题栏 -->
	<div id="discountPrice">
		<p id="headProductTitle">埃斯系列 双座休闲沙发 天鹅绒版 湖蓝</p>
		<!-- 价格 -->
		<b class="priceFormat" price="9499.00">¥9499</b>
	</div>
		<!--丹麦-->
	<div class="banner">
		<!-- 圆框 -->
		<div class="circle"></div>
		<!-- 语句 -->
		<div class="name">
			<router-link tag="li" to="/brand/:brandid" activeClass="active">
				Normann Copenhagen
			</router-link>	
			<!-- 省略号 -->
			<router-link tag="li" to="/brand/:brandid" activeClass="active" id="paragraph">
				Normann Copenhagen是丹麦设计公司，公司在简约时尚的设计领域中秉承原创，突破和优异的设计理念。或者换句话来说，就是公司致力于突破传统观念的束缚，通过创新和优秀的设计理念来达到发扬公司品牌形象的目的。
				公司代表的作品集是由广泛且持续发展的多功能家具系列，灯具系列，纺织品系列和家具备件组成。
				Normann Copenhagen展现的独特产品设计包括配饰、吊灯、橱柜、边桌、玻璃器皿和钟表。1999年Jan Andersen和Poul Madsen强强联手，力争在设计领域发挥作用。Normann Copenhagen从一间小店铺起步，2005年搬到了一座1700平米的老影院。有旗舰店是事实，Normann Copenhagen除荣获时髦店铺的称号外，还靠产品设计赢得了超过40个奖项。
			</router-link>
		</div>
	</div>
	<!-- ajax请求回的数据 -->
	<div>
		<ul>
			<li v-for="data in datalist">	
				<img :src="data.content">
			</li>
		</ul>
	</div>

	<!-- 尺寸 -->
	<div id="details">
		<p>详细规格参数</p>
		<ul>
			<li v-for="data in looplist">   
				<span class="name">{{data.attributeName}}</span>
				<span class="size">{{data.attributeValueText}}</span>
			</li>
		</ul>
	</div>
	<!-- 其他信息  -->
	<div class="infoHeader">
		<p style="padding-top: 0.2rem;padding-right: 0.1rem;">—</p>
		<div style=" text-align: center;">
			<span style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;">其他信息</span><br>
			<span style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;">OTHER</span>
		</div>
		<p style="padding-top: 0.2rem;padding-left: 0.1rem;">—</p>
	</div>
	<!--服务承诺 -->
	<div id="server">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="服务承诺" name="1" class="title">
				<div class="content">
				<ul>
				<router-link tag="li" to="/pages/baojia" class="first">
				<div><img src="../../static/images/promise2.png" alt=""></div>
				<p>价格保障/变动返差价</p>
				<p>7日保价</p>
				</router-link >
				<div class="second">
				<img src="../../static/images/dashLine.png" alt="">
				</div>
				<router-link tag="li" to="/pages/baojia" class="three">
				<div><img src="../../static/images/promise2.png" alt=""></div>
				<p>三年内质保</p>
				<p>7日退换</p>
				</router-link >
				</ul>

				</div>
			</el-collapse-item>
			<el-collapse-item title="价格说明" name="2">
				<p style="margin-bottom:0.1rem;line-height:0.26rem;font-size:0.16rem;
				">
				划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考
				</p>
				<p style="margin-bottom:0.1rem;line-height:0.26rem;font-size:0.16rem;
				">
				未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。
				</p>
				<p style="margin-bottom:0.1rem;line-height:0.26rem;font-size:0.16rem;
				">
				* 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准
				</p>
			</el-collapse-item> 
		</el-collapse>
	</div>
	<!-- 猜你喜欢 -->
	<div class="infoHeader">
	<p style="padding-top: 0.2rem;padding-right: 0.1rem;">—</p>
	<div style=" text-align: center;">
	<span style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;">猜你喜欢</span><br>
	<span style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;">WHAT’S HOT</span>
	</div>
	<p style="padding-top: 0.2rem;padding-left: 0.1rem;">—</p>
	</div>
	<!-- 商品信息 -->
	<div class="goods">
	<ul>
	<li v-for="data in shooplist">
	<img :src="data.productImg">
	<p>{{data.productTitle}}</p>
	<span>{{data.sellPrice}}</span>
	<span>{{data.originalPrice}}</span>
	</li>
	</ul>
	</div>
	<!-- 帮助 -->
	<div id="needHelp">
	<a href="tel:4008-203-237">
	<span id="needHelpText">需要帮助</span>
	<span id="workTime">周一至周五 9:00~18:30</span>
	</a> 
	<img src="../../static/images/backTop.png" @click="handleClick">


	</div>
</div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
// import brand from "/brand";
import "swiper/dist/css/swiper.css"
export default({
data(){
		return{
			datalist:[],
			looplist:[],
			 activeNames: ['1'],
			 shooplist:[]
			
		      }
	   },
	    methods: {
      handleChange(val) {
        console.log(val);
      },
    handleClick(){
			  var id = setInterval(function(){
				var current = document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
				if(current === 0 ){
					clearInterval(id);
				}
				document.body.scrollTop = current - 300;
				document.documentElement.scrollTop = current - 300;
			  },100)
			},
			
			menu(){
		        this.scroll = document.body.scrollTop||document.documentElement.scrollTop;
		        console.log(this.scroll)
		        if (this.scroll >= 800) {
		          this.isShow = true
		        } else {
		          this.isShow = false
		        }
		    } ,
    
    },
mounted(){
	
			/*轮播*/
var swiper = new Swiper('.swiper-container', {
			      spaceBetween: 30,
			      centeredSlides: true,
			      autoplay: {
			        delay: 2500,
			        disableOnInteraction: false,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			      navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			 },
   });
		/*图片数据*/
axios.get("/itemdetail/spuInfos/10056?_=1539760304156").then(res=>{
					console.log(res.data)
					this.datalist=res.data.data.itemDetailIntroVoList
		}).catch(erro=>{
				console.log(erro)
}),
	   /*信息数据*/
axios.get("/itemdetail/skuInfos/15182?_=1539839991800").then(res=>{
				this.looplist=res.data.data.skuAttrPairs
		}).catch(erro=>{
				console.log(erro)
}),
axios.get("/recommend/item?skuId=15182&_=1539915102713").then(res=>{
	console.log(res.data)
	this.shooplist=res.data.data.skuInLists
}).catch(erro=>{
	console.log(erro)
})			

        },

     upadate(){
     	var backButton=$('.back_to_top');
         function backToTop() {
             $('html,body').animate({
                 scrollTop: 0
             }, 800);
         }
         backButton.on('click', backToTop);
      
         $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
             if ($(window).scrollTop() > $(window).height())
                 backButton.fadeIn();
             else
                 backButton.fadeOut();
         });
         $(window).trigger('scroll');

     }


    })


</script>

<style scoped lang="scss">
img{
	width:100%;
	height:100%;
}
.banner li{
	list-style:none;
	box-sizing:border-box;
}
#discountPrice{
	padding: 0.09rem 0.08rem 0rem;
    background: #fff;
   
}

#headProductTitle{
	text-align: initial;
    margin-bottom: 0.1rem
  }
.priceFormat{
font-size: 0.16rem;
color: #000;
font-family: PingFangSC-Semibold;

  }
.banner{
	display:flex;
	width:100%;
 	height: 0.96rem;
	background: yellow;
	background:url("../../static/images/danmai.png");
	background-size:cover;
	position:relative;
}
.circle{
width: 0.7rem;
height: 0.7rem;
margin:0.1rem 0.1rem 0;
border-radius: 50%;
background:url("../../static/images/yuan.jpg");
background-size:cover;
}
.name{
flex:1;
height:0.22rem;
margin:0.1rem 0.1rem 0;
line-height:0.22rem;
font-size:0.16rem;
color:#fff;
padding:0.1rem 0;
font-weight: 100;
 
}
#paragraph{
width:2.7rem;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-size:0.12rem;
 
}
#details{
width:100%;
height:100%;
margin-top:0.1rem;
}
#details p{
height: 0.5rem;
line-height:0.5rem;
background-color: white;
padding-left:0.25rem;
font-family: PingFangSC-Regular;
font-size: 16px;
color: #000000;
letter-spacing: 1px
}
#details ul{
height:100%;
 padding-left:0.25rem;
 padding-right:0.25rem;
 padding-bottom:0.2rem;
 background: white }
#details ul li{
border-top:1px dashed #ccc;
}
#details ul li span{
line-height: 0.3rem;
 height:0.3rem;
 margin:0;
 padding:0;
 color:#707070;
 vertical-align:top;
 background:white;
}
#details  ul li .name
{
display:inline-block;
width:30%;
float: left;	
}
#details  ul li .size
{
display:inline-block;
width:70%;
}
#shooping {
height:2rem;
background:red;
}
 #server .content{
height:1.76rem;
background:url("../../static/images/servicepromise_bg.png");
background-size:cover;
position:relative;
padding: 0;
color:#fff;
 }
 #server .content p:nth-of-type(1){
color: #fff;
font-size:16px;
 }
 #server .content p:nth-of-type(2){
color:#fff;
font-size:0.2rem;
 }
 #server .content .first{
left: 0;
width: 50%;
position: absolute;
top:0.27rem;
text-align: center;
height:0.94rem;
 }
#server .content .second{
	position: absolute;
right:50%;
top: 50%;
height: 50%;
transform:translateY(-50%)
}
#server .content .second img{
  height:0.7rem;
}
#server .content .first img{
width: 0.7rem;
height:0.7rem;
}
#server .content .three{
right: 0;
width: 50%;
position: absolute;
top:0.27rem;
text-align: center;
height:0.94rem;
}
#server .content .three img{
width: 0.7rem;
height:0.7rem;
}
#server .title{
color:#000
}
.infoHeader{
width: 100%;
display: flex;
justify-content: center;
margin: 0.05rem 0;
position: relative
}
.goods{
height:9rem;
background:#fff; 
color:#fff;
margin-bottom:0.32rem;

}
.goods ul{
height:9rem;
} 
.goods li{
width:50%;
float: left;
background:#fff;
}
.goods li p{
display:block;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-size:13px;
}
.goods p{
color:#979797;
margin-left:0.1rem;
}
.goods span{
text-decoration:line-through;
color:#2f2f2f;
margin-right: 0.25rem;
margin-left: 0.1rem
}
#needHelp{
width: 100%;
height: 0.25rem;
line-height: 0.25rem;
background:#fff;
clear:both;
overflow: hidden;
margin-bottom:0.32rem;
}
#needHelp a{
display: block;
height: 0.25rem;
text-decoration:none;
}
#needHelp img:nth-of-type(1){
position:fixed;
bottom:0.1rem;
right:0.1rem;
width:0.32rem;
height:0.32rem;
}
#needHelp img:nth-of-type(2){
float:right;
width:0.16rem;
height:0.16rem;
display: inline-block;
vertical-align: middle;
}
#needHelp span {
font-size: 0.16rem;
}

#needHelpText {
display:inline-block; 
color: #000;
margin-right: 0.05rem;
margin-left: 0.1rem;
line-height:0.25rem;
}
#workTime{
display:inline-block; 
color:red;
margin-right: 0.05rem;
margin-left: 0.1rem;
line-height:0.25rem;
}
</style>