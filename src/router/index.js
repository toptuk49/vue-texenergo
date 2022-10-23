import {
	createRouter,
	createWebHistory
} from 'vue-router'
import vCatalog from '../views/v-catalog'

const routes = [{
	path: '/',
	name: 'catalog',
	component: vCatalog
}]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
