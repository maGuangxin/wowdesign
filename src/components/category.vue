<template>
 	<div class="category">
    <router-view></router-view>
    <div v-if="$store.state.handleSwitch">
      <searchbar></searchbar> 
      <ul>
        <img src="/static/images/furniture.png" alt="">
        <li v-for="data,index in dataList" @click="handleClick1(data,index)">
         <router-link tag="li" activeClass="" to="" >
           <span>{{data.name}}</span>

         </router-link>
        </li>

        <img src="/static/images/household.png" alt="">
        <li v-for="data1,index in dataList1" @click="handleClick2(data1,index)">
         <router-link tag="li" activeClass="" to="" >
           <span>{{data1.name}}</span>
         </router-link>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import searchbar from './index/searchbar'

export default {
  data(){
  	return {
  	  dataList:[
        {name:'沙发',id:20},
        {name:'椅凳',id:21},
        {name:'桌几',id:22},
        {name:'床',id:2310},
        {name:'柜架',id:24},
        {name:'餐桌',id:2210},
        {name:'茶几和边桌',id:2211},
        {name:'书桌',id:2212},
        {name:'隔断',id:2414}
      ],
      dataList1:[
        {name:'灯具',id:25},
        {name:'用餐',id:26},
        {name:'时尚生活',id:32},
        {name:'烹饪',id:27},
        {name:'纺织品',id:28},
        {name:'家饰',id:29},
        {name:'卫浴',id:31}
      ],
      handleSwitch:true
  	}
  },
  components:{
    searchbar
  },
  methods:{
    handleClick1(data,index){
      this.$router.push(`/category/inner/${data.id}`)
      this.$store.state.isshow1 = true
      this.$store.state.isshow2 = false
      this.$store.commit('changetitle',data.name)
      
      
    },
    handleClick2(data,index){
      this.$router.push(`/category/inner/${data.id}`)
      this.$store.state.isshow1 = false
      this.$store.state.isshow2 = true
      this.$store.commit('changetitle',data.name)
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	div.category{
    margin-bottom:1rem;
    img{
  		margin-top:0.1rem;
  		width:100%;
  	}
  	ul{
  			list-style:none;
  			padding-left:0;
  		li{
  			height:0.5rem;
  			line-height:0.5rem;
  			font-size:18px;
  			border-bottom:1px solid #ccc;
  			text-indent:0.15rem;
  		}
  	}
    
  }
	
</style>
