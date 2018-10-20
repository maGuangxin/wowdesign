<template>
	<div v-if="isshow">
		<ul class="clear">
			<li class="icon" @click="isshow=!isshow"><i class="iconfont icon-tuichu"></i></li>
			<li class="applogo"><img src="../../assets/applogo.png"></li>
			<li class="text">
				<p>
					尖叫设计APP
				</p>
				<p>
					生活即风格
				</p>
			</li>
			<li class="openapp">
				<a href="">立即打开</a>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				isshow:true
			}
		}
	}
</script>
<style type="text/css" scoped lang="scss">	
div{
	background:white;
	padding:0.02rem 0;
	border-top:1px solid black;
	border-bottom:1px solid black;
	ul{
		list-style: none;
		width: 100%;
		margin:0.10rem 0;
		li{
			float: left;
			text-align:center;
			vertical-align:middle;
			height:0.42rem;
		}
		li.icon{
			i{
				font-size: 0.21rem;
				margin:0 0.10rem;
				line-height:0.42rem;
			}
		}
		li.applogo{
			line-height:0.42rem;
			img{
				
				width:0.32rem;
				vertical-align:middle;
				margin-right: 0.10rem;
			}
		}
		li.text{

			p{
				font-size:0.16rem;
				
			}
		}
		li.openapp{
			float:right;
			margin-right:0.2rem;
			background: #ffd444;
			text-align: center;
			line-height:0.44rem;
			a{
				text-decoration:none;
				color:black;
				display:block;
				padding:0 0.2rem;
			}
			
		}
	}
}
	
	// ul{
	// 
	// }
	// li{
	// 	
	// }
	// .text>p{
	// 	
	// }
	// .applogo>img{
	// 	
	// }
	// .openapp{
	// 	
	// }
</style>