<template>
<div>
  <div class="brand-details">
	    <div class="images">
		 <img src="../../static/images/yuan.jpg" alt="">
		</div>
		 <h3><span>Normann Copenhagen</span></h3>
		<p class="text-left">
		<span style="text-align: justify;color: #666">Normann Copenhagen是丹麦设计公司，公司在简约时尚的设计领域中秉承原创，突破和优异的设计理念。或者换句话来说，就是公司致力于突破传统观念的束缚，通过创新和优秀的设计理念来达到发扬公司品牌形象的目的。
		公司代表的作品集是由广泛且持续发展的多功能家具系列，灯具系列，纺织品系列和家具备件组成。
		Normann Copenhagen展现的独特产品设计包括配饰、吊灯、橱柜、边桌、玻璃器皿和钟表。1999年Jan Andersen和Poul Madsen强强联手，力争在设计领域发挥作用。Normann Copenhagen从一间小店铺起步，2005年搬到了一座1700平米的老影院。有旗舰店是事实，Normann Copenhagen除荣获时髦店铺的称号外，还靠产品设计赢得了超过40个奖项。</span>
		</p>
</div>	
<div class="goods">
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  nfinite-scroll-immediate-check="false"
  infinite-scroll-distance="10">
	  
   <li v-for="item in dataList">
 	   <img :src="item.productImg">
 	   <p>{{item.productTitle}}</p>
 		<span>{{item.sellPrice}}</span>
 	</li>
</ul>
<p class="footer">{{mytext}}</p>
</div>
</div>
	
</template>
<script>
import axios from "axios"
	export default({
	 data(){
			return{
			   dataList:[],
				loading:false,
				currentPage:0,
				mytext:"正在加载......"
			     }
		   },
	methods:{

       loadMore(){
				//滚动到底部会调用
				// console.log("到底了")

				//ajax 请求新数据， 合并到之前的数组， 数组改变， 页面重新渲染
			
				this.currentPage++;
			   //	/brand/810/products?pageSize=10&${this.currentPage}&_=1539948474658
				axios.get(`/brand/810/products?pageSize=10&currentPage=${this.currentPage}&_=1539995037395`).then(res=>{
					// console.log(res.data.data);
					this.dataList = [...this.dataList,...res.data.data]
					 //追加新数组到老数组
				      })
				if(this.currentPage>this.totalResult){
					this.loading = true;//禁用
					this.mytext="没有更多的了";
					return ;
				  }
			    }


		     },
	
	})
</script>
<style>
.brand-details .images{
text-align: center;

}
.brand-details img{
width:1.5rem;
	border-radius:50%;
margin-top: 0.16rem;
margin-bottom: 0.16rem;
}
.brand-details h3{
text-align: center;
font-size: 0.24rem;
}
.brand-details p{
font-size:16px;
}
.goods{
height:100%;
background:#fff; 
color:#fff;
margin-bottom:0.32rem;
 }
.goods ul{
height:100%;
overflow:hidden;
} 
 .goods li{
width:50%;
float: left;
background:#fff;
 }
 .goods li p{
display:block;
overflow: hidden;
white-space: nowrap;
font-size:13px;

 }
 .goods p{
color:#979797;
margin-left:0.1rem;
 }
.goods span{/* 
 	text-decoration:line-through; */
color:#2f2f2f;
margin-right: 0.25rem;
margin-left: 0.1rem
}
.goods img{
width:100%;
height:100%;
}
.footer{
height:0.4rem;
color:#000;
line-height:0.4rem;
font-size:16px;
 }
</style>