<template>
 	<div>
 		<ul class="clear">
 			<li v-for="data,index1 in list"><span v-for="itemname,index in data" @click="isWho(index,index1)" :class="currentlist[index1]">{{itemname}}</span></li>
 		</ul>
 		

 		<component :is="who"></component>	
 	</div>
</template>

<script>
  
	import recommend from './tagbox/recommend'
	import furniture from './tagbox/furniture'
	import home from './tagbox/home'
	import activity from './tagbox/activity'
	import axios from 'axios'

export default {
  	name:'tagBox',
  	data(){
  		return {
  			name:'选项卡',
  			who:"recommend",
  			list:[{'recommend':'推荐'},{'furniture':'家具'},{'home':'家居'},{'activity':'活动'}],
  			currentlist:['current','','',''],
  			ajaxList:[
  				'/v2/page?pageId=1&tabId=1&_=1539936258064',
  				'/v2/page?pageId=1&tabId=10005&_=1539935704263',
  				'/v2/page?pageId=1&tabId=10006&_=1539936294887',
  				'/v2/page?pageId=1&tabId=10010&_=1539936346300'   
  			]
  		}
  	},
  	methods:{
  		isWho(index1,index2){
  			
  			this.who = index1
  			this.handleCurrent(index2)
  			// this.$store.commit('mgx','abc') 
  			this.$store.dispatch('mgxx',this.ajaxList[index2])	

  		},
  		handleCurrent(index){
  			this.currentlist = this.currentlist.map((item,innerIndex)=>{
  				if(index==innerIndex){
  					return 'current'
  				}else{
  					return ''
  				}
  			}) 
  		}
  	},
  	components:{
  		recommend,
  		furniture,
  		home,
  		activity
  	},
    mounted(){
      
    }
}
</script>


<style scoped lang="scss">
	ul{
		list-style:none;
		display:flex;
		
		li{
			text-align:center;
			flex:1;
			height:30px;
			line-height:30px;
			float: left;
			span{
				height:28px;
				border-bottom:2px solid black;
				display: inline-block;
			}
			.current{
				border-bottom:2px solid red;
			}
		}
	}
</style>