<template>
 	<div>
 		{{name}}
		<temp></temp>
		
 	</div>
</template>

<script>
	import temp from './search/template'
	
export default {
  	name:'index',
  	data(){
  		return {
  			name:'首页'
  		}
  	},
  	components:{
  		temp
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
