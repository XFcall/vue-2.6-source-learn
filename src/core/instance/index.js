import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 在实例化之前会调用initMixin(Vue), _init方法会绑定在Vue.prototype上
  this._init(options)
}
// 绑定_init方法在Vue.prototype上
initMixin(Vue)
// 绑定$data $props $set $delete $watch 在Vue.prototype上
stateMixin(Vue)
// 绑定$on $once $set $off $emit 在Vue.prototype上
eventsMixin(Vue)
// 绑定_update $forceUpdate $destroy 在Vue.prototype上
lifecycleMixin(Vue)
// 绑定$nextTick _render 和以_字母渲染的辅助函数 在Vue.prototype上
renderMixin(Vue)

export default Vue
