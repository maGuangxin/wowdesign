<template>
	<div>
		<div class="loginnav">
			<div class="return"></div>
			<div class="login"><h4>注册</h4></div>
			<div class="reg"><router-link tag="b" to="/my/login">登录</router-link></div>
		</div>
		<div class="input">
			<ul>
				<li>
					<input type="text" name="" placeholder="请输入手机号"><br>
					<input type="password" name="" placeholder="请输入验证码">
					<div>换一张</div>
				</li>
			</ul>
		</div>
		<div class="makesurebox">			
			<div class="makesure">注册</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
	}
</script>
<style type="text/css" scoped lang="scss">
	.loginnav{
		background: white;
		height:0.4rem;
		display:flex;
		div{
			flex:1;
			height:0.4rem;
			line-height: 0.2rem;
			padding:0.1rem;
			box-sizing: border-box
		}
		.login{
			text-align: center
		}
		.reg{
			text-align:right
		}
	}
	.input{
		margin:0.2rem;
		background:white;
		ul{
			list-style: none;
			padding: 0 0.2rem;
			li{
				position:relative;
				input{
					width:100%;
					border:0;
					height:0.4rem;
					border-bottom: 1px solid #f5f5f5;
				}
				div{
					height:0.4rem;
					line-height:0.4rem;
					font-size: 14px;
					width:0.8rem;
					position:absolute;
					z-index: 100;
					right:0;
					bottom:0;
				}
			}
		}
	}	
	.makesurebox{
		margin:0.2rem;
		.makesure{
			width:100%;
			background:#ffd444;
			height:0.4rem;
			line-height:0.4rem;
			text-align:center
		}
	}


</style>