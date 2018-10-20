<template>
 	<div>
    
    <adbar></adbar>
 		<searchbar></searchbar>
    <tagbox></tagbox>
    <router-view></router-view>
 	</div>
</template>

<script>
	import adbar from './index/adbar'
	import searchbar from './index/searchbar'
  import tagbox from './index/tagbox'
	
  
  
export default {
  	name:'index',
  	data(){
  		return {
  			name:'首页'
  		}
  	},
  	components:{
  		adbar,
  		searchbar,
  		tagbox
  	},
    mounted(){
      
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
