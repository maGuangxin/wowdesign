<template>
	<div>
		<div class="loginnav">
			<div class="return"><router-link tag="b" to="/index"><i class="iconfont icon-shouye"></i></router-link></div>
			<div class="login"><h4>登录</h4></div>
			<div class="reg"><router-link  tag="b" to="/my/reg">注册</router-link></div>
		</div>
		<div class="input">
			<div class="logintitle">
				<span v-for="data,index in text" @click="changecurrent(index)" :class="index===current?'border':''">{{data}}</span>
			</div>
			<ul>
				<li v-if="isshow">
					<input type="text" name="" placeholder="请输入手机号"><br>
					<input type="password" name="" placeholder="请输入密码">
					<div>忘记密码?</div>
				</li>
				<li v-if="!isshow">
					<input type="text" name="" placeholder="请输入手机号"><br>
					<input type="text" name="" placeholder="请输入验证码">
					<div>获取验证码</div>
				</li>
			</ul>
		</div>
		<div class="makesurebox">			
			<div class="makesure">确认</div>
			<div class="left"><input type="checkbox" name="">一个月内记住登录</div>
			<div class="right">快速注册</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				isshow:true,
				text:['密码登录','短信登录'],
				current:0			
			}
		},
		methods:{
			changecurrent(index){
				this.current =index
				if(this.current===0){
					this.isshow = true			
				}
				else{
					this.isshow = false			
				}
			}
		}
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
			text-align:right;
		}
	}
	.input{
		margin:0.2rem;
		background:white;
		.logintitle{
			display:flex;		
			span{
				display:block;
				height:0.4rem;
				line-height:0.4rem;
				text-align:center;
				flex:1;
				box-sizing: border-box;
				margin:0 0.3rem;
			}
			.border{
				border-bottom:2px solid #999
			}
		}
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
					outline:none
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
					outline: none;
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
		.left{
			float:left;
			height:0.4rem;
			line-height:0.4rem;
		}
		.right{
			float:right;
			height:0.4rem;
			line-height:0.4rem
		}
	}


</style>