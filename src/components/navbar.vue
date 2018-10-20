<template>
 	<div>
		<ul>
			<router-link tag="li" to="/index" activeClass="current"><i class="iconfont icon-icon-home"></i>首页</router-link>
			<router-link tag="li" to="/category" activeClass="current"><i class="iconfont icon-icon-work"></i>分类</router-link>
			<router-link tag="li" to="/cart" activeClass="current"><i class="iconfont icon-icon-cart"></i>购物车</router-link>
			<router-link tag="li" to="/msg" activeClass="current"><i class="iconfont icon-icon-msg2"></i>消息</router-link>
			<router-link tag="li" to="/my" activeClass="current"><i class="iconfont icon-icon-my"></i>我</router-link>
		</ul>
 	</div>
 	
</template>

<script>
export default {
  	name:'navbar',
  	data(){
  		return {
  			name:'navbar'
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	div{
		width:100%;
		position:fixed;
		bottom:0;
		z-index:50;
		ul{
			display:flex;
			list-style:none;
			box-shadow:0 0 1px black;
			background:white;
			li{
				text-align:center;
				height:46px;
				line-height:23px;
				flex:1;
				float:left;
				i{
					display:block;
				
				}
			}
		}
		
	}
	.current{
		font-weight:600;
		background:#ccc;
		color:white;
	}
</style>