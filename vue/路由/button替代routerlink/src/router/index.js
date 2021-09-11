
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const Home = () => import('../views/Home')
const Fruits = () => import('../views/Fruits')
const Animals = () => import('../views/Animals')

const About = () => import('../views/About')
const Cart = () => import('../views/Cart')
const Profile = () => import('../views/Profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: '',
        redirect: 'fruits'
      },
      {
        path: 'fruits',
        component: Fruits,
      },
      {
        path: 'animals',
        component: Animals,
      }
    ]
  },
  {
    path: '/cart/:cartId',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router