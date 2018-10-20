<template>
 	<div>
		<ul>
			<router-link tag="li" to="/index" activeClass="current"><i class="iconfont icon-shouye"></i>首页</router-link>
			<router-link tag="li" to="/category" activeClass="current"><i class="iconfont icon-fenlei" @click="handleClick"></i>分类</router-link>
			<router-link tag="li" to="/cart" activeClass="current"><i class="iconfont icon-daohanggouwuche"></i>购物车</router-link>
			<router-link tag="li" to="/msg" activeClass="current"><i class="iconfont icon-xiaoxi"></i>消息</router-link>
			<router-link tag="li" to="/my" activeClass="current"><i class="iconfont icon-wode"></i>我</router-link>
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
  	},
  	methods:{
  		handleClick(){
  			console.log('aaa')
  			this.$store.commit('changetitle','')
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	div{
		position:fixed;
		bottom:0;
		z-index:50;
		width:100%;
		ul{
			width:100%;
			display:flex;
			list-style:none;
			box-shadow:0 0 1px black;
			background:white;
			li{
				text-align:center;
				height:0.46rem;
				line-height:0.23rem;
				width:20%;
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