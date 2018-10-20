<template>
	<div>
		<ul
		  v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-immediate-check= "false"
		  infinite-scroll-distance="0">
			<li v-for="data in dataList" class="lf">
				<img :src="data.productImg" alt="">
				<p>{{data.productName}}</p>
				<span>￥{{data.sellPrice}}</span>
				<p>{{data.prizeOrSlogan}}</p>
			</li>
		</ul>	
		<!-- 加载底部显示 -->
		<p class="footer">{{mytext}}</p>
		<!-- 置顶 -->
		<div class="go-2-top" v-show="isShow" v-on:click="handelClick()">
		<img src="/static/images/backTop.png" alt=""></div>

	</div>	
</template>

<script>
	// 引入接口
	import axios from 'axios';
	import "swiper/dist/css/swiper.css"

	// 导出接口
	export default{

		data:function(){
			return {
				dataList:[],
				totalResult:0,
				loading:false,
				pageNumber:1,
			    scroll: '',
			    who:'',
       		    isShow: false,
				mytext:"正在加载....",
			}
		},
		
		mounted:function(){
		 window.addEventListener('scroll', this.menu)
		 console.log( this.$route.params.categoryId)
		 axios.get(`/pages/category/${this.$route.params.categoryId}?pageNumber=1&orderBy=sales&sort=desc&__=1540023974255`).then((res) => {
		 	 console.log(res.data)
		 	  this.dataList = res.data.data.products;
		 	  console.log(res.data.data.totalResult)
		 	  this.total = res.data.data.totalResult
		  }).catch(function(error) {
		      console.log(error);
		  });

		},
		methods:{
			handelClick(){
			  var id = setInterval(function(){
				var current = document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
				if(current === 0 ){
					clearInterval(id);
				}
				document.body.scrollTop = current - 300;
				document.documentElement.scrollTop = current - 300;
			  },100)
			},
			menu(){
		        this.scroll = document.body.scrollTop||document.documentElement.scrollTop;
		        // console.log(this.scroll)
		        if (this.scroll >= 800) {
		          this.isShow = true
		        } else {
		          this.isShow = false
		        }
		    } ,
			loadMore(){
				//滚动到底部会调用
				console.log("到底了")
				//ajax 请求新数据， 合并到之前的数组， 数组改变， 页面重新渲染
				this.pageNumber++;
				axios.get(`/pages/category/${this.$route.params.categoryId}?pageNumber=${this.pageNumber}&orderBy=onShelfTime&sort=desc&_=1539845220121`).then(res=>{
					console.log(res.data);
					this.dataList = [...this.dataList,...res.data.data.products] //追加新数组到老数组
				})
				if(this.pageNumber>this.totalResult){
					this.loading = true;//禁用
					this.mytext =  "没有更多的了";
					return ;
				}
			},

		},
	}
</script>

<style scoped lang="scss">
	ul{
		overflow:hidden;
	}
	.lf{
		width:49.7%;
		height:245px;
		float:left;
		border-right:1px solid #ccc;
		border-bottom:1px solid #ccc;
		img{
			width:100%;
		}
		p{
			font-size:12px;
			color:#ccc;
			text-overflow:ellipsis;
			overflow:hidden;
			white-space: nowrap;
		}
		span{
			font-size:14px;
		}
	}
	.footer{
		width:100%;
		height:100px;
		font-weight:bold;
		line-height:60px;
		text-align:center;
	}
	.go-2-top{
		width:40px;
		height:40px;
		background-color:#fff;
		border:1px solid #ccc;
		border-radius:50%;
		position:fixed;
		bottom:45px;
		right: 20px;
		cursor:pointer;
		img{
			width:100%;
			height:100%;
		}
	}
	// .tabs li { 
	//    float: left;
	//    width:50px;
	//    height:40px; 
	//    line-height:37px;
	//    font-size:16px;
	//    margin:0 35px;
	//   } 
	//   .tabs .tab-link { 
	//    display: block; 
	//    text-align: center; 
	//    color: #ccc; 
	//    text-decoration:none; 
	//   } 

	//   .tabs .tab-link.active { 
	//    border-bottom:3px solid #000; 
	//    color:#000;
	//    transition:.3s; 
	//   } 
</style>