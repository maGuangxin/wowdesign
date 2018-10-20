<template>
	<div>
		<i  @click="scroll2Top" v-show="scroll"></i>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				scroll:false
			}
		},
		mounted(){
			window.onscroll=()=>{
				var scroll = document.body.scrollTop||document.documentElement.scrollTop
				if(scroll>3000){
					this.scroll = true
				}
			}
		},
		methods:{
			scroll2Top(){
				document.body.scrollTop?document.body.scrollTo=0:document.documentElement.scrollTop=0
				this.scroll = false
			}
		}
	}
</script>
<style scoped>
	i{
		display: block;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		position:fixed;
		right:10px;
		bottom: 100px;
		z-index: 100;
		background: url('../assets/backTop.png') center no-repeat;
		background-size: cover;
	}
</style>