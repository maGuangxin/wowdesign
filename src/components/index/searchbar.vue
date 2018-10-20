<template>
 	<div>
 		<div class="inside">
	    	<div class="nav clear">
		        <div class="logobox">      
		        	<img class="logo" src="../../assets/titleView.png">
		    	</div> 
	        	<div class="inputbox clear">
	          		<img class="biggass" src="../../assets/biggass.png">
	          		<input class="serch" type="text" name="">
	    		</div>       
    		</div>
    	</div>
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
	.inside{
		background:white;
		position:relative;
	 	padding:0.1rem 0;
	 	width:100%;

	 	div.nav{
	 		height:0.2rem;
	 		display:flex;
	 		div.logobox{
	 			
	 			margin:0 0.1rem;
	 			img{
	 				
	 				height:100%;
	 			}
	 		}
	 		div.inputbox{
	 			border-radius:0.09rem;
	 			margin:0 0.1rem;
	 			flex:1;
	 			background:#f5f5f5;
	 			height:100%;
	 			line-height:100%;
	 			img{
	 				margin-left:0.1rem;
					height:100%;
					float:left;
	 			}
	 			input{
					border:0;
					background:#f5f5f5;
					outline:none;
					float:left;
	 			}
	 		}
	 	}
	}
</style>