<template>
	<div>
		
<!-- Swiper -->
    <div class="swiper-container bannerSwiper" v-if="this.$store.state.imglist.length===0?false:true" >
      <div class="swiper-wrapper">
        <!-- 这里有一个渲染错误 报错不影响功能 -->
        <div class="swiper-slide" v-for="data in this.$store.state.imglist.modules[0].moduleContent.banners"><img :src="data.bannerImgSrc"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"><span></span></div>
    </div>

	</div>
</template>
<script src="../dist/js/swiper.min.js"></script>
<script type="text/javascript">
	import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
	
	export default {
    data(){
      return{
      }
    },
    updated(){  
      this.$nextTick(()=>{
        var myswiper = new Swiper('.bannerSwiper', {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  loop: true,
                   pagination: {
                     el: '.swiper-pagination',
                     clickable: true,
                   },
                   autoplay: {
                       delay: 2000,
                       disableOnInteraction: false,
                   }
              });           
      })
    }
	}
</script>
<style scoped type="text/css" lang="scss">
.bannerSwiper{
  padding-bottom: 0.1rem;
	 img{
    width: 100%;
    height: 100%;
   }
  
}
</style>