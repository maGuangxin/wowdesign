<template>
	<div class="recommendall">
		<div class='recommend' v-for="data,index in this.$store.state.imglist.modules" v-if="$store.state.imglist.modules[0]===data?false:true">
			<div class="recommendinside">				
				<div>
					<h2>{{data.moduleName}}</h2>
					<h3 v-if="data.moduleDescription">{{data.moduleDescription}}</h3>
				</div>
				<div class="onebannner" v-for="info in data.moduleContent.banners" v-if="data.moduleContent.banners.length<=1">
					<img  :src="info.bannerImgSrc">
				</div>
				<div class="bannerbox">				
					<div v-for="info,index in data.moduleContent.banners" v-if="data.moduleContent.banners.length==2&&index==0" class="floatbanners">
						<img class="somebannner" :src="info.bannerImgSrc">
					</div>
					<div v-for="info,index in data.moduleContent.banners" v-if="data.moduleContent.banners.length>2" class="floatbanners">
						<img class="somebannner" :src="info.bannerImgSrc">
					</div>
				</div>
				<div class="swiperBanner" >
					 <!-- Swiper -->
					<div v-if="data.moduleContent.banners||index===1" class="swiper-container a"  >
						<div class="swiper-wrapper">
						  <div class="swiper-slide goodlist" v-for="info1 in data.moduleContent.products">
						  	<img :src="info1.productImg">
						  	<p class="prizeOrSlogan">
						  		<span v-if="info1.productName">{{info1.productName}}</span>
						  		
						  	</p>
						  	<p>
						  		<span v-if="info1.sellPrice">￥{{info1.sellPrice}}</span>
						  		<span class="originalPrice" v-if="info1.originalPrice">￥{{info1.originalPrice}}</span>
						  	</p>
						  </div>
						</div>
					</div>
				  <div v-else class="nobanner">
				      <div class="nobannerBox clear">
				        <div class="nobannergoodlist" v-for="info1,index in data.moduleContent.products" v-if="index<6">
				        	<img :src="info1.productImg" >
				        	<span v-if="info1.productName"><p class="nobannerp" >{{info1.productName}}</p></span>
				        	<label v-if="info1.sellPrice"><span>￥{{info1.sellPrice}}</span></label>
				        	<label v-if="info1.originalPrice"><span>￥{{info1.originalPrice}}</span></label>
				        </div>
				      </div>

				  </div>
				</div>
				<div v-if="data.moduleContent.products"><div class="watchall" v-if="data.moduleContent.products.length>3">查看全部</div></div>
			</div>
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
<style type="text/css" scoped lang="scss">
	.recommendall{
		padding-bottom:0.5rem;
		.recommend{
			background:white;
			padding-bottom:0.2rem;
			margin-bottom:0.2rem;

			.recommendinside{
				text-align:center;
				padding:0.16rem 0.16rem 0;
				h2{
					font-size:0.2rem;
					margin:0.16rem 0;


				}
				h3{
					font-weight:100;
					font-size:0.14rem;
					margin-bottom:0.1rem;
				}
			}
			.onebannner{
				img{
					width:100%;
				}
			}
			.bannerbox{
				display: flex;
				
				width:100%;
				.floatbanners{
					flex:1;
					margin-right:2px;
					img{
						width:100%;
					}
				}

			}
			.swiperBanner{
				.nobanner{
					.nobannerBox{
						.nobannergoodlist{
							float:left;
							width:50%;
							img{
								width:100%;
							}
							p{
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								.originalPrice{
									text-decoration: line-through;	
								}
							}
						}
					}
				}
				.goodlist{
					img{
						width:100%;
					}
					p{
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						.originalPrice{
							text-decoration: line-through;	
						}
					}
				}
			}
			.watchall{
				margin-top:0.2rem;
				font-size:0.12rem;
			}
		}
	}
	
</style>