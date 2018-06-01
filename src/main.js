// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//项目的开始


import Vue from 'vue'
//相当于之前的require引入,引入Vue

import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
	// components中的是组件的名称
  template: '<App/>'
})




// //项目测试
// import Vue from 'vue'
// //相当于之前的require引入

// var myHeader={
// 	template:'<p>this {{}} is my header</p>'
// }

// //实例化Vue对象
// new Vue({
// 	el:'#app',
// 	data:{
// 		word:"hello world2"
// 	},
// 	components:{
// 		'my-header':myHeader
// 	}
// })




// //项目测试
// import Vue from 'vue'
// import App from  './App'
// //实例化对象
// new Vue({
// 	//根元素
// 	el:'#app',
// 	//渲染
// 	render: h=> h(App)
// })
