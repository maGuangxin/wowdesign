<template>
	<div class="swiper-container bannerSwiper">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="data,index in $store.state.bannerList"><a :href="data.bannerLinkUrl"><img :src="data.bannerImgSrc" :alt="data.bannerTitle"></a></div>  			
	    </div>
	    <div class="swiper-pagination"></div>

 	</div>
</template>

<script>
	import Swiper from "swiper"
	import axios from 'axios'
	import 'swiper/dist/css/swiper.min.css'
export default {
  	name:'swiper',
  	data(){
  		return {
  			name:'swiper',
  			list:[]
  		}
  	},
  	components:{
  		
  	},
  	
    mounted(){
		console.log('swiper')
    },
    updated(){
    	new Swiper ('.bannerSwiper', {
    	    pagination: {
    	      el: '.swiper-pagination'
    	    },
    	    autoplay:true
    	})
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.swiper-container {
	    width: 100%;
	    height: 250px;
		a{
			display:block;
			width:100%;
			height:100%;
		    img{
		    	display:block;
				width:100%;
				height:100%;
		    }
			
		}
	}  
</style>
