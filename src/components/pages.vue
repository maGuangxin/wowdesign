<template>
	<div>
		
		<router-view></router-view>
		{{name}}
	</div>
</template>
<script>
	export default {
		data(){
			return {
				name:'pages'
			}
		}
	}
</script>
<style>
	
</style>