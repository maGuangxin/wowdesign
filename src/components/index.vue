<template>
 	<div>
 		{{name}}
		<adbar></adbar>
		<searchbar></searchbar>
		<tagbox></tagbox>
		<footer></footer>	
 	</div>
</template>

<script>
	import adbar from './index/adbar'
	import searchbar from './index/searchbar'
	import tagbox from './index/tagbox'
	import footerbar from './index/footerbar'
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
  		tagbox,
  		footerbar
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
