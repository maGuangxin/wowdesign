<template>
 	<div v-if="isShow" class="adbar">
 		<i class="iconfont icon-icon-closes l" @click="isShow=!isShow" ></i>
 		<div class="r">
	 		<i></i>
			<div class="title">
				<p>尖叫设计App</p>
				<p>生活即风格</p>
			</div>
			<a href="#">立即打开</a>
 			
 		</div>
 	</div>
 	
</template>

<script>
export default {
  	name:'adBar',
  	data(){
  		return {
  			name:'广告',
  			isShow:true
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.adbar{
		display:flex;
		align-items:center;
		border-bottom:1px solid black;
		i{
			width:20%;
			margin-left:10px;
		}
		div.r{
			i{
				width:30px;
				height:30px;
				background:url('../../assets/logo.png') no-repeat center;
				background-size:cover; 
				margin-right:10px;
			}
			.title{
				p{
					height:25px;
					line-height:25px;
					font-size:16px;
				}
			}
			flex:1;
			display:flex;
			align-items:center;
			a{		
				position:absolute;
				right:10px;
				text-decoration:none;
				width:100px;
				color:black;
				background:yellow;
				text-align:center;
				height:30px;
				line-height:30px;
			}
		}

		}
</style>