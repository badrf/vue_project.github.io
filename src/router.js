import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import List from './components/List.vue';
import Stat from './components/Statistics.vue';
import Campus from './components/campus.vue';
import fac from './components/fac.vue';
import profile from './components/profile.vue';
import Form from './components/addetudiant.vue';

export default new Router({
	mode: 'history',
	routes: [{path: '/', component: HomePage},
	{path: '/fac/:id1?/list/:id2?', component: List},
	{path: '/campus', component: Campus},
	{path: '/stat', component: Stat},
	{path: '/fac/:id1?/list/:id2?/profile/:id3?', component: profile},
	{path: '/fac/:id?', component: fac},
	{path: '/form', component: Form}]
});