<template>
  <div id="app">
	
    <router-view></router-view> 
  	<scroll2Top></scroll2Top>
    <navbar></navbar>	
  </div>
</template>

<script>
 import navbar from './components/navbar'
 import scroll2Top from './components/scroll2Top'
export default {
  name: 'App',
  components:{
  	navbar,
  	scroll2Top
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.clear::after{
		content:"";
		clear: both;
		visibility:hidden;
		overflow: hidden;
		display: block;

	}
</style>
