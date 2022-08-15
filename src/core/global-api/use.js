/* @flow */

import { toArray } from '../util/index'

/**
 * @description: 給Vue添加静态方法use
 * @param {*} Vue
 * @return {*}
 */
export function initUse (Vue: GlobalAPI) {
  /**
   * @description:
   * @param {*} plugin 插件可以是函数或对象类型
   * @return {*} Vue构造函数
   */
  Vue.use = function (plugin: Function | Object) {
    // this.__installedPlugins 等价于Vue._installedPlugins
    // 如果this._installedPlugins不存在，则赋值为空数组
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))

    // 判断this._installedPlugins是否有对应的插件，如果有则返回Vue构造函数
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    // 把伪数组转成为真实数组
    const args = toArray(arguments, 1)
    args.unshift(this)

    if (typeof plugin.install === 'function') {
      // 如果plugin.install是函数类型，则调用install方法
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      // 如果plugin是函数，则直接调用
      plugin.apply(null, args)
    }

    // 把plugin插件添加到this._installedPlugins数组中
    installedPlugins.push(plugin)
    return this
  }
}
