<template>
 	<div>
		<ul>
			<li><span class="iconfont icon-shouye"></span>首页</li>
			<li><span class="iconfont icon-fenlei"></span>分类</li>
			<li><span class="iconfont icon-daohanggouwuche"></span>购物车</li>
			<li><span class="iconfont icon-xiaoxi"></span>消息</li>
			<li><span class="iconfont icon-wode"></span>我</li>
		</ul>
 	</div>
 	
</template>
<script>
export default {
  	name:'adBar',
  	data(){
  		return {
  			name:'足部导航'
  		}
  	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		padding:0;
		margin:0;
	}
	body{
		width:100%;
	}
	div{
		position: fixed;
		z-index: 100;
		width:100%;
		bottom:0;
		left:0;
		background: white;
		padding:0.5rem 0;
	}
	ul{
		width:100%;
		list-style:none;
		overflow: hidden;
	}
	li{
		width:20%;
		float:left;
		text-align: center;
	}
	span{
		display: block;
	}
</style>