import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import UserProfile from "./components/UserProfile.vue";
import ProfileSettings from "./components/ProfileSettings.vue";


const routes = [
  {
    path: "/home",
    component: Home,
    alias: "/",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/UserProfile/:username",
    component: UserProfile,
  },
  {
    path: "/ProfileSettings/:username",
    component: ProfileSettings,
    beforeEnter: (to, from, next) => {
			let bool=false;
			bool !==localStorage.getItem('token');
			if (localStorage.getItem('token')!=null && to.params.username==localStorage.getItem('username')) {
				next()
			} else {
				next("/login")
			}
		}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;