<template>
<div>
    <openapp></openapp>
    <searchbar></searchbar>
     
    <tagbox></tagbox>
</div>
</template>
<script src="../dist/js/swiper.min.js"></script>
<script>
	
	
  
  
  
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
  import axios from "axios"
  import navswiper from './index/navswiper'
  import vuex from "vuex"
  import Vue from "vue"
  import openapp from './index/openapp'
  import searchbar from './index/searchbar'
  import tagbox from './index/tagbox'


  Vue.use(vuex)
export default {
	name:'index',
	data(){
		return {
      number:0
			
		}
	},
  methods:{
  },
  mounted(){
    
  },
  computed:{
  },
	components:{ 
    
    openapp,
    searchbar,
    tagbox
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  
</style>
