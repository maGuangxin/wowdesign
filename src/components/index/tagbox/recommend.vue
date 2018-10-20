<template>
 	<div class="all">
		<swiper></swiper>
 		<div v-for="data,index in $store.state.moduleContent" class="content">
	 		<div class="page-module-title">
	 			<h1>
	 				{{data.moduleName}}			
	 			</h1>
	 			<h3>
	 				{{data.moduleDescription}}
	 			</h3>
	 		</div>
	 		<div class="page-module" v-if="data.moduleContent.banners">
	 			<div v-if="data.moduleContent.banners.length>1" class="page-module-list">
	 				<a  class="banner" href=""  v-for="banner in data.moduleContent.banners"><img :src="banner.bannerImgSrc" :alt="banner.bannerTitle"></a>
	 			</div>
	 			<div v-if="data.moduleContent.banners.length=1" class="page-module-banner">
	 				<a  class="banner" href=""  v-for="banner in data.moduleContent.banners"><img :src="banner.bannerImgSrc" :alt="banner.bannerTitle"></a>
	 				
	 			</div>
	 		</div>
	 		<div class="product-list"  v-if="data.moduleContent.products">
	 			<ul class="clear " v-if="data.moduleContent.products.length<=3">
	 				<li v-for="product in data.moduleContent.products">
	 					<a href="">
	 						<img :src="product.productImg" alt="product.productName">
	 						<p>
	 							{{product.productTitle}}
	 						</p>
	 						<span>￥
	 							{{product.sellPrice}}
	 						</span>
	 					</a>
	 				</li>
	 			</ul>
	 			<div  v-if="data.moduleContent.products.length>3" class="swiper-container productSwiper">
		 			<ul class="clear swiper-wrapper">
		 				<li v-for="product in data.moduleContent.products" class="swiper-slide">
		 					<a href="">
		 						<img :src="product.productImg" alt="product.productName">
		 						<p>
		 							{{product.productTitle}}
		 						</p>
		 						<span>￥
		 							{{product.sellPrice}}
		 						</span>
		 					</a>
		 				</li>
		 			</ul>
	 				<div class="swiper-pagination"></div>
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
  		name:'推荐'
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
		.page-module-title{
			width:100%;
			h1{
				font-size:20px;
				text-align:center;
				margin:10px 0;
			}
			h3{
				font-size:12px;
				text-align:center;
				margin:5px 0;
			}
		}
		.page-module{
			.page-module-list{
				display:flex;
				justify-content:space-between;
				a{	
					width:33%;
					display:block;
					img{
						display:block;
						width:100%;
						height:100%;
					}
				}
			}
			.page-module-banner{
				a{
					display:block;
					img{
						display:block;
						width:100%;
						height:100%;
					}
				}
			}
		}
		.product-list{
			.productSwiper{
				width:100%;
				height:150px;
			}
			ul{
				list-style:none;

				li{	
					float:left;
					width:33%;
					a{	
						text-align:center;
						font-size:12px;
						text-decoration:none;
						color:black;
						display:block;
						img{
							
							width:75px;
							height:75px;
							
						}
						p{
							text-overflow:ellipsis;
							white-space:nowrap;
							overflow:hidden;
						}
						span{
							display:block;
						}
					}
				}
			}
		}
		.page-module-more{
			text-align:center;
			a{
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
