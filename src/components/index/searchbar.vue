<template>
 	<div class="search">
 		<i></i>
 		<router-link tag="div" to="/search">
 			<i class="iconfont icon-icon-search"></i>
 			<input type="text" placeholder="搜索我的尖叫好物">
 		</router-link>
 	</div>
 	
</template>

<script>
export default {
  	name:'searchBar',
  	data(){
  		return {
  			name:'搜索'
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.search{
		height:34px;
		display:flex;
		
		align-items:center;
		padding:5px 10px;
		>i{
			
			width:65px;
			height:15px;
			
			background:url('../../assets/titleView.png') no-repeat center;
			background-size:cover;
		}
		div{
			background:#ccc;
			flex:1;
			margin-left:20px;
			border:1px solid #ccc;
			border-radius:13px;
			width:210px;
			height:25px;
			padding:0 10px;
			input{
				outline:0;
				border:0;
				background:#ccc;
				height:100%
			}
			
		}
	}
</style>