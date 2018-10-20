<template>
 	<div class="all">
		
 		<div v-for="data,index in this.$store.state.imglist.modules" v-if="$store.state.imglist.modules[0]===data?false:true" class="content" >
 			<div v-if="data.moduleContent.products">
 				<h2>{{data.moduleName}}</h2>
 			</div>
				<div class="meizhoutuijian" v-if="data.moduleDescription">{{data.moduleDescription}}</div>
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
	 						<span  class="originalPrice" v-if="product.originalPrice">￥{{product.originalPrice}}</span>
	 					
	 				</div>
	 			</div>
	 		</div>
	 		
	 		
	 		<div class="page-module-more" v-if="data.moduleContent.products"><a href="">查看全部</a></div>
 		</div>
 	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	import Swiper from "swiper"
  	import "swiper/dist/css/swiper.css"
		export default{
			updated(){
				var swiper = new Swiper('.a',{
				 slidesPerView : 3,	
				 spaceBetween : 20,	
				});
			},
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.all{
	background:#eee;
	padding-bottom:0.7rem;
	.content{
		width:100%;
		margin-top:0.2rem;
		background:white;
		padding-top:0.2rem;
		text-align:center;
		h2{
			height:0.28rem;
			line-height:0.28rem;
			margin:0.16rem 0;
		}
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
					padding-top:0.2rem;
					
					img{
						
						width:1.8rem;
						height:1.8rem;
						
						
					}
					p{	
						height:0.2rem;
						line-height:0.2rem;
						text-overflow:ellipsis;
						white-space:nowrap;
						overflow:hidden;
						width:100%;
					}
					span{
						height:0.2rem;
						line-height:0.2rem;
						
						text-align:center;
						width:100%;
					}
					span.originalPrice{
						color:#ccc;
						text-decoration: line-through;
					}
					
						
				}
			}
			
		}
		.page-module-more{
			text-align:center;
			>a{
				font-size:0.12rem;
				color:black;
				text-decoration:none;
				padding:0.1rem 0;
				display:block;
				
			}
		}
	}
}
</style>
