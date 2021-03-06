import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShoppingCarContainer from './components/tabbar/ShoppingCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shoppingCar', component: ShoppingCarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newsList', component: NewsList },
    { path: '/home/newsInfo/:id', component: NewsInfo },
    { path: '/home/photoList', component: PhotoList },
    { path: '/home/photoInfo/:id', component: PhotoInfo }
  ],
  linkActiveClass: "mui-active" // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router