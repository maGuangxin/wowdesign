<template>
 	<div class="all">
		<swiper></swiper>
 		<div v-for="data,index in $store.state.moduleContent" class="content" >
	 		<div v-if="data.moduleContent.bannerImgSrc" class="adBanner">
	 			<img :src="data.moduleContent.bannerImgSrc" alt="">
	 		</div>
	 		<div v-if="data.moduleContent.products" class="product-list">
	 			<div class="clear">
	 				<div v-for="product,index in data.moduleContent.products" v-if="index<6">
	 					
	 						<img :src="product.productImg" alt="product.productName">
	 						<p>
	 							{{product.productTitle}}
	 						</p>
	 						<span>￥
	 							{{product.sellPrice}}
	 						</span>
	 					
	 				</div>
	 			</div>
	 		</div>
	 		
	 		
	 		<div class="page-module-more" v-if="data.moduleContent.products"><a href="">查看全部</a></div>
 		</div>
 	</div>
</template>

<script>
	import swiper from '../../swiper'
	import axios from 'axios'
	import 'swiper/dist/css/swiper.min.css'
	import Swiper from "swiper"

export default {
  data(){
  	return {
  		name:'活动'
  	}
  },
  
  components:{
  	swiper
  },
  mounted(){
  	console.log('recommend')
  	axios.get(this.$store.state.ajaxUrl).then(resp=>{
  		this.$store.dispatch('getBannerData',resp.data.data.modules[0].moduleContent.banners)       
  		this.$store.dispatch('getModuleContent',resp.data.data.modules) 
  	}).catch(error=>{
  	  console.log(error)
  	})
  },
  updated(){
  	new Swiper ('.productSwiper', {
  	    pagination: {
  	      el: '.swiper-pagination'
  	    },
  	    slidesPerView:4,
  	    slidesPerGroup:4
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.all{
	background:#eee;
	padding-bottom:70px;
	.content{
		width:100%;
		margin-top:20px;
		background:white;
		padding:20px 0;
		
		.adBanner{
			width:100%;

			img{
				width:100%;
			}
		}
		.product-list{
			
			>div{
				
				div{
					float:left;
					box-sizing:border-box;
					border:1px solid #eee;
					list-style:none;
					width:50%;
					padding:20px 0;
					
					img{
						display:block;
						width:180px;
						height:180px;
						
						
					}
					p{	
						height:20px;
						line-height:20px;
						text-overflow:ellipsis;
						white-space:nowrap;
						overflow:hidden;
						width:100%;
					}
					span{
						height:20px;
						line-height:20px;
						display:block;
						text-align:center;
						width:100%;
					}
					
						
				}
			}
			
		}
		.page-module-more{
			text-align:center;
			>a{
				font-size:12px;
				color:black;
				text-decoration:none;
				padding:5px;
				display:block;
			}
		}
	}
}
</style>
