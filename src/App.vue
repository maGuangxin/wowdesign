<template>
  <div id="app">
    <router-view></router-view> 
    <navbar></navbar>
  </div>
</template>

<script>
	import navbar from './components/navbar'
export default {
	name: 'App' , 
	components:{
		navbar
		}
}
</script>

<style>
 *{
    padding:0px;
    margin:0px;
  }
  .clear::after{
  	content:"";
  	clear: both;
  	visibility:hidden;
  	overflow: hidden;
  	display: block;

  }
  html{
  	font-size: 26.667vw;
  }
  body{
    font-size: 14px;
    background: #f5f5f5;
  }
  ul{
    list-style: none;
  }
</style>
