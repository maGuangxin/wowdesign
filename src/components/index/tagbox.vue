<template>
 	<div class="tagbox">
 		<ul class="titlelist clear">
        	<li v-for="data,index in dagelist" @click="chagneshow(index,data.path)" >
				<a :class="current===index?'current':''">
        			{{data.name}}
					
				</a>
        	</li>
     	 </ul>
     	<navswiper :key="number"></navswiper>
		<recommend v-if="current === 0?true:false"></recommend>
	    <furniture v-if="current === 1?true:false"></furniture>
	    <HomeFurnishing v-if="current === 2?true:false"></HomeFurnishing>
	    <activity v-if="current === 3?true:false"></activity>
 	</div> 	
</template>

<script>
	import navswiper from './navswiper'
	import recommend from "./recommend"
	import furniture from "./furniture"
	import activity from "./activity"
	import HomeFurnishing from "./HomeFurnishing"
	import axios from "axios"

export default {
  	name:'tagBox',
  	data(){
  		return {
			number:0,
			index:0,
			isshow:true,
			dagelist:[
				{
				name:'推荐',
				path:"/v2/page?pageId=1&tabId=1&_=1539826826594"
				},
				{
				name:'家具',
				path:"/v2/page?pageId=1&tabId=10005&_=1539826829243"
				},
				{
				name:'家居',
				path:"/v2/page?pageId=1&tabId=10006&_=1539826876643"
				},
				{
				name:'活动',
				path:"/v2/page?pageId=1&tabId=10010&_=1539826980457"
				} 
			],
			current:0,
			imglist:[]
  		}
  	},
  	methods:{
  	  chagneshow(id,path){
  	    this.current = id
  	    this.imglist = this.$store.state['imglist'+(this.current)]
  	    this.$store.dispatch('toget',path)
  	    this.index = id  
		this.number = Math.random()
    
  	    // console.log(this.$store.state.imglist.modules[0].moduleContent.banners[0].bannerImgSrc)
  	      console.log(this.$store.state.imglist.modules[1].moduleName)
  	  }
  	},
  	mounted(){
  	  axios.get("/v2/page?pageId=1&tabId=1&_=1539826826594").then((res)=>{
  	    this.$store.commit("changelist",res)
  	  })
  	},
  	components:{
  		navswiper,
		recommend,
		furniture,
		activity,
		HomeFurnishing
	   
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.tagbox{
		ul.titlelist{
			background:white;
			height:0.42rem;
			width:100%;
			list-style: none;
			overflow: hidden;
			li{
				width:25%;
				float: left;
				text-align: center;
				height:0.4rem;
				line-height:0.4rem;
				a{
					display:inline-block;
					width:0.3rem;
					padding:0 0.1rem;
					
				}
				.current{
					border-bottom:0.02rem solid black;
				}
			}
		}
	}
</style>