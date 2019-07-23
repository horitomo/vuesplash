import './bootstrap'
import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
// ストアをインポート
import store from './store' 
// ルートコンポーネントをインポートする
import App from './App.vue'

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  store, // ストア追加
  components: { App }, // ルートコンポーネントの使用を宣言する
  template: '<App />' // ルートコンポーネントを描画する
});