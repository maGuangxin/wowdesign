<template>
	<div>
		<!-- 动态头部 -->
		<div class="header">
			<span class="left" @click="backIndexClick()"><i class="iconfont icon-shouye"></i></span>
			<!-- <h3>{{title}}</h3> -->
			<h3>{{this.$store.state.title}}</h3>
			<span class="right" @click="backCategoryClick()"><i class="iconfont icon-fenlei"></i></span>
		</div>
		<!-- 轮播导航 -->
		<div class="swiper-container" v-if="this.$store.state.isshow1">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide">All</div>
		      <div class="swiper-slide">沙发</div>
		      <div class="swiper-slide">椅凳</div>
		      <div class="swiper-slide">桌几</div>
		      <div class="swiper-slide">柜架</div>
		      <div class="swiper-slide">休闲椅</div>
		      <div class="swiper-slide">餐桌</div>
		      <div class="swiper-slide">茶几和边桌</div>
		      <div class="swiper-slide">书桌</div>
		      <div class="swiper-slide">床</div>
		    </div>
		</div>
		<div class="swiper-container" v-if="this.$store.state.isshow2">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide">All55565</div>
		      <div class="swiper-slide">沙发</div>
		      <div class="swiper-slide">椅凳</div>
		      <div class="swiper-slide">桌几</div>
		      <div class="swiper-slide">柜架</div>
		      <div class="swiper-slide">休闲椅</div>
		      <div class="swiper-slide">餐桌</div>
		      <div class="swiper-slide">茶几和边桌</div>
		      <div class="swiper-slide">书桌</div>
		      <div class="swiper-slide">床</div>
		    </div>
		</div>
		<!-- 选项卡 -->
		<ul class="tabs">
			<li  v-for="data,index in cardList" @click="handleChange(data,index)" :class
			="index===current?'tab-link':''">
				<a>
					{{data.name}}					
				</a>
			</li>
		<div class="nextop">
        	<p><i class="iconfont icon-xiaotuziCduan_1"></i></p>
			<p><i class="iconfont icon-xiaotuziCduan_"></i></p>
		</div>
		</ul>
		<keep-alive>
			<component :is="who"></component>
		</keep-alive>

		<uptonew></uptonew>

	</div>	
</template>

<script>
	// 引入接口
	import axios from 'axios';
	import Swiper from "swiper";
	import uptonew from "./uptonew";
	import salesvolume from "./salesvolume";
	import price from "./price";
	import "swiper/dist/css/swiper.css"
	// 导出接口
	export default{

		data:function(){
			return {
				dataList:[],
				totalResult:0,
				loading:false,
				pageNumber:1,
			    scroll: '',
			    who:'',
       		    isShow: false,
				// mytext:"正在加载....",
				cardList:[
					{
						name:'上新',
						realname:'uptonew'

					},
					{
						name:'销量',
						realname:'salesvolume'
						
					},
					{
						name:'价格',
						realname:'price'
						
					}
				],
				current:0

			}
		},
		components:{
			uptonew,
			salesvolume,
			price
		},
		mounted:function(){
			window.addEventListener('scroll', this.menu)
			var swiper = new Swiper('.swiper-container',{
				slidesPerView: 4,
				spaceBetween : 10,
				slidesOffsetAfter : 100,
				roundLengths : true
			});
			
		},
		methods:{
			handleChange(data,index){
				this.who=data.realname
				this.current = index;
				console.log(data.name)
			},
			backCategoryClick(){
				console.log('backCategoryClick')
				this.$router.push('/category')
			},
			backIndexClick(){
				console.log('回到首页')
				this.$router.push('/index')
			}

		}
	}
</script>

<style scoped lang="scss">
	ul{
		width:100%;
		overflow:hidden;
	}
	.header{
		height:40px;
	}
	.left{
		display:block;
		position:absolute;
		top:5px;
		left:30px;
		i{
			font-size:25px;
		}
	}
	.right{
		display:block;
		position:absolute;
		top:5px;
		right:30px;
		i{
			font-size:25px;
		}
	}
	h3{
		position:absolute;
		left:50%;
		top:5px;
		font-weight:bold;
	}
	.swiper-container{
		background-image:url('/static/images/10.jpg');
		background-repeat:no-repeat;
		background-size:cover;
		height:100px;		
	}
	.swiper-slide{			
		height:90px;
		background: rgba(255, 255, 255, 0.2);
		color:#fff;
		line-height:90px;
		text-align:center;
		border:1px solid #ccc;
		margin-top:4px;
	}
	.tabs{
		position:relative;
	}
	.tabs li { 
	   float: left;
	   width:50px;
	   height:40px; 
	   line-height:40px;
	   font-size:16px;
	   margin:0 35px;
	   color: #ccc; 
	   
	  } 
	  .tabs .tab-link { 
	   display: block; 
	   text-align: center; 
	   color: #000; 
	   text-decoration:none;
	   border-bottom:3px solid #000 ;
	  } 
	  .tabs .nextop{
	  	position:absolute;
	  	right:40px;
	  	top:3px;
	  	p{
	  		width:10px;
	  		height:10px;
	  		color:#ccc;
	  	}
	  }
</style>