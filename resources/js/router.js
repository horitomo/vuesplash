import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// ストアインポート
import store from './store'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: PhotoList
  },
  {
    path: '/login',
    component: Login,
    // 定義されたルートに切り替わる直前に呼ばれる関数
    // to-アクセスされようとしているルートのルートオブジェクト
    // from-アクセス元のルート
    // next-ページの移動先引数なしだとそのまま
    beforeEnter(to, from, next){
      if (store.getters['auth/check']) {
        next('/')
      } else {
        next()
      }
    }
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
                    mode: 'history', 
                    routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router