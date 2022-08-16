/* @flow */

import { warn } from 'core/util/index'

export * from './attrs'
export * from './class'
export * from './element'

/**
 * Query an element selector if it's not an element already.
 */
/**
 * @description: 在document找到el，如果没有则创建一个div
 * @param {*} el 字符串或者是dom对象
 * @return {*} 返回dom对象
 */
export function query (el: string | Element): Element {
  if (typeof el === 'string') {
    // 如果el是字符串，则在document查找对应的dom元素，能找到就返回dom对象
    const selected = document.querySelector(el)
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      // 如果document没有找到el，则创建div元素，并返回
      return document.createElement('div')
    }
    return selected
  } else {
    // 如果el是一个dom对象，则直接返回
    return el
  }
}
