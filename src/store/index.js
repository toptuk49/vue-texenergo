import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
	state: {
		categories: [],
		brands: [],
		keyboards: {}
	},
	getters: {},
	mutations: {
		SET_CATEGORIES_TO_STORE(state, categories) {
			state.categories = categories
		},
		SET_BRANDS_TO_STORE(state, brands) {
			state.brands = brands
		},
		SET_KEYBOARDS_TO_STORE(state, keyboards) {
			state.keyboards = keyboards
		}
	},
	actions: {
		FETCH_CATEGORIES({commit}) {
			return axios.get('http://localhost:3000/categories')
				.then((categories) => {
					commit('SET_CATEGORIES_TO_STORE', categories.data)
				})
		},
		FETCH_BRANDS({commit}) {
			return axios.get('http://localhost:3000/brands')
				.then((brands) => {
					commit('SET_BRANDS_TO_STORE', brands.data)
				})
		},
		FETCH_KEYBOARDS({commit}) {
			return axios.get('http://localhost:3000/keyboard')
				.then((keyboards) => {
					commit('SET_KEYBOARDS_TO_STORE', keyboards.data)
				})
		}
	},
	modules: {}
})
