import Vue from "vue"
import vuex from "vuex"
import axios from "axios"
import vuexAlong from 'vuex-along'

Vue.use(vuex)

var store = new vuex.Store({
	state:{
		imglist:[],
		title: ' ',
		isshow1:true,
		isshow2:false,
		handleSwitch:false
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
		}
	},
	actions:{
		toget(state,path){
			axios.get(path).then((res)=>{
				state.commit("changelist",res)
			})
		}
	},
	//保存vuex状态
	plugins: [vuexAlong]

})
export default store
