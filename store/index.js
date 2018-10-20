import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 
export default new Vuex.Store({
	state:{
		ajaxUrl:'/v2/page?pageId=1&tabId=1&_=1539936258064',
		bannerList:[],
		moduleContent:[]

	},
	mutations:{
		mgx(state,data){
			state.ajaxUrl = data
			
		},
		handleBanner(state,data){
			state.bannerList = data
			console.log(state.bannerList)
		},
		handleModuleContent(state,data){
			state.moduleContent = data
			console.log(state.moduleContent)
		}
	},
	actions:{
		mgxx(state,data){
			state.commit('mgx',data)
		},
		getBannerData(state,data){
			state.commit('handleBanner',data)
		},
		getModuleContent(state,data){
			data.shift()
			state.commit('handleModuleContent',data)
		}
	}
})