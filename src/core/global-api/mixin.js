/* @flow */

import { mergeOptions } from '../util/index'

/**
 * @description: 给Vue添加静态方法mixin
 * @param {*} Vue
 * @return {*}
 */
export function initMixin (Vue: GlobalAPI) {
  /**
   * @description: 把mixin合并到Vue.options
   * @param {*} mixin 对象类型
   * @return {*}
   */
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
