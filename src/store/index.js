import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

import vuexAlong from 'vuex-along'
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		imglist:[],
		title: ' ',
		isshow1:true,
		isshow2:false,
		handleSwitch:true,
		ajaxdatalist:[],
		tabsList:[
			{tabname:'All',path:35},	
			{tabname:'沙发',path:20},
			{tabname:'椅凳',path:21},
			{tabname:'桌几',path:22},
			{tabname:'床',path:2310},
			{tabname:'柜架',path:24},
			{tabname:'餐桌',path:2210},
			{tabname:'茶几和边桌',path:2211},
			{tabname:'书桌',path:2212},
			{tabname:'隔断',path:2414}		
		]
	},

	mutations:{
		changelist(state,res){
			state.imglist = res.data.data
			console.log(res.data.data)
		},
		changetitle(state,payload){
			state.title = payload
			console.log(payload)
			state.handleSwitch =!payload;
		},
		changeAjax(state,data){
			state.ajaxdatalist = data
		
		}
	},
	actions:{
		toget(state,path){
			axios.get(path).then((res)=>{
				state.commit("changelist",res)
			})
		},
		tabsList(store,data){
			console.log('tabsList')
			store.commit('changeAjax',data)
		}
	},
	//保存vuex状态
	plugins: [vuexAlong]

})
export default store
